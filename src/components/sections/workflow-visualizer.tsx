"use client";

import { useActionState, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { Bot, RefreshCw, Send } from "lucide-react";
import dynamic from 'next/dynamic';

import { handleVisualizeWorkflow } from "@/app/actions";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "../ui/label";
import { Skeleton } from "../ui/skeleton";

const MermaidDiagram = dynamic(() => import('../ui/mermaid-diagram'), {
  ssr: false,
  loading: () => <Skeleton className="h-[450px] w-full" />,
});


const initialState = {
  message: "",
  data: null as { workflowDiagram: string } | null,
  errors: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
          Generando...
        </>
      ) : (
        <>
          <Send className="mr-2 h-4 w-4" />
          Visualizar Flujo de Trabajo
        </>
      )}
    </Button>
  );
}

export default function WorkflowVisualizerSection() {
  const [state, formAction] = useActionState(handleVisualizeWorkflow, initialState);
  const [description, setDescription] = useState("");
  const [diagram, setDiagram] = useState<string | null>(null);

  useEffect(() => {
    if (state.data?.workflowDiagram) {
      setDiagram(state.data.workflowDiagram);
    } else if (state.message && state.message !== 'Success' && !state.errors) {
      // Mantenemos el diagrama anterior si la nueva llamada falla
      // y solo limpiamos si explícitamente no hay diagrama
      if (!state.data?.workflowDiagram) {
        setDiagram(null);
      }
    }
  }, [state]);

  const handleSubmit = (formData: FormData) => {
    // No limpiar el diagrama al enviar, esperar la respuesta
    formAction(formData);
  };
  
  const getErrorMessage = () => {
    if (!state.message || state.message === 'Success' || state.errors) return null;

    // Mensaje genérico y profesional
    return state.message;
  }

  return (
    <section id="visualizer" className="py-16 sm:py-24 bg-muted/40">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <div className="inline-block rounded-full bg-primary/10 p-3">
              <Bot className="h-8 w-8 text-primary" />
            </div>
            <h2 className="mt-4 font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
              Visualizador de Flujo de Trabajo con IA
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Describa su proceso de negocio actual y nuestra IA generará una propuesta de flujo de trabajo automatizado, destacando áreas de mejora.
            </p>
        </div>

        <div className="mt-12">
           <form action={handleSubmit}>
              <Card>
                <CardHeader>
                  <CardTitle>Describa Su Proceso</CardTitle>
                  <CardDescription>
                    Sea lo más detallado posible para obtener los mejores resultados. Por ejemplo: "Recibimos pedidos por correo electrónico, los ingresamos manualmente en una hoja de cálculo y luego creamos una factura en otro sistema".
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid w-full gap-2">
                    <Label htmlFor="processDescription" className="sr-only">
                      Descripción del Proceso
                    </Label>
                    <Textarea
                      id="processDescription"
                      name="processDescription"
                      placeholder="Escriba su proceso de negocio aquí..."
                      rows={8}
                      required
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                    {state.errors?.processDescription && (
                      <p className="text-sm text-destructive">{state.errors.processDescription[0]}</p>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <SubmitButton />
                </CardFooter>
              </Card>
            </form>

            <Card className="min-h-[300px] mt-8">
                <CardHeader>
                <CardTitle>Flujo de Trabajo Automatizado Propuesto</CardTitle>
                <CardDescription>
                    El diagrama de su flujo de trabajo generado por IA aparecerá aquí.
                </CardDescription>
                </CardHeader>
                <CardContent>
                <div className="aspect-video w-full overflow-x-auto rounded-lg border-2 border-dashed bg-background flex items-center justify-center p-4">
                    {diagram ? (
                        <MermaidDiagram chart={diagram} />
                    ) : (
                    <div className="flex flex-col items-center gap-2 text-muted-foreground text-center">
                        <Bot className="h-8 w-8" />
                        <p>Esperando la descripción del proceso</p>
                        {getErrorMessage() && (
                          <p className="p-4 text-center text-destructive max-w-md">{getErrorMessage()}</p>
                        )}
                    </div>
                    )}
                </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
