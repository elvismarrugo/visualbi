import { Zap, Clock, Users } from "lucide-react";

const metrics = [
  {
    value: "85%",
    label: "Reducción en el tiempo de actualización de inventario",
    icon: <Clock className="h-8 w-8" />,
  },
  {
    value: "90%",
    label: "Aumento de eficiencia en los procesos",
    icon: <Zap className="h-8 w-8" />,
  },
  {
    value: "500+",
    label: "Horas de trabajo manual ahorradas",
    icon: <Users className="h-8 w-8" />,
  },
];

export default function MetricsSection() {
  return (
    <section id="metrics" className="py-16 sm:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
          {metrics.map((metric, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className="text-accent">{metric.icon}</div>
              <p className="font-headline text-4xl font-extrabold tracking-tight">
                {metric.value}
              </p>
              <p className="text-lg font-medium text-primary-foreground/80">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
