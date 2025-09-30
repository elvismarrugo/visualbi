import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShoppingCart, LayoutDashboard, Shuffle } from "lucide-react";

const services = [
  {
    icon: <ShoppingCart className="h-10 w-10 text-primary" />,
    title: "E-commerce Automation",
    description: "Streamline your online store operations, from inventory management to order fulfillment, reducing manual work and increasing efficiency.",
    useCase: "Perfect for high-volume online retailers."
  },
  {
    icon: <LayoutDashboard className="h-10 w-10 text-primary" />,
    title: "Custom Dashboards",
    description: "Gain real-time insights with tailor-made data dashboards. We connect your disparate data sources into a single, intuitive interface.",
    useCase: "Ideal for data-driven decision making."
  },
  {
    icon: <Shuffle className="h-10 w-10 text-primary" />,
    title: "Custom Integrations",
    description: "Connect your essential business applications seamlessly. Our custom API integrations ensure your software ecosystem works in harmony.",
    useCase: "Essential for businesses with diverse software tools."
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-muted/40">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
            Our Core Solutions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We build robust solutions to solve your most complex business challenges.
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
