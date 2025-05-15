
import Image from 'next/image';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container mx-auto">
        <AnimatedSection animationType="fadeInUp" className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Kim <span className="gradient-text from-secondary to-primary bg-gradient-to-r">jesteśmy?</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          <AnimatedSection animationType="slideInLeft" delay={100} className="md:col-span-2">
             <Card className="overflow-hidden shadow-2xl border-primary/30">
                {/* 
                  Zdjęcie prezesa. Jeśli chcesz je zmienić:
                  1. Umieść nowy plik graficzny w folderze `public/assets/` (np. `public/assets/nowe-zdjecie-prezesa.jpg`).
                  2. Zmień poniższy atrybut `src` na ścieżkę do Twojego nowego pliku, np. `src="/assets/nowe-zdjecie-prezesa.jpg"`.
                  3. Upewnij się, że wymiary (width i height) oraz alt tekst są odpowiednie dla Twojej grafiki.
                */}
                <Image
                  src="/assets/prezes.jpg" 
                  alt="Prezes ByteTech - Szymon Żołnierczyk"
                  width={600}
                  height={700}
                  className="object-cover w-full h-auto aspect-[3/4] transition-transform duration-500 hover:scale-105"
                  data-ai-hint="professional portrait"
                />
             </Card>
          </AnimatedSection>

          <AnimatedSection animationType="slideInRight" delay={200} className="md:col-span-3">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Szymon Żołnierczyk, Założyciel ByteTech</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              ByteTech to jednoosobowa firma prowadzona przez Szymona Żołnierczyka – inżyniera sieciowego z wieloletnim doświadczeniem w projektach korporacyjnych i publicznych. Specjalizujemy się w rozwiązaniach dopasowanych do potrzeb firm, instytucji i samorządów. Stawiamy na realną wiedzę, uczciwe podejście i maksymalną jakość wykonania.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0" />
                Wieloletnie doświadczenie w branży IT.
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0" />
                Indywidualne podejście do każdego klienta.
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0" />
                Specjalizacja w nowoczesnych technologiach sieciowych.
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0" />
                Gwarancja najwyższej jakości usług.
              </li>
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

