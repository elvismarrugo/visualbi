import Link from "next/link";
import Logo from "../ui/logo";
import { Button } from "../ui/button";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        {...props}
    >
        <path d="M16.75 13.96c.25.13.41.2.46.3.08.11.12.24.12.38.01.25-.12.48-.27.68-.16.2-.38.37-.63.46-.25.08-.53.12-.84.12-.33.01-.68-.04-1.02-.13-.73-.2-1.48-.56-2.19-.97-.73-.42-1.39-.94-1.93-1.55-.54-.6-1-1.28-1.35-2.03-.35-.74-.53-1.54-.53-2.38.01-.25.05-.5.14-.73.09-.23.23-.42.4-.58.18-.16.38-.28.6-.36.22-.08.45-.12.7-.12.25.01.48.05.7.14.22.09.4.22.54.4.14.18.23.39.29.61.06.22.08.45.06.68-.02.23-.09.46-.2.68l-.25.52-.38.72c-.12.23-.09.5.04.7.13.2.3.35.5.49.27.18.55.33.85.45.3.12.62.18.95.2.25.01.48-.04.7-.12.22-.09.4-.22.55-.38l.12-.12c.07-.07.15-.12.24-.15.09-.03.19-.05.29-.05.11,0,.22.02.32.07.1.04.19.1.27.16l.01.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    </svg>
);


const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4s1.39.63 1.39 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
);


export default function Footer() {
  return (
    <footer className="bg-muted/40">
      <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-2 text-center md:items-start">
            <Link href="/" className="flex items-center gap-1">
              <Logo />
            </Link>
            <p className="text-sm text-muted-foreground">
              Automatizando Su Éxito con Tecnología Inteligente.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.instagram.com/somosvisualbi" aria-label="Instagram" target="_blank">
                <InstagramIcon className="h-10 w-10" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <Link href="https://wa.me/573176589172" aria-label="WhatsApp" target="_blank">
                    <WhatsAppIcon className="h-10 w-10" />
                </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/elvismarrugo" aria-label="LinkedIn" target="_blank">
                <LinkedInIcon className="h-10 w-10" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="mt-6 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} | Desarrollado por{' '}
            <Link href="/" className="font-semibold text-primary hover:underline">
              Visual BI
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
