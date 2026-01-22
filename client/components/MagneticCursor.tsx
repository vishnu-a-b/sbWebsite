'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function MagneticCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    const onMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.tagName === 'A' ||
                          target.tagName === 'BUTTON' ||
                          target.closest('a') ||
                          target.closest('button') ||
                          target.style.cursor === 'pointer';

      setIsPointer(!!isClickable);

      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 border-2 border-primary rounded-full pointer-events-none z-[9999] hidden lg:block"
        style={{
          x: -20,
          y: -20,
        }}
        animate={{
          scale: isPointer ? 1.5 : 1,
          opacity: isPointer ? 0.5 : 0.3,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      />
      <motion.div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-primary rounded-full pointer-events-none z-[9999] hidden lg:block"
        style={{
          x: -3,
          y: -3,
        }}
        animate={{
          scale: isPointer ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      />
    </>
  );
}
