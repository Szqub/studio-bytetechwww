
"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Oferta', href: '/#services' }, // Updated to link to homepage section
  { label: 'O nas', href: '/#about' },   // Updated to link to homepage section
  { label: 'Kontakt', href: '/kontakt' }, // Updated to link to new /kontakt page
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

  const handleLinkClick = (href: string) => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    // For mailto links, let the default browser action occur
    if (href.startsWith('mailto:')) {
        return;
    }
    // For internal links or hash links on the same page, handle normally
    // Router push will handle navigation
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent',
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-20">
        {/* Left Spacer for centering nav */}
        <div className="hidden md:flex flex-1">
          {/* Intentionally blank or for future use */}
        </div>

        {/* Centered Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors text-base font-medium"
              onClick={() => handleLinkClick(item.href)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Aligned Items: "Skontaktuj się" Button (Desktop) + Mobile Menu Toggle */}
        <div className="flex flex-1 items-center justify-end">
          <Button asChild variant="outline" size="sm" className="hidden md:inline-flex border-primary text-primary hover:bg-primary hover:text-primary-foreground">
             <Link href="mailto:biuro@bytetech.com.pl" onClick={() => handleLinkClick('mailto:biuro@bytetech.com.pl')}>Skontaktuj się</Link>
          </Button>
          <div className="md:hidden"> {/* Mobile menu button container */}
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Otwórz menu">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
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
                onClick={() => handleLinkClick(item.href)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="default" size="lg" className="w-4/5" >
               <Link href="mailto:biuro@bytetech.com.pl" onClick={() => handleLinkClick('mailto:biuro@bytetech.com.pl')}>Skontaktuj się</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
