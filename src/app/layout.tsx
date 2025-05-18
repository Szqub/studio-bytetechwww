
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const geistSans = GeistSans;

export const metadata: Metadata = {
  title: 'ByteTech - Szymon Żołnierczyk',
  description: 'ByteTech - Niezależna firma inżynierska specjalizująca się w projektowaniu, konfiguracji i zabezpieczaniu nowoczesnych sieci informatycznych.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${geistSans.variable} antialiased`}>
        <video
          autoPlay
          loop
          muted
          playsInline // Important for iOS
          className="video-background"
          src="/assets/background.mp4" // Make sure background.mp4 is in public/assets/
          typeof="video/mp4"
        />
        <div className="relative z-10"> {/* Wrapper to ensure content is above video */}
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </div>
      </body>
    </html>
  );
}
