'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export default function ServiceFAQ({ faqs }: FAQProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border dark:border-gray-700 rounded-lg">
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center"
              >
                <span className="font-medium">{faq.question}</span>
                <span className={`transform transition-transform duration-200 ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}>
                  ↓
                </span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-4 text-gray-600 dark:text-gray-400">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
