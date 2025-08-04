'use client';

import { motion } from 'framer-motion';
import { ReactNode, useState, useEffect } from 'react';

interface FadeInAnimationProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  id?: string;
}

export function FadeInAnimation({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  className = '',
  id = '',
}: FadeInAnimationProps) {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const animationKey = `animation-${id || 'default'}`;
    const wasAnimated = sessionStorage.getItem(animationKey);

    if (wasAnimated) {
      setHasAnimated(true);
    } else {
      const timer = setTimeout(
        () => {
          setHasAnimated(true);
          sessionStorage.setItem(animationKey, 'true');
        },
        delay * 1000 + duration * 1000 + 100,
      );

      return () => clearTimeout(timer);
    }
  }, [delay, duration, id]);

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 30, opacity: 0 };
      case 'down':
        return { y: -30, opacity: 0 };
      case 'left':
        return { x: 30, opacity: 0 };
      case 'right':
        return { x: -30, opacity: 0 };
      default:
        return { y: 30, opacity: 0 };
    }
  };

  const getAnimatePosition = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { y: 0, opacity: 1 };
      case 'left':
      case 'right':
        return { x: 0, opacity: 1 };
      default:
        return { y: 0, opacity: 1 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      animate={hasAnimated ? getAnimatePosition() : getInitialPosition()}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
