import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";
import Logo from "../ui/logo";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="bg-muted/40">
      <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-2 text-center md:items-start">
            <Link href="/" className="flex items-center gap-2">
              <Logo />
            </Link>
            <p className="text-sm text-muted-foreground">
              Automatizando Su Éxito con Tecnología Inteligente.
            </p>
          </div>
          <div className="flex items-center gap-2">
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
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="mt-6 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Soluciones AutomaTech. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
