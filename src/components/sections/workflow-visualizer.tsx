"use client";

import { useActionState, useFormStatus } from "react";
import Image from "next/image";
import { Bot, RefreshCw, Send } from "lucide-react";

import { handleVisualizeWorkflow } from "@/app/actions";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "../ui/label";
import { Skeleton } from "../ui/skeleton";

const initialState = {
  message: "",
  data: null as { workflowDiagramDataUri: string } | null,
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
  const { pending } = useFormStatus();

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

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
          <Card>
            <form action={formAction}>
              <CardHeader>
                <CardTitle>Describa Su Proceso</CardTitle>
                <CardDescription>
                  Sea lo más detallado posible para obtener los mejores resultados. Por ejemplo: "Recibimos pedidos por correo electrónico, los ingresamos manualmente en una hoja de cálculo y luego creamos una factura en otro sistema".
                </CardDescription>
              </CardHeader>
              <CardContent>
                  <div className="grid w-full gap-2">
                    <Label htmlFor="processDescription" className="sr-only">Descripción del Proceso</Label>
                    <Textarea
                      id="processDescription"
                      name="processDescription"
                      placeholder="Escriba su proceso de negocio aquí..."
                      rows={8}
                      required
                    />
                    {state.errors?.processDescription && (
                      <p className="text-sm text-destructive">{state.errors.processDescription[0]}</p>
                    )}
                  </div>
              </CardContent>
              <CardFooter>
                <SubmitButton />
              </CardFooter>
            </form>
          </Card>

          <Card className="min-h-[300px]">
            <CardHeader>
              <CardTitle>Flujo de Trabajo Automatizado Propuesto</CardTitle>
              <CardDescription>
                El diagrama de su flujo de trabajo generado aparecerá aquí.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video w-full rounded-lg border-2 border-dashed bg-background flex items-center justify-center">
                {pending ? (
                   <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <RefreshCw className="h-8 w-8 animate-spin" />
                    <p>La IA está generando su diagrama...</p>
                  </div>
                ) : state.data?.workflowDiagramDataUri ? (
                  <Image
                    src={state.data.workflowDiagramDataUri}
                    alt="Diagrama de flujo de trabajo generado"
                    width={512}
                    height={288}
                    className="object-contain w-full h-full"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <Bot className="h-8 w-8" />
                    <p>Esperando la descripción del proceso</p>
                  </div>
                )}
                {state.message && state.message !== 'Success' && !state.errors && (
                    <p className="p-4 text-center text-destructive">{state.message}</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
