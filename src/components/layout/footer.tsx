
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/animated-section';

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground py-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <AnimatedSection animationType="fadeInUp" delay={200}>
          <p className="text-sm text-muted-foreground mb-4">
            ByteTech &copy; {new Date().getFullYear()} Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn ByteTech" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={20} />
            </Link>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub ByteTech" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={20} />
            </Link>
            <Link href="mailto:kontakt@bytetech.com.pl" aria-label="Email ByteTech" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={20} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
}
