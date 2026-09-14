import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#fcf8ef] px-4 text-[#111a3b]">
      <Card className="mx-4 w-full max-w-lg border border-[#111a3b]/10 bg-[#fffdf8]/90 shadow-[0_20px_50px_rgba(29,28,62,0.10)] backdrop-blur-sm">
        <CardContent className="pb-8 pt-8 text-center">
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 animate-pulse rounded-full bg-[#d9ceff]" />
              <AlertCircle className="relative h-16 w-16 text-[#7659c7]" />
            </div>
          </div>

          <h1 className="font-display mb-2 text-5xl font-bold tracking-[-0.05em]">
            404
          </h1>

          <h2 className="mb-4 text-xl font-semibold">Página no encontrada</h2>

          <p className="mb-8 leading-relaxed text-[#111a3b]/65">
            La página que buscas no existe.
            <br />
            Es posible que haya sido movida o eliminada.
          </p>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              onClick={handleGoHome}
              className="rounded-full bg-[#111a3b] px-6 py-2.5 text-[#fcf8ef] transition-all duration-200 hover:bg-[#303970]"
            >
              <Home className="mr-2 h-4 w-4" />
              Volver al inicio
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
