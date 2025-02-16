'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from '@/components/ui/image';
import Link from "next/link";
import { Post } from "@/lib/blog";

export default function FeaturedPost({ post }: { post: Post }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <Card className="overflow-hidden">
        <div className="relative h-[400px] w-full">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <CardHeader className="relative z-10 mt-[-100px]">
          <div className="space-y-2">
            <CardTitle className="text-3xl text-white">{post.title}</CardTitle>
            <CardDescription className="text-gray-200">
              {post.excerpt}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative h-10 w-10 rounded-full overflow-hidden">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-medium">{post.author.name}</p>
                <p className="text-sm text-gray-500">{post.author.role}</p>
              </div>
            </div>
            <Link
              href={`/blog/${post.id}`}
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Read More →
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
