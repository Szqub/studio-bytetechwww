
import Image from 'next/image';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Card } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container mx-auto">
        <AnimatedSection animationType="fadeInUp" className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O <span className="gradient-text from-secondary to-primary bg-gradient-to-r">nas</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          <AnimatedSection animationType="slideInLeft" delay={100} className="md:col-span-2">
             <Card className="overflow-hidden shadow-2xl border-primary/30">
                {/* 
                  Zdjęcie prezesa. Jeśli chcesz je zmienić:
                  1. Umieść nowy plik graficzny w folderze `public/assets/` (np. `public/assets/prezes.jpg`).
                  2. Zmień poniższy atrybut `src` na ścieżkę do Twojego nowego pliku, np. `src="/assets/prezes.jpg"`.
                  3. Upewnij się, że wymiary (width i height) oraz alt tekst są odpowiednie dla Twojej grafiki.
                */}
                <Image
                  src="/assets/prezes.jpg" 
                  alt="Szymon Żołnierczyk - Założyciel ByteTech"
                  width={600}
                  height={700}
                  className="object-cover w-full h-auto aspect-[3/4] transition-transform duration-500 hover:scale-105"
                  data-ai-hint="professional portrait"
                />
             </Card>
          </AnimatedSection>

          <AnimatedSection animationType="slideInRight" delay={200} className="md:col-span-3">
            <p className="text-muted-foreground mb-4 leading-relaxed">
              ByteTech to niezależna firma inżynierska świadcząca usługi z zakresu projektowania, wdrażania i zabezpieczania nowoczesnych sieci komputerowych. Naszą misją jest dostarczanie niezawodnych, bezpiecznych i skalowalnych rozwiązań – bez względu na wielkość organizacji czy poziom zaawansowania klienta.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Za firmą stoi Szymon Żołnierczyk – doświadczony inżynier sieciowy, który od lat realizuje zaawansowane projekty infrastrukturalne dla klientów z różnych sektorów: od międzynarodowych korporacji i instytucji finansowych, przez administrację publiczną i samorządową, aż po małe firmy oraz klientów indywidualnych.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Dzięki temu doświadczeniu możemy z równą skutecznością wdrożyć złożoną infrastrukturę VPN dla globalnej organizacji, jak i pomóc klientowi indywidualnemu skonfigurować domową sieć Wi-Fi, komputer, serwer NAS czy zabezpieczenia rodzicielskie.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-foreground mt-8">Nasze atuty:</h3>
            <ul className="space-y-3 text-muted-foreground mb-6">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                Bogate doświadczenie projektowe w środowiskach o wysokich wymaganiach (bankowość, duże korporacje, jednostki samorządu terytorialnego)
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                Kompleksowe podejście – od audytu i projektu po wdrożenie i utrzymanie
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                Nowoczesne technologie sieciowe – routing, switching, firewalle, VPN, segmentacja, Wi-Fi, redundancja
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                Wsparcie dla każdego klienta – od małej firmy po użytkownika domowego
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                Bezpośrednia współpraca – bez zbędnej biurokracji i handlowców
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                Pełna transparentność i jakość usług na każdym etapie współpracy
              </li>
            </ul>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Bez względu na to, czy potrzebujesz specjalistycznego wsparcia w dużym projekcie IT, czy po prostu chcesz, aby Twój domowy internet działał jak należy – ByteTech to właściwy wybór.
            </p>
            <p className="text-foreground font-semibold leading-relaxed">
              Sieci, które działają. Bez kompromisów.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
