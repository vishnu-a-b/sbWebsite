'use client';

import { motion } from 'framer-motion';

interface MarqueeTextProps {
  text: string;
  repeat?: number;
  speed?: number;
  className?: string;
}

export default function MarqueeText({
  text,
  repeat = 3,
  speed = 30,
  className = '',
}: MarqueeTextProps) {
  const duplicatedText = Array(repeat).fill(text);

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="inline-block"
        animate={{
          x: [0, -100 / repeat + '%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear',
          },
        }}
      >
        {duplicatedText.map((txt, index) => (
          <span key={index} className="inline-block px-4">
            {txt}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
