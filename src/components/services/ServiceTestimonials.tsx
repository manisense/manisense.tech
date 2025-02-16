'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface TestimonialProps {
  testimonials: Array<{
    name: string;
    role: string;
    content: string;
    image: string;
  }>;
}

export default function ServiceTestimonials({ testimonials }: TestimonialProps) {
  return (
    <section className="w-full py-24 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Client Testimonials
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
