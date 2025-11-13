import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

const portfolioItems = [
  {
    id: "portfolio-1",
    title: "Revisión de E-commerce para un Gigante Minorista",
    description: "Sincronización automatizada de inventario en múltiples almacenes y tiendas, reduciendo drásticamente los tiempos de actualización y eliminando roturas de stock.",
    metric: "Reducción del 95% en errores de stock",
    tags: ["E-commerce", "Automatización"],
  },
  {
    id: "portfolio-2",
    title: "Análisis en Tiempo Real con Datos Oportunos",
    description: "Desarrollo de un dashboard de BI personalizado que agrega datos de más de 5 fuentes, proporcionando a la alta dirección información instantánea y procesable.",
    metric: "Ciclos de informes 50% más rápidos",
    tags: ["Dashboards", "BI"],
  },
  {
    id: "portfolio-3",
    title: "Integración de Plataforma SaaS",
    description: "Se diseñó una capa de integración escalable que conecta el CRM, ERP y las plataformas de marketing de un cliente en un sistema unificado.",
    metric: "Aumento del 200% en la consistencia de los datos",
    tags: ["Integraciones", "API"],
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
            Casos de Éxito
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Explore cómo hemos transformado negocios con nuestras soluciones innovadoras.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => {
            const portfolioImage = PlaceHolderImages.find((img) => img.id === item.id);
            return (
              <Card key={item.id} className="overflow-hidden flex flex-col group">
                {portfolioImage && (
                  <div className="overflow-hidden">
                    <Image
                      src={portfolioImage.imageUrl}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                      data-ai-hint={portfolioImage.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline text-xl font-bold">{item.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center text-primary font-semibold">
                    <TrendingUp className="mr-2 h-5 w-5" />
                    <span>{item.metric}</span>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
