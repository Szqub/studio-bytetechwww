
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/animated-section';

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground py-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <AnimatedSection animationType="fadeInUp" delay={0}>
          <div className="mb-6 text-sm text-muted-foreground">
            <p className="font-semibold text-foreground">ByteTech Szymon Żołnierczyk</p>
            <p>ul. Górska 15, 34-324 Twardorzeczka</p>
            <p>NIP: 5532594451</p>
            <p>REGON: 529863668</p>
          </div>
        </AnimatedSection>
        <AnimatedSection animationType="fadeInUp" delay={100}>
          <p className="text-sm text-muted-foreground mb-4">
            ByteTech &copy; 2025 Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn ByteTech" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={20} />
            </Link>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub ByteTech" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={20} />
            </Link>
            <Link href="mailto:biuro@bytetech.com.pl" aria-label="Email ByteTech" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={20} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
}
