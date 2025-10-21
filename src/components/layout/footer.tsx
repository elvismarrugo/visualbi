import Link from "next/link";
import Logo from "../ui/logo";
import { Button } from "../ui/button";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <defs>
        <radialGradient id="insta-gradient" r="150%" cx="30%" cy="107%">
          <stop stopColor="#fdf497" offset="0" />
          <stop stopColor="#fdf497" offset="0.05" />
          <stop stopColor="#fd5949" offset="0.45" />
          <stop stopColor="#d6249f" offset="0.6" />
          <stop stopColor="#285AEB" offset="0.9" />
        </radialGradient>
      </defs>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" fill="url(#insta-gradient)"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="#fff" strokeWidth="2"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" fill="none" stroke="#fff" strokeWidth="2"></line>
    </svg>
  );

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
      aria-hidden="true" 
      viewBox="0 0 24 24" 
      fill="#25D366"
      {...props}
    >
        <path d="M19.1 4.9C17.2 3 14.7 2 12 2s-5.2 1-7.1 2.9C3 6.8 2 9.3 2 12s1 5.2 2.9 7.1C6.8 21 9.3 22 12 22s5.2-1 7.1-2.9C21 17.2 22 14.7 22 12s-1-5.2-2.9-7.1zM16.6 18c-.3.8-.7 1.4-1.6 1.8-1 .4-2.1.5-3.3.2-1.2-.3-2.3-.9-3.3-1.7-1.2-1-2.2-2.2-3-3.6-.9-1.4-1.3-3-1.2-4.5.1-1.3.5-2.5 1.3-3.5.7-1 1.6-1.6 2.6-1.9.9-.3 1.8-.3 2.7-.1 1 .2 1.8.6 2.5 1.2.6.6 1 1.4 1.1 2.4.1 1-.1 2.1-.6 3.1-.5 1-1.3 1.9-2.2 2.6l-.1.1c-.2.1-.3.3-.3.5s.1.4.3.5c.1 0 .2.1.3.1.3 0 .6-.1.8-.3l.1-.1c1.2-.8 2.2-1.9 2.8-3.3.4-1 .5-2.1.3-3.2-.2-1.4-.8-2.6-1.7-3.6C16.3 3 14.2 2 12 2c-2.3 0-4.5 1-6.2 2.8C4 6.5 3 9.1 3 12c0 2.8 1.1 5.4 3 7.3 1.8 1.9 4.3 2.8 6.9 2.7h.1c1.4-.1 2.8-.5 4-1.2.9-.5 1.6-1.2 2.1-2.1.6-.9.9-2 .9-3.1s-.3-2.2-.8-3.2c-.6-1-1.4-1.9-2.3-2.6-.4-.3-1-.4-1.5-.2-.5.2-.8.6-1 1.2l-.2.3c-.2.6-.5 1.1-1 1.5-.7.5-1.5.8-2.3.8-1.5 0-2.8-.8-3.8-1.9-1.2-1.3-1.9-3-1.6-4.8.2-1.3 1-2.4 2.1-3.2 1-.7 2.2-1 3.5-1 .5 0 1 .1 1.5.2.7.2 1.3.6 1.8 1.1.5.5.9 1.2 1.1 1.9.2.7.3 1.5.1 2.3-.2.8-.6 1.6-1.1 2.3-.5.7-1.1 1.4-1.8 1.9-.3.2-.4.4-.3.7 0 .2.2.4.4.5.1 0 .2.1.3.1.3 0 .6-.1.8-.3l.1-.1c1.3-.9 2.4-2.1 3-3.6.4-1.1.5-2.3.3-3.5-.2-1.5-.9-2.9-2-4C17.2 3.1 14.7 2.1 12 2.1s-5.2 1-7.1 2.9C3 6.9 2 9.4 2 12.1c0 2.8 1.1 5.5 3.1 7.5s4.5 3.1 7.4 3.1h.1c1.5 0 3-.4 4.3-1.2.9-.6 1.7-1.3 2.3-2.3.6-1 .9-2.1.9-3.3s-.3-2.3-.8-3.4z" fillRule="evenodd" clipRule="evenodd" />
    </svg>
);

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="#0077B5"
      {...props}
    >
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.75c0-1.4-1.2-2.5-2.5-2.5S11 12.85 11 14.25V19h-3v-9h3v1.35c.7-1.2 2-1.85 3.5-1.85 2.5 0 4.5 2.2 4.5 5v5.5z"/>
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
                <InstagramIcon className="h-7 w-7" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <Link href="https://wa.me/573176589172" aria-label="WhatsApp" target="_blank">
                    <WhatsAppIcon className="h-7 w-7" />
                </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/elvismarrugo" aria-label="LinkedIn" target="_blank">
                <LinkedInIcon className="h-7 w-7" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="mt-6 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Soluciones Visual BI. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}