import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/logo.png"
        alt="Visual BI Logo"
        width={32}
        height={32}
        className="h-8 w-8"
        aria-hidden="true"
      />
      <span className="text-xl font-bold tracking-tight text-foreground">
        Visual BI
      </span>
    </div>
  );
}
