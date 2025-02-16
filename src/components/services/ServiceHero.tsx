'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ServiceHeroProps {
  title: string;
  description: string;
  image: string;
}

export default function ServiceHero({ title, description, image }: ServiceHeroProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto text-center px-4"
      >
        <motion.h1 
          variants={titleVariants}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          {title}
        </motion.h1>
        <motion.p 
          variants={descriptionVariants}
          className="text-xl md:text-2xl text-white/90 mb-8"
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-blue-600 rounded-xl font-medium hover:bg-blue-50 transition-colors"
          >
            View Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-white text-white rounded-xl font-medium hover:bg-white/10 transition-colors"
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
