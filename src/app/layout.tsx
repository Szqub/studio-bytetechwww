
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
// import { GeistMono } from 'geist/font/mono'; Removed as it's not used and causes a build error
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const geistSans = GeistSans;
// const geistMono = GeistMono; // Removed as it's not used

export const metadata: Metadata = {
  title: 'ByteTech - Szybka i bezpieczna sieć',
  description: 'ByteTech - Niezależna firma inżynierska specjalizująca się w projektowaniu, konfiguracji i zabezpieczaniu nowoczesnych sieci informatycznych.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${geistSans.variable} antialiased`}> {/* Removed geistMono.variable */}
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
