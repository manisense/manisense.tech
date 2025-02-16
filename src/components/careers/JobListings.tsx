'use client';

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const jobs = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Looking for an experienced developer to lead complex projects and mentor junior developers.",
    requirements: ["7+ years experience", "React/Node.js", "Cloud platforms"],
  },
  {
    id: 2,
    title: "UI/UX Designer",
    department: "Design",
    location: "Hybrid",
    type: "Full-time",
    description: "Join our design team to create beautiful and intuitive user experiences.",
    requirements: ["5+ years experience", "Figma", "User research"],
  },
  {
    id: 3,
    title: "AI Research Engineer",
    department: "AI & ML",
    location: "Remote",
    type: "Full-time",
    description: "Help develop cutting-edge AI solutions for our enterprise clients.",
    requirements: ["PhD in ML/AI", "PyTorch/TensorFlow", "Research publications"],
  }
];

export default function JobListings() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{job.title}</CardTitle>
                      <CardDescription>{job.department}</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="secondary">{job.location}</Badge>
                      <Badge variant="outline">{job.type}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-600 dark:text-gray-400">
                    {job.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                      {job.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  <Button>Apply Now</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
