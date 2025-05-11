
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Network, ShieldCheck, KeyRound, Briefcase } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string;
}

const services: Service[] = [
  {
    icon: Network,
    title: 'Infrastruktura sieciowa',
    description: 'Projektowanie i wdrażanie solidnych fundamentów sieciowych.',
    details: 'Switche, routery, VLANy, redundancja, LAN/WAN, WiFi korporacyjne.',
  },
  {
    icon: ShieldCheck,
    title: 'Bezpieczeństwo IT',
    description: 'Ochrona Twoich danych i systemów przed cyberzagrożeniami.',
    details: 'Firewalle: Fortinet, Sophos, Palo Alto. Audyty bezpieczeństwa, polityki IT.',
  },
  {
    icon: KeyRound,
    title: 'Zdalny dostęp i VPN',
    description: 'Bezpieczne połączenia dla pracowników zdalnych i oddziałów firmy.',
    details: 'WireGuard, IPsec, SSLVPN, dostęp site-to-site i mobilny.',
  },
  {
    icon: Briefcase,
    title: 'Konsulting i wsparcie',
    description: 'Profesjonalne doradztwo i wsparcie techniczne na każdym etapie.',
    details: 'Doradztwo IT, pomoc w przetargach, outsourcing techniczny, szkolenia.',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto">
        <AnimatedSection animationType="fadeInUp" className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Kompleksowe <span className="gradient-text from-primary to-secondary bg-gradient-to-r">usługi sieciowe</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dostarczamy rozwiązania sieciowe dopasowane do Twoich potrzeb, od projektu po wdrożenie i utrzymanie.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} animationType="fadeInUp" delay={index * 150}>
              <Card className="h-full bg-card hover:border-primary transition-all duration-300 ease-in-out group transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                <CardHeader className="items-center text-center">
                  <div className="p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground mb-3 text-sm">{service.description}</CardDescription>
                  <p className="text-xs text-foreground/70">{service.details}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
