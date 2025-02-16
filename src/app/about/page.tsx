import { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import TeamSection from '@/components/about/TeamSection';
import Timeline from '@/components/about/Timeline';
import Values from '@/components/about/Values';

export const metadata: Metadata = {
  title: 'About Us | ManiSense',
  description: 'Learn about our journey, values, and the team behind ManiSense',
};

export default function AboutPage() {
  return (
    <main className="flex-grow">
      <AboutHero />
      <Values />
      <Timeline />
      <TeamSection />
    </main>
  );
}
