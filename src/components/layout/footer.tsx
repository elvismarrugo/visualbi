import Link from "next/link";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";
import Logo from "../ui/logo";
import { Button } from "../ui/button";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
        <path d="M16.75 13.96c.25.13.41.2.52.34.11.14.15.42.08.75-.07.33-.52.63-1.09.82s-1.12.33-1.78.2c-.66-.13-1.38-.5-2.2-1.11-.82-.6-1.5-1.3-2.04-2.11-.54-.82-.82-1.72-.8-2.7.02-.98.3-1.83.8-2.53.5-.7 1.15-1.05 1.9-1.05.28 0 .53.05.75.13.22.08.4.2.52.36s.2.36.27.58c.07.22.07.4.04.56-.03.17-.1.38-.2.58-.1.2-.23.38-.4.56-.17.17-.3.3-.4.4-.1.1-.18.18-.23.26-.05.08-.07.14-.07.19s0 .1.04.16c.04.06.1.13.18.2.08.07.18.16.28.25.1.09.22.18.34.28.12.1.23.18.34.25.11.07.2.1.28.1.08 0 .14-.01.19-.04.05-.03.1-.06.13-.1.03-.04.07-.08.1-.13.04-.05.08-.08.13-.1.05-.03.1-.04.14-.04h.1c.07 0 .14.01.2.04.07.03.13.06.18.1.05.04.1.1.13.16.03.06.04.1.04.13s-.01.1-.04.13c-.03.03-.06.07-.1.1-.04.04-.08.08-.13.13-.05.05-.1.08-.16.1-.06.02-.1.04-.13.05-.03.01-.07.01-.1.01zM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/>
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
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.instagram.com/somosvisualbi" aria-label="Instagram" target="_blank">
                <Instagram className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <Link href="https://wa.me/573176589172" aria-label="WhatsApp" target="_blank">
                    <WhatsAppIcon className="h-5 w-5" />
                </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/elvismarrugo" aria-label="LinkedIn" target="_blank">
                <Linkedin className="h-5 w-5" />
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
