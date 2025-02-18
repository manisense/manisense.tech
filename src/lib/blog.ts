export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  category: string;
  image: string;
  date: string;
  readTime: string;
}

export const samplePosts: Post[] = [
  {
    id: '1',
    title: 'Explore our Innovative Tech Tools & Products',
    excerpt: 'Exploring how artificial intelligence is revolutionizing business processes...',
    content: `
      # Use our inhouse built tools & products to streamline your business operations.

      Artificial intelligence is fundamentally changing how businesses operate...
      
      ## Key Trends

      1. Machine Learning Operations (MLOps)
      2. Natural Language Processing
      3. Computer Vision Applications
      
      ## Real-World Applications
      
      Many organizations are already implementing AI Automation solutions...
    `,
    author: {
      name: 'Dr. Sarah Chen',
      avatar: '/team/sarah.jpg',
      role: 'AI Research Lead'
    },
    category: 'Artificial Intelligence',
    image: '/blog/ai-future.jpg',
    date: '2024-02-15',
    readTime: '5 min'
  },
  // Add more sample posts...
];

export async function getPosts(): Promise<Post[]> {
  // In a real application, this would fetch from an API or database
  return samplePosts;
}

export async function getPostById(id: string): Promise<Post | undefined> {
  return samplePosts.find(post => post.id === id);
}
