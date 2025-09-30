import { Workflow } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Workflow className="h-7 w-7 text-primary" />
      <span className="text-xl font-bold tracking-tight text-foreground">
        AutomaTech
      </span>
    </div>
  );
}
