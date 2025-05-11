
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const geistSans = GeistSans;
const geistMono = GeistMono;

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
