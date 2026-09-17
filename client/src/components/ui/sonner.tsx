import { useTheme } from "@/contexts/ThemeContext";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme } = useTheme();

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

// Reexportado para que `@/lib/toast` traiga <Toaster/> y `toast` en el mismo
// chunk perezoso: una sola carga de `sonner` con el primer toast.
export { toast } from "sonner";

export { Toaster };
