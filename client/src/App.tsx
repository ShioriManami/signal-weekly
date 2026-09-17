import NotFound from "@/pages/NotFound";
import { MotionConfig } from "motion/react";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ToasterGate } from "./lib/toast";
import Home from "./pages/Home";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      {/* Ruta de respaldo final */}
      <Route component={NotFound} />
    </Switch>
  );
}

// Tema: la landing es solo clara. Para habilitar el cambio de tema,
// pasar `switchable` a ThemeProvider y usar el hook `useTheme`.

// Motion: `reducedMotion="user"` hace que toda animación de motion respete
// la preferencia del sistema (los transforms se vuelven instantáneos).

// Toasts: <ToasterGate/> no monta nada hasta el primer toast, así `sonner`
// queda fuera del bundle inicial (ver `@/lib/toast`).
// Sin <TooltipProvider>: no hay ningún <Tooltip> en la landing, así que Radix
// tampoco entra al bundle. Si se agrega uno, envolver ahí mismo con el
// provider de `@/components/ui/tooltip`.

function App() {
  return (
    <ErrorBoundary>
      <MotionConfig reducedMotion="user">
        <ThemeProvider defaultTheme="light">
          <ToasterGate />
          <Router />
        </ThemeProvider>
      </MotionConfig>
    </ErrorBoundary>
  );
}

export default App;
