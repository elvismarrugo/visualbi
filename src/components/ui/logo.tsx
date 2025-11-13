import { Zap } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
       <div className="p-1.5 bg-primary/20 rounded-lg">
        <Zap className="h-6 w-6 text-primary" />
       </div>
      <span className="text-2xl font-bold tracking-tight text-foreground">
        Visual BI
      </span>
    </div>
  );
}
