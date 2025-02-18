import Image from "next/image";
import Link from "next/link";
import { ClientIcon } from '@/components/ui/client-icon';
import { IconName } from "@/components/icons";

export default function Home() {
  const services = [
    {
      title: "Web Development",
      description: "Crafting exceptional digital experiences with cutting-edge web solutions.",
      icon: "websites",
      href: "/services/websites",
      features: ["Custom Web Apps", "E-commerce", "Progressive Web Apps"]
    },
    {
      title: "Mobile Solutions",
      description: "Building innovative mobile experiences that transform user engagement.",
      icon: "mobile",
      href: "/services/mobile-apps",
      features: ["iOS & Android", "Cross-platform", "App Strategy"]
    },
    {
      title: "AI & ML Solutions",
      description: "Leveraging artificial intelligence to drive business transformation.",
      icon: "ai",
      href: "/services/ai-automation",
      features: ["Machine Learning", "NLP", "Computer Vision"]
    },
    {
      title: "Products",
      description: "Optimizing operations with intelligent automation solutions.",
      icon: "automation",
      href: "/services/products",
      features: ["Workflow Automation", "Process Optimization", "Integration"]
    }
  ];

  const stats = [
    { number: "150+", label: "Projects Delivered" },
    { number: "50+", label: "Happy Clients" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      content: "ManiSense transformed our digital presence with their innovative solutions.",
      image: "/testimonials/1.jpg"
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateLabs",
      content: "Their expertise in AI Automation solutions helped us achieve unprecedented growth.",
      image: "/testimonials/2.jpg"
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-black">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient">
            Transform Your Digital Vision
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            We craft innovative digital solutions that empower businesses to thrive in the modern world. Experience excellence in web, mobile, and AI development.
          </p>
          <div className="flex gap-6 justify-center flex-col sm:flex-row">
            <Link
              href="#services"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-white rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/80 dark:bg-black/80 backdrop-blur-md py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-24 px-4 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Discover our comprehensive range of digital solutions designed to elevate your business to new heights.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-800"
              >
                <div className="w-16 h-16 mb-6 relative mx-auto transform group-hover:scale-110 transition-transform duration-300">
                  <ClientIcon
                    name={service.icon as IconName}
                    className="w-16 h-16 text-blue-600 dark:text-blue-400"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <svg className="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-24 px-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Hear from businesses helped transform through innovative digital solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-8 bg-white dark:bg-black rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100 dark:border-gray-800">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 relative rounded-full overflow-hidden mr-4 border-2 border-blue-600">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{testimonial.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Templates Section */}
      <section className="w-full py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Explore Our Free Sample Templates
          </h2>
          <p className="text-lg mb-8 text-blue-100">
            Get started with our professionally designed templates for each service category
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <Link
                key={service.title}
                href={`${service.href}#sample`}
                className="p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm"
              >
                <div className="w-12 h-12 mx-auto mb-4">
                  <ClientIcon
                    name={service.icon as IconName}
                    className="w-12 h-12 text-white"
                  />
                </div>
                <h3 className="font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-blue-100">View Sample →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
