
"use client";

import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number; // in ms
  animationType?: 'fadeInUp' | 'fadeIn' | 'slideInLeft' | 'slideInRight';
  threshold?: number;
  once?: boolean; // Whether to animate only once
};

export function AnimatedSection({
  children,
  className,
  delay = 0,
  animationType = 'fadeInUp',
  threshold = 0.1,
  once = true,
}: AnimatedSectionProps) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            // If not 'once', allow re-animation when scrolling out and back in
            setIsIntersecting(false);
            setHasAnimated(false); // Reset animation state
          }
        });
      },
      { threshold }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  useEffect(() => {
    if (isIntersecting && !hasAnimated) {
      const timer = setTimeout(() => {
        setHasAnimated(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isIntersecting, hasAnimated, delay]);

  const getAnimationClasses = () => {
    switch (animationType) {
      case 'fadeInUp':
        return 'animate-fadeInUp';
      case 'fadeIn':
        return 'animate-fadeIn';
      case 'slideInLeft':
        return 'animate-slideInLeft';
      case 'slideInRight':
        return 'animate-slideInRight';
      default:
        return 'animate-fadeInUp';
    }
  };
  
  const getInitialTransformClasses = () => {
    // These are applied when not yet animated to set the pre-animation state
    // The 'animate-*' classes will then transition from these states
    switch (animationType) {
      case 'fadeInUp':
        return 'translate-y-5';
      case 'slideInLeft':
        return '-translate-x-8'; // A bit more for slide
      case 'slideInRight':
        return 'translate-x-8'; // A bit more for slide
      default:
        return '';
    }
  }

  return (
    <div
      ref={sectionRef}
      className={cn(
        'opacity-0', // Base state: invisible
        !hasAnimated && getInitialTransformClasses(), // Apply initial transform if not yet animated
        hasAnimated && getAnimationClasses(), // Apply animation class when triggered
        className
      )}
    >
      {children}
    </div>
  );
}
