export const services = {
  "websites": {
    title: "Stunning Website Designs",
    description: "Custom websites built to drive results. See our design excellence in action.",
    heroImage: "/images/services/websites-hero.jpg",
    template: {
      preview: "/templates/website-preview.mp4",
      screenshots: [
        { src: "/images/services/placeholder.jpg", alt: "Website Design", description: "Modern and responsive website design" },
        { src: "/images/services/placeholder.jpg", alt: "E-commerce Solution", description: "Fully featured e-commerce platform" },
        { src: "/images/services/placeholder.jpg", alt: "Mobile Optimization", description: "Mobile-first responsive design" }
      ]
    },
    templateDownloadUrl: "/downloads/website-template.zip",
    features: [
      { title: "Responsive Design", description: "Optimized for all screen sizes" },
      { title: "SEO Ready", description: "Built with search engines in mind" },
      { title: "Fast Loading", description: "Optimized for performance" },
      { title: "Modern Stack", description: "Built with latest technologies" }
    ],
    techStack: [
      { name: "React", icon: "react", color: '#61DAFB' },
      { name: "Next.js", icon: "nextjs", color: '#000000' },
      { name: "TypeScript", icon: "typescript", color: '#3178C6' },
      { name: "TailwindCSS", icon: "tailwindcss", color: '#06B6D4' },
      { name: "Node.js", icon: "nodejs", color: '#339933' },
      { name: "GraphQL", icon: "graphql", color: '#E10098' },
      { name: "AWS", icon: "aws", color: '#FF9900' },
      { name: "Docker", icon: "docker", color: '#2496ED' }
    ],
    process: [
      { step: 1, title: "Discovery", description: "Understanding your needs" },
      { step: 2, title: "Design", description: "Creating the perfect look" },
      { step: 3, title: "Development", description: "Building with precision" },
      { step: 4, title: "Launch", description: "Going live with confidence" }
    ],
    examples: [
      {
        title: "E-commerce Platform",
        image: "/images/services/placeholder.jpg",
        description: "Modern shopping experience"
      }
    ],
    testimonials: [
      {
        name: "John Smith",
        role: "CEO, TechStart",
        content: "Incredible attention to detail",
        image: "/testimonials/john.jpg"
      },
      // ...more testimonials
    ],
    faqs: [
      {
        question: "How long does a custom website take to build?",
        answer: "Typically 4-8 weeks depending on complexity"
      },
      // ...more FAQs
    ],
    ctaText: "Start Your Website Project"
  },

  "mobile-apps": {
    title: "Mobile App Innovations",
    description: "Experience intuitive, user-centric mobile apps designed for performance and scalability.",
    heroImage: "/images/services/mobile-hero.jpg",
    template: {
      preview: "/templates/mobile-preview.mp4",
      screenshots: [
        { src: "/images/services/mobile/login.jpg", alt: "Login Screen", description: "Secure and user-friendly authentication" },
        { src: "/images/services/mobile/dashboard.jpg", alt: "Dashboard View", description: "Intuitive dashboard interface" },
        { src: "/images/services/mobile/settings.jpg", alt: "Settings Interface", description: "Customizable user settings" }
      ]
    },
    templateDownloadUrl: "/downloads/mobile-template.zip",
    features: [
      { title: "Native Performance", description: "Optimized for iOS and Android platforms" },
      { title: "Intuitive UX", description: "User-centric design patterns" },
      { title: "Offline Support", description: "Work seamlessly without internet" },
      { title: "Push Notifications", description: "Engage users effectively" }
    ],
    techStack: [
      { name: "React Native", icon: "react", color: '#61DAFB' },
      { name: "Flutter", icon: "flutter", color: '#02569B' },
      { name: "TypeScript", icon: "typescript", color: '#3178C6' },
      { name: "Redux", icon: "redux", color: '#764ABC' },
      { name: "Jest", icon: "jest", color: '#C21325' },
      { name: "Swift", icon: "swift", color: '#F05138' },
      { name: "Kotlin", icon: "kotlin", color: '#7F52FF' },
      { name: "Firebase", icon: "firebase", color: '#FFCA28' }
    ],
    process: [
      { step: 1, title: "Research", description: "Understanding user needs" },
      { step: 2, title: "Prototype", description: "Interactive wireframes" },
      { step: 3, title: "Development", description: "Native implementation" },
      { step: 4, title: "Testing", description: "Quality assurance" },
      { step: 5, title: "Launch", description: "App store deployment" }
    ],
    examples: [
      {
        title: "E-commerce App",
        image: "/images/services/mobile/ecommerce.jpg",
        description: "Seamless shopping experience"
      }
    ],
    testimonials: [
      {
        name: "Lisa Chen",
        role: "Product Manager, ShopQuick",
        content: "The mobile app exceeded our expectations in both performance and user engagement.",
        image: "/testimonials/lisa.jpg"
      }
    ],
    faqs: [
      {
        question: "Do you develop for both iOS and Android?",
        answer: "Yes, we provide native development for both platforms, as well as cross-platform solutions."
      },
      {
        question: "How long does app development take?",
        answer: "Typically 3-6 months depending on complexity and features required."
      }
    ],
    ctaText: "Launch Your App"
  },

  "ai-automation": {
    title: "Intelligent AI Automation Solutions",
    description: "Harness the power of artificial intelligence to transform your business operations.",
    heroImage: "/images/services/ai-hero.jpg",
    template: {
      preview: "/templates/ai-preview.mp4",
      screenshots: [
        { src: "/images/services/ai/dashboard.jpg", alt: "AI Dashboard", description: "Real-time AI analytics dashboard" },
        { src: "/images/services/ai/analytics.jpg", alt: "Predictive Analytics", description: "Advanced predictive modeling" },
        { src: "/images/services/ai/insights.jpg", alt: "AI Insights", description: "AI-powered business insights" }
      ]
    },
    templateDownloadUrl: "/downloads/ai-template.zip",
    features: [
      { title: "Predictive Analytics", description: "Forecast trends and behaviors" },
      { title: "Machine Learning", description: "Custom model development" },
      { title: "Natural Language", description: "Advanced NLP solutions" },
      { title: "Computer Vision", description: "Image and video analysis" }
    ],
    techStack: [
      { name: "TensorFlow", icon: "tensorflow", color: '#FF6F00' },
      { name: "PyTorch", icon: "pytorch", color: '#EE4C2C' },
      { name: "Python", icon: "python", color: '#3776AB' },
      { name: "Scikit-learn", icon: "scikitlearn", color: '#F7931E' },
      { name: "Pandas", icon: "pandas", color: '#150458' },
      { name: "NumPy", icon: "numpy", color: '#013243' },
      { name: "Kubernetes", icon: "kubernetes", color: '#326CE5' },
      { name: "MLflow", icon: "githubactions", color: '#0194E2' }
    ],
    process: [
      { step: 1, title: "Data Collection", description: "Gathering insights" },
      { step: 2, title: "Model Development", description: "AI architecture" },
      { step: 3, title: "Training", description: "Model optimization" },
      { step: 4, title: "Integration", description: "System deployment" },
      { step: 5, title: "Monitoring", description: "Performance tracking" }
    ],
    examples: [
      {
        title: "Predictive Analytics",
        image: "/images/services/ai/predictive.jpg",
        description: "Sales forecasting system"
      }
    ],
    testimonials: [
      {
        name: "David Kim",
        role: "CTO, DataTech",
        content: "The AI Automation solution dramatically improved our decision-making accuracy.",
        image: "/testimonials/david.jpg"
      }
    ],
    faqs: [
      {
        question: "How do you ensure model accuracy?",
        answer: "We use rigorous testing and validation processes, with continuous monitoring and refinement."
      },
      {
        question: "What's the typical ROI for AI integration?",
        answer: "Most clients see ROI within 6-12 months through improved efficiency and accuracy."
      }
    ],
    ctaText: "Get Started with AI"
  },

  "products": {
    title: "Explore our Innovative Products",
    description: "Explore our collection of powerful tools designed to enhance your digital workflow and productivity.",
    heroImage: "/images/services/products-hero.jpg",
    template: {
      preview: "/templates/products-preview.mp4",
      screenshots: [
        { 
          src: "/images/services/products/thumbnail-generator.jpg", 
          alt: "YouTube Thumbnail Generator",
          description: "Create eye-catching thumbnails in seconds"
        },
        { 
          src: "/images/services/products/bg-remover.jpg", 
          alt: "Background Remover",
          description: "Remove backgrounds with AI precision"
        },
        { 
          src: "/images/services/products/image-optimizer.jpg", 
          alt: "Image Optimizer",
          description: "Optimize images without quality loss"
        }
      ]
    },
    templateDownloadUrl: "/downloads/products-demo.zip",
    features: [
      { title: "AI-Powered", description: "Advanced AI algorithms for precise results" },
      { title: "User-Friendly", description: "Intuitive interfaces for easy usage" },
      { title: "Fast Processing", description: "Quick results with cloud processing" },
      { title: "Batch Processing", description: "Handle multiple files at once" }
    ],
    techStack: [
      { name: "Python", icon: "python", color: '#3776AB' },
      { name: "TensorFlow", icon: "tensorflow", color: '#FF6F00' },
      { name: "React", icon: "react", color: '#61DAFB' },
      { name: "Node.js", icon: "nodejs", color: '#339933' },
      { name: "AWS", icon: "aws", color: '#FF9900' },
      { name: "Docker", icon: "docker", color: '#2496ED' },
      { name: "Redis", icon: "redis", color: '#DC382D' },
      { name: "GraphQL", icon: "graphql", color: '#E10098' }
    ],
    process: [
      { step: 1, title: "Select Tool", description: "Choose the right tool for your task" },
      { step: 2, title: "Upload", description: "Upload your files securely" },
      { step: 3, title: "Process", description: "AI-powered processing" },
      { step: 4, title: "Download", description: "Get your optimized results" }
    ],
    examples: [
      {
        title: "YouTube Thumbnail Generator",
        image: "/images/services/products/thumbnail-example.jpg",
        description: "Create professional YouTube thumbnails with customizable templates, text overlays, and effects. Perfect for content creators and marketers."
      },
      {
        title: "Background Remover",
        image: "/images/services/products/bgremove-example.jpg",
        description: "Remove backgrounds from images instantly using AI. Ideal for e-commerce, profile pictures, and product photography."
      },
      {
        title: "Image Optimizer",
        image: "/images/services/products/optimizer-example.jpg",
        description: "Optimize images for web without losing quality. Reduce file size and improve loading times."
      },
      {
        title: "Code Snippet Generator",
        image: "/images/services/products/code-example.jpg",
        description: "Generate beautiful code snippets for documentation, blogs, and social media sharing."
      },
      {
        title: "Social Media Post Creator",
        image: "/images/services/products/social-example.jpg",
        description: "Design engaging social media posts with customizable templates and brand assets."
      }
    ],
    testimonials: [
      {
        name: "Alex Turner",
        role: "Content Creator",
        content: "The YouTube Thumbnail Generator has dramatically improved my content's click-through rate. A must-have tool!",
        image: "/testimonials/alex.jpg"
      },
      {
        name: "Emma Rodriguez",
        role: "E-commerce Manager",
        content: "The Background Remover tool saves us hours of manual editing. The results are consistently professional.",
        image: "/testimonials/emma.jpg"
      }
    ],
    faqs: [
      {
        question: "Are the tools free to use?",
        answer: "We offer both free and premium tiers. Basic features are free, while advanced features and bulk processing require a subscription."
      },
      {
        question: "How secure is my data?",
        answer: "We use enterprise-grade encryption and automatically delete uploaded files after processing. Your data's security is our priority."
      },
      {
        question: "Can I integrate these tools with my application?",
        answer: "Yes, all our tools offer API access for seamless integration with your applications."
      }
    ],
    ctaText: "Try Our Tools"
  }
};

export function getServiceData(service: string) {
  return services[service as keyof typeof services];
}
