'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const categories = [
  'All',
  'Technology',
  'AI & ML',
  'Web Development',
  'Mobile Apps',
  'Business',
  'Design'
];

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="mb-12">
      <div className="flex flex-wrap gap-4 justify-center">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
              ${activeCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'
              }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
