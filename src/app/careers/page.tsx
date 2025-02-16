import { Metadata } from 'next';
import JobListings from '@/components/careers/JobListings';
import CareersHero from '@/components/careers/CareersHero';
import Benefits from '@/components/careers/Benefits';
import CultureSection from '@/components/careers/CultureSection';

export const metadata: Metadata = {
  title: 'Careers | ManiSense',
  description: 'Join our team and help shape the future of digital innovation',
};

export default function CareersPage() {
  return (
    <main className="flex-grow">
      <CareersHero />
      <JobListings />
      <Benefits />
      <CultureSection />
    </main>
  );
}
