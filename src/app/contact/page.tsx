import { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | ManiSense',
  description: 'Get in touch with us for your next project',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Get in Touch</h1>
        <ContactForm />
      </div>
    </main>
  );
}
