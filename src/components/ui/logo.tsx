import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/logo.png"
        alt="Visual BI Logo"
        width={48}
        height={48}
        className="h-12 w-12 relative bottom-1"
        aria-hidden="true"
      />
      <span className="text-3xl font-bold tracking-tight text-foreground">
        Visual BI
      </span>
    </div>
  );
}
