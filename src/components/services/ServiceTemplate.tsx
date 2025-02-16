'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface TemplateProps {
  template: {
    preview: string;
    screenshots: Array<{ src: string; alt: string; description: string; }>;
  };
}

export default function ServiceTemplate({ template }: TemplateProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="w-full py-24 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Project Showcase
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our portfolio of successful projects and see how we&apos;ve helped businesses achieve their digital goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Interactive Preview */}
          <motion.div 
            layoutId="preview"
            className="relative aspect-video rounded-xl overflow-hidden shadow-2xl"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src={template.screenshots[activeIndex].src}
                  alt={template.screenshots[activeIndex].alt}
                  fill
                  className="object-cover"
                />
                
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/60 flex items-center justify-center p-6"
                  >
                    <p className="text-white text-center">
                      {template.screenshots[activeIndex].description}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Interactive Controls */}
          <div className="space-y-8">
            <div className="grid grid-cols-3 gap-4">
              {template.screenshots.map((screenshot, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative aspect-video rounded-lg overflow-hidden border-2 
                    ${activeIndex === index ? 'border-blue-500' : 'border-transparent'}`}
                >
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    fill
                    className="object-cover"
                  />
                  <motion.div
                    initial={false}
                    animate={{ 
                      backgroundColor: activeIndex === index ? 'rgba(59, 130, 246, 0.1)' : 'rgba(0, 0, 0, 0)'
                    }}
                    className="absolute inset-0"
                  />
                </motion.button>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="prose dark:prose-invert max-w-none"
            >
              <h3 className="text-xl font-semibold mb-4">
                {template.screenshots[activeIndex].alt}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {template.screenshots[activeIndex].description}
              </p>
              <motion.ul 
                className="mt-4 space-y-2"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
                initial="hidden"
                animate="show"
              >
                {['Optimized for performance', 'Built with modern technologies', 'Scalable architecture', 'Comprehensive documentation'].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      show: { opacity: 1, x: 0 }
                    }}
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
