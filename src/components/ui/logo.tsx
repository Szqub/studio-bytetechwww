
import Image from 'next/image';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
  width?: number;
  height?: number;
};

// Original SVG was 150x40. This aspect ratio is maintained by default.
const DEFAULT_LOGO_WIDTH = 150;
const DEFAULT_LOGO_HEIGHT = 40;

export function Logo({ className, width = DEFAULT_LOGO_WIDTH, height = DEFAULT_LOGO_HEIGHT }: LogoProps) {
  return (
    <Image
      src="/logo.png" // Assumes Logo.png is placed in the public directory
      alt="ByteTech Logo"
      width={width}
      height={height}
      className={cn(className)} // Allows passing Tailwind classes for opacity, margins etc.
      priority // Optimizes LCP for logos in headers
    />
  );
}
