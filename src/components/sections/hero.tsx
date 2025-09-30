import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-background");

  return (
    <section id="hero" className="relative h-[80vh] min-h-[500px] w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          priority
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-black/50 p-8 rounded-xl backdrop-blur-sm">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="text-primary">Automatiza.</span> Innova. <span className="text-accent">Acelera.</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-neutral-200">
              Diseñamos soluciones tecnológicas a medida que optimizan su negocio, desde la automatización del comercio electrónico hasta paneles de datos personalizados.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="#services">
                  Explorar Soluciones
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="#contact">Solicitar una Demostración</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
