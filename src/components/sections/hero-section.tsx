
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui/animated-section';
import { ChevronRight, Send } from 'lucide-react';
import { Logo } from '@/components/ui/logo';

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      {/* Decorative background elements (pulsing glows) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full filter blur-3xl animate-pulse-glow opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl animate-pulse-glow animation-delay-2000 opacity-50"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <AnimatedSection animationType="fadeInUp">
          <Logo
            width={1182}
            height={244}
            className="h-auto w-full max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto drop-shadow-[0_0_8px_hsl(var(--background)/0.7)]"
          />
        </AnimatedSection>

        <AnimatedSection animationType="fadeInUp" delay={100} className="mt-60">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            <span className="gradient-text from-secondary to-primary bg-gradient-to-r">
              Szybka i bezpieczna sieć.
            </span>
          </h1>
        </AnimatedSection>
        <AnimatedSection animationType="fadeInUp" delay={300}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            ByteTech to niezależna firma inżynierska zajmującą się projektowaniem,
            konfiguracją i zabezpieczaniem nowoczesnych sieci informatycznych.
          </p>
        </AnimatedSection>
        <AnimatedSection animationType="fadeInUp" delay={500}>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button asChild size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/50">
              <Link href="#services">
                Poznaj ofertę
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="group border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-secondary/50">
              <Link href="#contact">
                Skontaktuj się
                <Send className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
      
    </section>
  );
}

