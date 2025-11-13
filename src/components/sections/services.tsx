import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShoppingCart, LayoutDashboard } from "lucide-react";

const N8nIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 256 256"
        width="40"
        height="40"
        fill="currentColor"
        {...props}
    >
        <path d="M255.4 96.2H176l-32 39.4 32 39.5h79.3l-32-39.5-32.1-39.4h111.2V96.2zM80.1 96.2H0v42.6h111.2l-32-39.5-32.1-39.4H80.1v36.3zM80.1 135.7H.1v42.6h79.9v-36.3L112.1 182l32-39.5H80.1v-6.8z"/>
    </svg>
);


const services = [
  {
    icon: <ShoppingCart className="h-10 w-10 text-primary" />,
    title: "Automatización de E-commerce",
    description: "Optimice las operaciones de su tienda en línea, desde la gestión de inventario hasta el cumplimiento de pedidos, reduciendo el trabajo manual y aumentando la eficiencia.",
    useCase: "Perfecto para minoristas en línea de alto volumen."
  },
  {
    icon: <LayoutDashboard className="h-10 w-10 text-primary" />,
    title: "Dashboards Personalizados",
    description: "Obtenga información en tiempo real con dashboards de datos a medida. Conectamos sus diversas fuentes de datos en una única interfaz intuitiva.",
    useCase: "Ideal para la toma de decisiones basada en datos."
  },
  {
    icon: <N8nIcon className="text-primary" />,
    title: "Automatización de Procesos con n8n",
    description: "Conectamos sus herramientas y creamos flujos de trabajo automatizados con n8n. Desde tareas simples hasta procesos complejos, liberamos a su equipo para que se enfoque en lo que realmente importa.",
    useCase: "Para empresas que buscan maximizar la eficiencia y reducir errores."
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
