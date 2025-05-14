
import Image from 'next/image';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
  width?: number;
  height?: number;
};

// New logo dimensions: 1182x244 pixels. Aspect ratio: 4.844
// Default size for general use (e.g., if used in header/footer elsewhere, keeping height around 40px)
const DEFAULT_LOGO_HEIGHT = 40;
const DEFAULT_LOGO_WIDTH = Math.round(DEFAULT_LOGO_HEIGHT * (1182 / 244)); // approx 194

export function Logo({ className, width = DEFAULT_LOGO_WIDTH, height = DEFAULT_LOGO_HEIGHT }: LogoProps) {
  return (
    <Image
      src="/assets/logo.png" // WAŻNE: Użytkownik musi umieścić swój plik logo (np. 9a7f79e4-ad1f-4edb-bc8a-dcbe15130ea9.png) jako logo.png w katalogu public/assets/.
      alt="ByteTech Logo"
      width={width}
      height={height}
      className={cn(className)}
      priority
      data-ai-hint="tech logo"
    />
  );
}
