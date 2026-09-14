# Signal Weekly

Landing page para un newsletter semanal de insights de negocio, producto y tecnología. Es una pieza de portafolio: una demo visual, en español, pensada para mostrar a clientes cómo se ve y se siente una landing de suscripción bien terminada.

El formulario de suscripción es demostrativo (no envía datos a ningún servicio).

## Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4
- shadcn/ui (button, card, tooltip, sonner)
- wouter (routing), lucide-react (íconos), sonner (toasts)

## Desarrollo

```bash
pnpm install
pnpm dev       # servidor de desarrollo en http://localhost:3000
pnpm check     # verificación de tipos (tsc --noEmit)
pnpm format    # prettier
pnpm build     # build de producción en ./dist
pnpm preview   # previsualizar el build
```

## Deploy en Vercel

1. Importar el repositorio en Vercel.
2. Framework preset: **Vite**.
3. Build command: `pnpm build`.
4. Output directory: `dist`.

El archivo `vercel.json` ya incluye esta configuración y un rewrite a `index.html` para el routing del lado del cliente.

## Estructura

```
client/
  index.html
  src/
    App.tsx            # providers + rutas
    main.tsx           # punto de entrada
    index.css          # tokens de diseño y estilos globales
    pages/Home.tsx     # landing completa
    pages/NotFound.tsx # 404
    components/        # ErrorBoundary + ui/ (shadcn)
    contexts/          # ThemeContext
    lib/utils.ts       # cn()
```
