import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-end gap-2">
      <Image
        src="/logo.png"
        alt="Visual BI Logo"
        width={28}
        height={28}
        className="h-7 w-7"
        aria-hidden="true"
      />
      <span className="text-xl font-bold tracking-tight text-foreground">
        Visual BI
      </span>
    </div>
  );
}
