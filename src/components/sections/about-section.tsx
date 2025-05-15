
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
              ByteTech to firma specjalizująca się w projektowaniu, wdrażaniu i zabezpieczaniu nowoczesnych sieci informatycznych. Naszym celem jest dostarczanie niezawodnych, bezpiecznych i skalowalnych rozwiązań sieciowych dopasowanych do potrzeb firm, instytucji oraz jednostek samorządu terytorialnego.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Za firmą stoi Szymon Żołnierczyk – inżynier sieciowy z wieloletnim doświadczeniem w realizacji projektów infrastrukturalnych na poziomie korporacyjnym i publicznym. Dzięki praktycznej wiedzy, precyzji działania oraz indywidualnemu podejściu do każdego klienta, ByteTech zyskał zaufanie partnerów w wielu sektorach.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-foreground mt-8">Dlaczego ByteTech?</h3>
            <ul className="space-y-3 text-muted-foreground mb-6">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                Doświadczenie poparte realnymi wdrożeniami w sektorze prywatnym i publicznym.
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                Skoncentrowanie na jakości, bezpieczeństwie i efektywności rozwiązań.
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                Partnerskie podejście i transparentna komunikacja.
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0 mt-1" />
                Specjalizacja w technologiach nowej generacji – od klasycznych sieci LAN/WAN po nowoczesne systemy VPN, firewall, Wi-Fi, HA i segmentację sieci.
              </li>
            </ul>
            <p className="text-foreground font-semibold leading-relaxed">
              Zaprojektujemy i wdrożymy infrastrukturę, która działa. Po prostu.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
