'use client';

import { motion } from 'framer-motion';
import { TechIcon } from './TechIcon';
import type { TechIconName } from '../tech-icons';

interface TechStackProps {
  stack: Array<{
    name: string;
    icon: string;
    color: string;
  }>;
}

export function TechStack({ stack }: TechStackProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stack.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div 
            className="flex-shrink-0 p-2 rounded-lg"
            style={{ backgroundColor: `${tech.color}15` }}
          >
            <TechIcon 
              name={tech.icon as TechIconName}
              size={24}
              color={tech.color}
            />
          </div>
          <span className="font-medium">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  );
}
