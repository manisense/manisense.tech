import React from 'react';
import Link from "next/link";
import { notFound } from "next/navigation";
import dynamic from 'next/dynamic';
import ServiceHero from "@/components/services/ServiceHero";

// Dynamic imports with loading fallbacks
// const ServiceTemplate = dynamic(() => import("@/components/services/ServiceTemplate"), {
//   loading: () => <div className="animate-pulse bg-gray-200 h-96 rounded-xl" />
// });

const ServiceDetails = dynamic(() => import("@/components/services/ServiceDetails"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-96 rounded-xl" />
});

const ServiceTestimonials = dynamic(() => import("@/components/services/ServiceTestimonials"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-96 rounded-xl" />
});

const ServiceFAQ = dynamic(() => import("@/components/services/ServiceFAQ"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-96 rounded-xl" />
});

import { getServiceData } from "@/lib/services";

export async function generateStaticParams() {
  return [
    { service: "websites" },
    { service: "mobile-apps" },
    { service: "ai-solutions" },
    { service: "automation" },
  ];
}

export default async function ServicePage({ params }: { params: { service: string } }) {
  const serviceData = getServiceData(params.service);
  
  if (!serviceData) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col">
      <ServiceHero 
        title={serviceData.title}
        description={serviceData.description}
        image={serviceData.heroImage}
      />
{/*       
      <ServiceTemplate 
       // title={serviceData.title}
        description={serviceData.description}
        image={serviceData.heroImage}
        
      /> */}
      
      <ServiceDetails
        features={serviceData.features}
        techStack={serviceData.techStack}
        process={serviceData.process}
        examples={serviceData.examples}
      />
      
      <ServiceTestimonials testimonials={serviceData.testimonials} />
      
      <ServiceFAQ faqs={serviceData.faqs} />
      
      <section className="w-full py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Get Started?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {serviceData.ctaText}
          </Link>
        </div>
      </section>
    </main>
  );
}
