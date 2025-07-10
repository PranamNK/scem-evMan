"use client";
import { cn } from '@/lib/utils';
import { motion, Transition, useAnimation } from 'framer-motion';
import * as React from 'react';

type BorderTrailProps = {
  className?: string;
  size?: number;
  transition?: Transition;
  delay?: number;
  onAnimationComplete?: () => void;
  style?: React.CSSProperties;
};

export function BorderTrail({
  className,
  size = 60,
  transition,
  delay,
  onAnimationComplete,
  style,
}: BorderTrailProps) {
  const BASE_TRANSITION = {
    repeat: Infinity,
    duration: 5,
    ease: 'linear',
  };
  const controls = useAnimation();
  const [hovered, setHovered] = React.useState(false);

  React.useEffect(() => {
    if (hovered) {
      controls.start({ filter: 'brightness(1.5) opacity(1)' });
    } else {
      controls.start({ filter: 'brightness(1) opacity(0.7)' });
    }
  }, [hovered, controls]);

  return (
    <div
      className='pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className={cn('absolute aspect-square bg-zinc-500', className)}
        style={{
          width: size,
          offsetPath: `rect(0 auto auto 0 round ${size}px)`,
          ...style,
        }}
        animate={{
          offsetDistance: ['0%', '100%'],
          filter: hovered ? 'brightness(1.5) opacity(1)' : 'brightness(1) opacity(0.7)',
        }}
        transition={{
          ...(transition ?? BASE_TRANSITION),
          delay: delay,
        }}
        onAnimationComplete={onAnimationComplete}
      />
    </div>
  );
} 