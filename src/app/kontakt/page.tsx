
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Mail, MapPin, Building, FileText } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const companyDetails = [
    {
      icon: Building,
      label: "Nazwa firmy",
      value: "ByteTech Szymon Żołnierczyk",
    },
    {
      icon: MapPin,
      label: "Adres do doręczeń",
      value: "ul. Górska 15, 34-324 Twardorzeczka",
    },
    {
      icon: FileText,
      label: "NIP",
      value: "5532594451",
    },
    {
      icon: FileText,
      label: "REGON",
      value: "529863668",
    },
    {
      icon: Mail,
      label: "Email",
      value: "biuro@bytetech.com.pl",
      href: "mailto:biuro@bytetech.com.pl",
    },
  ];

  return (
    <section className="section-padding min-h-[calc(100vh-var(--header-height)-var(--footer-height))]"> {/* Ensure it takes at least viewport height minus header/footer */}
      <div className="container mx-auto">
        <AnimatedSection animationType="fadeInUp" className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Skontaktuj się z <span className="gradient-text from-primary to-secondary bg-gradient-to-r">nami</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Masz pytania lub chcesz omówić projekt? Jesteśmy do Twojej dyspozycji.
          </p>
        </AnimatedSection>

        <AnimatedSection animationType="fadeInUp" delay={200}>
          <Card className="max-w-2xl mx-auto shadow-2xl border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Dane Firmy ByteTech</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {companyDetails.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <item.icon className="h-6 w-6 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">{item.label}</p>
                    {item.href ? (
                      <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                        {item.value}
                      </Link>
                    ) : (
                      <p className="text-muted-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
}
