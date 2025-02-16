'use client';

import { motion } from 'framer-motion';

const milestones = [
  {
    year: '2020',
    title: 'Company Founded',
    description: 'ManiSense was established with a vision to transform digital experiences.'
  },
  {
    year: '2021',
    title: 'First Major Project',
    description: 'Successfully delivered an enterprise-scale AI solution.'
  },
  {
    year: '2022',
    title: 'Global Expansion',
    description: 'Opened new offices in Europe and Asia.'
  },
  {
    year: '2023',
    title: 'Innovation Award',
    description: 'Recognized for breakthrough achievements in AI and automation.'
  },
  {
    year: '2024',
    title: 'Future Focus',
    description: 'Launching new initiatives in quantum computing and blockchain.'
  }
];

export default function Timeline() {
  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Key milestones in our path to innovation
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-800" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className="w-1/2 pr-8 text-right">
                  {index % 2 === 0 && (
                    <>
                      <h3 className="text-2xl font-bold mb-2">{milestone.year}</h3>
                      <h4 className="text-xl text-blue-600 dark:text-blue-400 mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {milestone.description}
                      </p>
                    </>
                  )}
                </div>
                <div className="relative flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-blue-600" />
                </div>
                <div className="w-1/2 pl-8">
                  {index % 2 !== 0 && (
                    <>
                      <h3 className="text-2xl font-bold mb-2">{milestone.year}</h3>
                      <h4 className="text-xl text-blue-600 dark:text-blue-400 mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {milestone.description}
                      </p>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
