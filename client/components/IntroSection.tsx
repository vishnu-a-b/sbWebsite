'use client';

import { motion } from 'framer-motion';

export default function IntroSection() {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center bg-white relative overflow-hidden">
      <div className="container px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4"
        >
          <motion.h1 
            className="text-5xl md:text-8xl lg:text-9xl font-bold text-primary tracking-tighter"
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            RADICAL COMPASSION.
          </motion.h1>
          <motion.h2 
            className="text-4xl md:text-7xl lg:text-8xl font-bold text-secondary tracking-tighter"
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            ZERO BILLS.
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-20"
        >
          <p className="text-gray-500 font-medium tracking-[0.2em] uppercase text-sm">
            Scroll to discover Shanthibhavan
          </p>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-px h-12 bg-primary/30 mx-auto mt-4" 
          />
        </motion.div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
    </section>
  );
}
