
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
  width?: number | string;
  height?: number | string;
};

export function Logo({ className, width = 150, height = 40 }: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 150 40"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('fill-current', className)}
    >
      <title>ByteTech Logo</title>
      <style>
        {`
          .logo-text { font-family: var(--font-geist-sans), sans-serif; font-size: 24px; font-weight: 600; }
          .logo-rect { animation: blink 2s infinite alternate; }
          @keyframes blink { 0% { opacity: 0.5; } 100% { opacity: 1; } }
        `}
      </style>
      <text x="5" y="28" className="logo-text text-secondary">Byte</text>
      <text x="68" y="28" className="logo-text text-primary">Tech</text>
      <rect x="130" y="15" width="10" height="10" className="logo-rect text-primary" rx="2" />
    </svg>
  );
}
