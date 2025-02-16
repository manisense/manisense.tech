'use client';

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@/lib/blog";

export default function BlogGrid({ posts }: { posts: Post[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="h-full flex flex-col">
            <div className="relative h-48 w-full">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle className="line-clamp-2">{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 line-clamp-3">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="mt-auto">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-2">
                  <div className="relative h-8 w-8 rounded-full overflow-hidden">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm text-gray-500">{post.author.name}</span>
                </div>
                <Link
                  href={`/blog/${post.id}`}
                  className="text-sm text-primary hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
