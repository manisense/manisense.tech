export const services = {
  "websites": {
    title: "Stunning Website Designs",
    description: "Custom websites built to drive results. See our design excellence in action.",
    heroImage: "/images/services/websites-hero.jpg",
    template: {
      preview: "/templates/website-preview.mp4",
      screenshots: [
        { src: "/images/services/placeholder.jpg", alt: "Homepage Design" },
        { src: "/images/services/placeholder.jpg", alt: "Services Page" },
        { src: "/images/services/placeholder.jpg", alt: "Contact Page" }
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
        { src: "/images/services/mobile/login.jpg", alt: "Login Screen" },
        { src: "/images/services/mobile/dashboard.jpg", alt: "Dashboard View" },
        { src: "/images/services/mobile/settings.jpg", alt: "Settings Interface" }
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

  "ai-solutions": {
    title: "Intelligent AI Solutions",
    description: "Harness the power of artificial intelligence to transform your business operations.",
    heroImage: "/images/services/ai-hero.jpg",
    template: {
      preview: "/templates/ai-preview.mp4",
      screenshots: [
        { src: "/images/services/ai/dashboard.jpg", alt: "AI Dashboard" },
        { src: "/images/services/ai/analytics.jpg", alt: "Predictive Analytics" },
        { src: "/images/services/ai/insights.jpg", alt: "AI Insights" }
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
        content: "The AI solution dramatically improved our decision-making accuracy.",
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

  "automation": {
    title: "Seamless Automation Solutions",
    description: "Streamline your operations with robust automation that saves time and reduces costs.",
    heroImage: "/images/services/automation-hero.jpg",
    template: {
      preview: "/templates/automation-preview.mp4",
      screenshots: [
        { src: "/images/services/automation/workflow.jpg", alt: "Workflow Dashboard" },
        { src: "/images/services/automation/processes.jpg", alt: "Process Map" },
        { src: "/images/services/automation/analytics.jpg", alt: "Automation Analytics" }
      ]
    },
    templateDownloadUrl: "/downloads/automation-template.zip",
    features: [
      { title: "Workflow Automation", description: "Streamline processes" },
      { title: "Integration Hub", description: "Connect all systems" },
      { title: "Real-time Monitoring", description: "Live process tracking" },
      { title: "Custom Triggers", description: "Event-based automation" }
    ],
    techStack: [
      { name: "Node.js", icon: "nodejs", color: '#339933' },
      { name: "Python", icon: "python", color: '#3776AB' },
      { name: "Ansible", icon: "ansible", color: '#EE0000' },
      { name: "Terraform", icon: "terraform", color: '#7B42BC' },
      { name: "Docker", icon: "docker", color: '#2496ED' },
      { name: "Kubernetes", icon: "kubernetes", color: '#326CE5' },
      { name: "Redis", icon: "redis", color: '#DC382D' },
      { name: "RabbitMQ", icon: "rabbitmq", color: '#FF6600' }
    ],
    process: [
      { step: 1, title: "Analysis", description: "Process mapping" },
      { step: 2, title: "Design", description: "Automation architecture" },
      { step: 3, title: "Integration", description: "System connection" },
      { step: 4, title: "Testing", description: "Quality assurance" },
      { step: 5, title: "Deployment", description: "Go-live support" }
    ],
    examples: [
      {
        title: "Manufacturing Automation",
        image: "/images/services/automation/manufacturing.jpg",
        description: "End-to-end process automation"
      }
    ],
    testimonials: [
      {
        name: "Sarah Williams",
        role: "Operations Director, AutoCorp",
        content: "Automation reduced our processing time by 75% and eliminated manual errors.",
        image: "/testimonials/sarah.jpg"
      }
    ],
    faqs: [
      {
        question: "What industries benefit most from automation?",
        answer: "Manufacturing, logistics, healthcare, and financial services see the most immediate impact."
      },
      {
        question: "How long does implementation take?",
        answer: "Basic automation can be implemented in 2-4 weeks, while complex systems may take 2-3 months."
      }
    ],
    ctaText: "Automate Your Business"
  }
};

export function getServiceData(service: string) {
  return services[service as keyof typeof services];
}
