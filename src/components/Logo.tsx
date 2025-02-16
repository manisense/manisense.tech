'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <Link href="/" className="relative flex items-center">
      {/* Icon Only (Mobile) */}
      <div className="md:hidden flex items-baseline justify-center w-10 h-10 bg-slate-800 rounded-lg">
        <motion.span 
          className="text-xl font-bold text-slate-50"
          whileHover={{ scale: 1.05 }}
        >
          M
        </motion.span>
        {/* <ManIcon className="w-6 h-6 text-slate-50" /> */}
      </div>

      {/* Full Logo (Desktop) */}
      <div className="hidden md:flex items-center">
        <div className="flex items-center justify-center w-8 h-10 bg-slate-800 rounded-lg">
          <motion.span 
            className="text-xl font-bold text-slate-50"
            whileHover={{ scale: 1.05 }}
          >
            M
          </motion.span>
        </div>
        <motion.span 
          className="ml-2 text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent dark:from-slate-100 dark:to-slate-300"
          whileHover={{ scale: 1.05 }}
        >
          aniSense
        </motion.span>
      </div>
    </Link>
  );
}
