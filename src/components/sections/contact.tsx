"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { Mail, Send, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { handleContactForm } from "@/app/actions";

function SubmitButton() {
    const { pending } = useFormStatus();
  
    return (
      <Button type="submit" disabled={pending} className="w-full">
        {pending ? (
          <>
            <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            Enviar Consulta
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    );
}

const initialState = {
    message: "",
    errors: null,
    success: false,
};

export default function ContactSection() {
    const { toast } = useToast();
    const [state, formAction] = useActionState(handleContactForm, initialState);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (!state) return;
        
        if (state.success) {
            toast({
                title: "¡Formulario Enviado!",
                description: "Gracias por tu consulta. Nos pondremos en contacto contigo en breve.",
            });
            formRef.current?.reset(); // Limpia el formulario
        } else if (state.message && !state.errors) {
            // Muestra errores del servidor que no son de validación
            toast({
                variant: "destructive",
                title: "Error al Enviar",
                description: state.message,
            });
        }
    }, [state, toast]);


  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="space-y-4">
                <div className="inline-block rounded-full bg-primary/10 p-3">
                    <Mail className="h-8 w-8 text-primary" />
                </div>
                <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
                    Construyamos Juntos
                </h2>
                <p className="text-lg text-muted-foreground">
                    ¿Tiene un proyecto en mente? Nos encantaría saber de él. Complete el formulario y un miembro de nuestro equipo se pondrá en contacto con usted en breve para discutir cómo podemos ayudarlo a alcanzar sus metas.
                </p>
                <div className="text-sm text-muted-foreground">
                    <p>O envíenos un correo electrónico directamente a: <a href="mailto:elvix@somosvisualbi.com" className="text-primary font-semibold hover:underline">elvix@somosvisualbi.com</a></p>
                </div>
            </div>
            <Card>
            <form ref={formRef} action={formAction}>
              <CardHeader>
                <CardTitle>Consulta de Cliente</CardTitle>
                <CardDescription>Cuéntenos sobre su proyecto.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input id="name" name="name" placeholder="Su Nombre" required />
                   {state?.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input id="email" name="email" type="email" placeholder="su.email@empresa.com" required />
                  {state?.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="details">Detalles del Proyecto</Label>
                  <Textarea
                    id="details"
                    name="details"
                    placeholder="Describa su proyecto, objetivos y cualquier desafío actual."
                    required
                    rows={5}
                  />
                  {state?.errors?.details && <p className="text-sm text-destructive">{state.errors.details[0]}</p>}
                </div>
              </CardContent>
              <CardFooter>
                <SubmitButton />
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
