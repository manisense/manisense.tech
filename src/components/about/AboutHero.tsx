'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '../AnimatedSection';

export default function AboutHero() {
  return (
    <AnimatedSection className="relative py-20 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-8"
          >
            Transforming Digital Ideas into Reality
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            Founded in 2020, ManiSense has been at the forefront of digital innovation, 
            helping businesses across the globe achieve their technological aspirations. 
            Our team of passionate experts brings together creativity, technical excellence, 
            and strategic thinking to deliver exceptional results.
          </motion.p>
        </div>
      </div>
    </AnimatedSection>
  );
}
