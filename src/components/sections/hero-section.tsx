
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
        <AnimatedSection animationType="fadeInUp" className="mb-8">
          <Logo
            width={1182}
            height={244}
            className="h-auto w-full max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto" 
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
      
      {/* Animated decorative lines - PRZYWRÓCONE */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 z-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute bottom-0 left-0 w-full h-auto"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMax slice"
        >
          <defs>
            <linearGradient id="lineGradientHero" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: 'hsl(var(--secondary))', stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.3 }} />
            </linearGradient>
            <style>{`
              .line-path-hero {
                stroke-dasharray: 1000; /* Approximate length of path, might need adjustment if path changes */
                stroke-dashoffset: 1000;
                animation: drawLineHero 10s ease-in-out infinite;
              }
              @keyframes drawLineHero {
                0% {
                  stroke-dashoffset: 1000;
                  opacity: 0;
                }
                10% { /* Start to appear */
                  opacity: 1;
                }
                60% { /* Fully drawn and visible */
                  stroke-dashoffset: 0;
                  opacity: 1;
                }
                90% { /* Start fading out */
                  stroke-dashoffset: 0; /* Line stays drawn */
                  opacity: 1;
                }
                100% { /* Fully faded out, ready to loop */
                  stroke-dashoffset: 0; /* Line stays drawn but invisible */
                  opacity: 0;
                }
              }
            `}</style>
          </defs>
          {/* Path 1 */}
          <path
            fill="none"
            stroke="url(#lineGradientHero)"
            strokeWidth="2"
            className="line-path-hero"
            style={{ animationDelay: '0s' }}
            d="M0,192L48,170.7C96,149,192,107,288,112C384,117,480,171,576,192C672,213,768,203,864,181.3C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          {/* Path 2 - slightly different, more subtle */}
          <path
            fill="none"
            stroke="url(#lineGradientHero)"
            strokeWidth="1" // Thinner
            className="line-path-hero"
            style={{ animationDelay: '0.7s', opacity: 0.4 }} // Starts later, more transparent
            d="M0,224L60,229.3C120,235,240,245,360,234.7C480,224,600,192,720,181.3C840,171,960,181,1080,197.3C1200,213,1320,235,1380,245.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
}
