import Link from "next/link";
import Logo from "../ui/logo";
import { Button } from "../ui/button";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FFD600" />
        <stop offset="25%" stopColor="#FF7A00" />
        <stop offset="50%" stopColor="#FF0069" />
        <stop offset="75%" stopColor="#D300C5" />
        <stop offset="100%" stopColor="#7638FA" />
      </linearGradient>
    </defs>
    <path
      fill="url(#ig-grad)"
      d="M12 2.163c3.204 0 3.584.012 4.85.07 1.266.058 2.15.242 2.913.552.795.323 1.458.75 2.123 1.414.665.666 1.09 1.328 1.413 2.123.31.763.494 1.647.552 2.913.058 1.265.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.058 1.266-.242 2.15-.552 2.913-.323.795-.75 1.458-1.414 2.123-.665.665-1.328 1.09-2.123 1.413-.763.31-1.647.494-2.913.552-1.265.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.266-.058-2.15-.242-2.913-.552-.795-.323-1.458-.75-2.123-1.414-.665-.665-1.09-1.328-1.413-2.123-.31-.763-.494-1.647-.552-2.913-.058-1.265-.07-1.646-.07-4.85s.012-3.584.07-4.85c.058-1.266.242-2.15.552-2.913.323-.795.75-1.458 1.414-2.123.665-.666 1.328-1.09 2.123-1.413.763-.31 1.647-.494 2.913-.552A111.43 111.43 0 0112 2.163zm0 1.637c-3.155 0-3.51.01-4.735.065-1.19.053-1.92.23-2.45.432-.57.214-.99.502-1.42.93-.43.43-.715.85-.93 1.42-.203.53-.38 1.26-.432 2.45C2.183 8.49 2.17 8.845 2.17 12s.013 3.51.065 4.735c.053 1.19.23 1.92.432 2.45.214.57.502.99.93 1.42.43.43.85.715 1.42.93.53.203 1.26.38 2.45.432C8.49 21.817 8.845 21.83 12 21.83s3.51-.013 4.735-.065c1.19-.053 1.92-.23 2.45-.432.57-.214.99-.502 1.42-.93.43-.43.715-.85.93-1.42.203-.53.38-1.26.432-2.45.053-1.225.065-1.58.065-4.735s-.013-3.51-.065-4.735c-.053-1.19-.23-1.92-.432-2.45-.214-.57-.502-.99-.93-1.42-.43-.43-.85-.715-1.42-.93-.53-.203-1.26-.38-2.45-.432C15.51 2.183 15.155 2.17 12 2.17h-.001zm0 2.88c-2.91 0-5.26 2.35-5.26 5.26s2.35 5.26 5.26 5.26 5.26-2.35 5.26-5.26-2.35-5.26-5.26-5.26zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm4.865-8.86c0 .54-.435.975-.975.975s-.975-.435-.975-.975c0-.54.435-.975.975-.975s.975.435.975.975z"
    />
  </svg>
);

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
      aria-hidden="true" 
      viewBox="0 0 24 24" 
      fill="#25D366"
      {...props}
    >
        <path d="M19.1 4.9C17.2 3 14.7 2 12 2s-5.2 1-7.1 2.9C3 6.8 2 9.3 2 12s1 5.2 2.9 7.1C6.8 21 9.3 22 12 22s5.2-1 7.1-2.9C21 17.2 22 14.7 22 12s-1-5.2-2.9-7.1zM16.6 18c-.3.8-.7 1.4-1.6 1.8-1 .4-2.1.5-3.3.2-1.2-.3-2.3-.9-3.3-1.7-1.2-1-2.2-2.2-3-3.6-.9-1.4-1.3-3-1.2-4.5.1-1.3.5-2.5 1.3-3.5.7-1 1.6-1.6 2.6-1.9.9-.3 1.8-.3 2.7-.1 1 .2 1.8.6 2.5 1.2.6.6 1 1.4 1.1 2.4.1 1-.1 2.1-.6 3.1-.5 1-1.3 1.9-2.2 2.6l-.1.1c-.2.1-.3.3-.3.5s.1.4.3.5c.1 0 .2.1.3.1.3 0 .6-.1.8-.3l.1-.1c1.2-.8 2.2-1.9 2.8-3.3.4-1 .5-2.1.3-3.2-.2-1.4-.8-2.6-1.7-3.6C16.3 3 14.2 2 12 2c-2.3 0-4.5 1-6.2 2.8C4 6.5 3 9.1 3 12c0 2.8 1.1 5.4 3 7.3 1.8 1.9 4.3 2.8 6.9 2.7h.1c1.4-.1 2.8-.5 4-1.2.9-.5 1.6-1.2 2.1-2.1.6-.9.9-2 .9-3.1s-.3-2.2-.8-3.2c-.6-1-1.4-1.9-2.3-2.6-.4-.3-1-.4-1.5-.2-.5.2-.8.6-1 1.2l-.2.3c-.2.6-.5 1.1-1 1.5-.7.5-1.5.8-2.3.8-1.5 0-2.8-.8-3.8-1.9-1.2-1.3-1.9-3-1.6-4.8.2-1.3 1-2.4 2.1-3.2 1-.7 2.2-1 3.5-1 .5 0 1 .1 1.5.2.7.2 1.3.6 1.8 1.1.5.5.9 1.2 1.1 1.9.2.7.3 1.5.1 2.3-.2.8-.6 1.6-1.1 2.3-.5.7-1.1 1.4-1.8 1.9-.3.2-.4.4-.3.7 0 .2.2.4.4.5.1 0 .2.1.3.1.3 0 .6-.1.8-.3l.1-.1c1.3-.9 2.4-2.1 3-3.6.4-1.1.5-2.3.3-3.5-.2-1.5-.9-2.9-2-4C17.2 3.1 14.7 2.1 12 2.1s-5.2 1-7.1 2.9C3 6.9 2 9.4 2 12.1c0 2.8 1.1 5.5 3.1 7.5s4.5 3.1 7.4 3.1h.1c1.5 0 3-.4 4.3-1.2.9-.6 1.7-1.3 2.3-2.3.6-1 .9-2.1.9-3.3s-.3-2.3-.8-3.4z"/>
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
                <InstagramIcon className="h-6 w-6" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <Link href="https://wa.me/573176589172" aria-label="WhatsApp" target="_blank">
                    <WhatsAppIcon className="h-6 w-6" />
                </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/elvismarrugo" aria-label="LinkedIn" target="_blank">
                <LinkedInIcon className="h-6 w-6" />
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
