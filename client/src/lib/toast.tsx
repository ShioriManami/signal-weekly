import { lazy, Suspense, useSyncExternalStore } from "react";

/**
 * Carga perezosa de `sonner`.
 *
 * `sonner` + su <Toaster/> no entran al bundle inicial: el chunk se pide con el
 * primer toast. No hace falta esperar a que el <Toaster/> monte antes de emitir:
 * sonner reenvía los toasts activos a cada suscriptor nuevo
 * (`ToastState.subscribe` -> `getActiveToasts`), así que el primer toast se ve
 * igual aunque se haya pedido antes de que el chunk llegue.
 *
 * Uso: `import { toast } from "@/lib/toast"` en lugar de `from "sonner"`.
 */

type SonnerModule = typeof import("@/components/ui/sonner");

let modulePromise: Promise<SonnerModule> | null = null;
let requested = false;
const listeners = new Set<() => void>();

function loadSonner() {
  if (!requested) {
    requested = true;
    for (const listener of listeners) listener();
  }
  modulePromise ??= import("@/components/ui/sonner");
  return modulePromise;
}

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  return () => {
    listeners.delete(onStoreChange);
  };
}

const getSnapshot = () => requested;

type ToastKind = "success" | "error" | "info";

const emit =
  (kind: ToastKind) =>
  (message: string): void => {
    void loadSonner().then(sonner => {
      sonner.toast[kind](message);
    });
  };

export const toast = {
  success: emit("success"),
  error: emit("error"),
  info: emit("info"),
};

const LazyToaster = lazy(() =>
  import("@/components/ui/sonner").then(sonner => ({ default: sonner.Toaster }))
);

/** Monta el <Toaster/> recién cuando alguien pide el primer toast. */
export function ToasterGate() {
  const needsToaster = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getSnapshot
  );

  if (!needsToaster) return null;

  return (
    <Suspense fallback={null}>
      <LazyToaster />
    </Suspense>
  );
}
