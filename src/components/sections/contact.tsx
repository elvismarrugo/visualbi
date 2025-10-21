"use client";

import { useFormStatus } from "react";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function SubmitButton() {
    const { pending } = useFormStatus();
  
    return (
      <Button type="submit" disabled={pending} className="w-full">
        {pending ? "Enviando..." : "Enviar Consulta"}
        <Send className="ml-2 h-4 w-4" />
      </Button>
    );
}

export default function ContactSection() {
    const handleSubmit = async (formData: FormData) => {
        // Placeholder for form submission logic
        console.log("Form submitted!");
        console.log({
            name: formData.get("name"),
            email: formData.get("email"),
            details: formData.get("details"),
        });
        // Here you would typically call a server action or API endpoint
        // For now, we just log to the console.
        alert("¡Gracias por su consulta! Nos pondremos en contacto con usted en breve.");
    };

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
                    <p>O envíenos un correo electrónico directamente a: <a href="mailto:contact@automatech.com" className="text-primary font-semibold hover:underline">contact@automatech.com</a></p>
                </div>
            </div>
            <Card>
            <form action={handleSubmit}>
              <CardHeader>
                <CardTitle>Consulta de Cliente</CardTitle>
                <CardDescription>Cuéntenos sobre su proyecto.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input id="name" name="name" placeholder="Su Nombre" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input id="email" name="email" type="email" placeholder="su.email@empresa.com" required />
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
                </div>
              </CardContent>
              <CardContent>
                <SubmitButton />
              </CardContent>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
