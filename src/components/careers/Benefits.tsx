'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    title: "Remote-First Culture",
    description: "Work from anywhere in the world with our distributed team setup.",
    icon: "/icons/remote.svg"
  },
  {
    title: "Health & Wellness",
    description: "Comprehensive health coverage and wellness programs for you and your family.",
    icon: "/icons/health.svg"
  },
  {
    title: "Learning Budget",
    description: "Annual budget for courses, conferences, and professional development.",
    icon: "/icons/education.svg"
  },
  {
    title: "Equity Package",
    description: "Be a part-owner of the company with our competitive equity program.",
    icon: "/icons/equity.svg"
  },
  {
    title: "Flexible Hours",
    description: "Work when you're most productive with flexible scheduling.",
    icon: "/icons/clock.svg"
  },
  {
    title: "Team Retreats",
    description: "Regular in-person meetups and team building events globally.",
    icon: "/icons/retreat.svg"
  }
];

export default function Benefits() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Join Us?</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We offer competitive benefits and a culture that puts people first
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                      <Image
                        src={benefit.icon}
                        alt={benefit.title}
                        width={24}
                        height={24}
                        className="dark:invert"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {benefit.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
