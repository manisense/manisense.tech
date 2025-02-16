'use client';

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const cultureAspects = [
  {
    id: "values",
    title: "Our Values",
    content: [
      {
        title: "Innovation First",
        description: "We encourage creative thinking and novel approaches to problem-solving."
      },
      {
        title: "Collaboration",
        description: "Working together across teams and time zones to achieve excellence."
      },
      {
        title: "Growth Mindset",
        description: "Continuous learning and development is part of our DNA."
      }
    ]
  },
  {
    id: "life",
    title: "Life at ManiSense",
    content: [
      {
        title: "Remote Community",
        description: "Stay connected with virtual events and regular team meetups."
      },
      {
        title: "Work-Life Balance",
        description: "Flexible schedules that respect your personal time."
      },
      {
        title: "Global Impact",
        description: "Work on projects that make a difference worldwide."
      }
    ]
  }
];

export default function CultureSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our Culture</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Experience a workplace that values creativity, growth, and well-being
          </p>
        </motion.div>

        <Tabs defaultValue="values" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            {cultureAspects.map((aspect) => (
              <TabsTrigger key={aspect.id} value={aspect.id}>
                {aspect.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {cultureAspects.map((aspect) => (
            <TabsContent key={aspect.id} value={aspect.id}>
              <div className="grid md:grid-cols-3 gap-6">
                {aspect.content.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
