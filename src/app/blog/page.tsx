import { Metadata } from 'next';
import { getPosts } from '@/lib/blog';
import BlogGrid from '@/components/blog/BlogGrid';
import FeaturedPost from '@/components/blog/FeaturedPost';
import Categories from '@/components/blog/Categories';

export const metadata: Metadata = {
  title: 'Blog | ManiSense',
  description: 'Insights and updates from our team of experts',
};

export default async function BlogPage() {
  const posts = await getPosts();
  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  return (
    <main className="flex-grow py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Categories />
        <FeaturedPost post={featuredPost} />
        <BlogGrid posts={regularPosts} />
      </div>
    </main>
  );
}
