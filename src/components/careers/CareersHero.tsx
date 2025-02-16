'use client';

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function CareersHero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-grid-pattern opacity-5"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Badge variant="outline" className="mb-4">
              Were Hiring!
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Join Our Team of Innovators
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8"
          >
            Help us shape the future of technology. Were looking for passionate individuals 
            who want to make a difference.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
