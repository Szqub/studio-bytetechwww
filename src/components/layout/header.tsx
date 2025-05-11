
"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Logo } from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Oferta', href: '#services' },
  { label: 'O nas', href: '#about' },
  { label: 'Kontakt', href: '#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleLinkClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent',
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-20">
        <Link href="/" aria-label="ByteTech Strona Główna">
          <Logo className="text-foreground hover:opacity-80 transition-opacity" />
        </Link>

        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              onClick={handleLinkClick}
            >
              {item.label}
            </Link>
          ))}
           <Button asChild variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
             <Link href="#contact" onClick={handleLinkClick}>Skontaktuj się</Link>
           </Button>
        </nav>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Otwórz menu">
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background shadow-xl py-4">
          <nav className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors text-lg"
                onClick={handleLinkClick}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="default" size="lg" className="w-4/5" >
               <Link href="#contact" onClick={handleLinkClick}>Skontaktuj się</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
