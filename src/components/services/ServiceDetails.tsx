'use client';

import { motion } from 'framer-motion';
import { ClientIcon } from '@/components/ui/client-icon';
import { TechStack } from '@/components/tech/TechStack';


interface ServiceDetailsProps {
  features: Array<{ title: string; description: string; }>;
  techStack: Array<{ name: string; icon: string; color: string; }>;
  process: Array<{ step: number; title: string; description: string; }>;
  examples: Array<{ title: string; image: string; description: string; }>;
}

export default function ServiceDetails({
  features,
  techStack,
  process,
}: ServiceDetailsProps) {
  return (
    <section className="w-full py-24 px-4">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Features */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0">
                <ClientIcon name="check" className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="text-2xl font-bold mb-8">
            <ClientIcon name="monitor" className="inline-block w-6 h-6 mr-2" />
            Technologies We Use
          </h3>
          <TechStack stack={techStack} />
        </div>

        {/* Process */}
        <div>
          <h3 className="text-2xl font-bold mb-8">
            <ClientIcon name="clock" className="inline-block w-6 h-6 mr-2" />
            Our Process
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-4xl font-bold text-blue-600 mb-4">
                  {step.step.toString().padStart(2, '0')}
                </div>
                <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
