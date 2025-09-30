import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShoppingCart, LayoutDashboard, Shuffle } from "lucide-react";

const services = [
  {
    icon: <ShoppingCart className="h-10 w-10 text-primary" />,
    title: "Automatización de E-commerce",
    description: "Optimice las operaciones de su tienda en línea, desde la gestión de inventario hasta el cumplimiento de pedidos, reduciendo el trabajo manual y aumentando la eficiencia.",
    useCase: "Perfecto para minoristas en línea de alto volumen."
  },
  {
    icon: <LayoutDashboard className="h-10 w-10 text-primary" />,
    title: "Paneles Personalizados",
    description: "Obtenga información en tiempo real con paneles de datos a medida. Conectamos sus diversas fuentes de datos en una única interfaz intuitiva.",
    useCase: "Ideal para la toma de decisiones basada en datos."
  },
  {
    icon: <Shuffle className="h-10 w-10 text-primary" />,
    title: "Integraciones Personalizadas",
    description: "Conecte sus aplicaciones empresariales esenciales sin problemas. Nuestras integraciones de API personalizadas aseguran que su ecosistema de software funcione en armonía.",
    useCase: "Esencial para empresas con diversas herramientas de software."
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-muted/40">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
            Nuestras Soluciones Principales
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Construimos soluciones robustas para resolver sus desafíos empresariales más complejos.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="items-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  {service.icon}
                </div>
                <CardTitle className="font-headline text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
                <p className="mt-4 text-sm font-semibold text-primary">{service.useCase}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
