import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/logo.png"
        alt="Visual BI Logo"
        width={40}
        height={40}
        className="h-10 w-10"
        aria-hidden="true"
      />
      <span className="text-2xl font-bold tracking-tight text-foreground">
        Visual BI
      </span>
    </div>
  );
}
