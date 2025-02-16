'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const values = [
  {
    title: "Innovation",
    description: "Pushing boundaries with cutting-edge solutions",
    icon: "/icons/values/innovation.svg"
  },
  {
    title: "Excellence",
    description: "Delivering quality in every project we undertake",
    icon: "/icons/values/excellence.svg"
  },
  {
    title: "Collaboration",
    description: "Working together to achieve remarkable results",
    icon: "/icons/values/collaboration.svg"
  },
  {
    title: "Integrity",
    description: "Building trust through transparent relationships",
    icon: "/icons/values/integrity.svg"
  }
];

export default function Values() {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
          <p className="text-gray-600 dark:text-gray-400">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <Image
                  src={value.icon}
                  alt={value.title}
                  fill
                  className="object-contain dark:invert"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
