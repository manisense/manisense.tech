import Link from 'next/link';
import Image from 'next/image';
import { ClientIcon } from '@/components/ui/client-icon';
import type { IconName } from '@/components/icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = {
    services: [
      { name: 'Websites', href: '/services/websites' },
      { name: 'Mobile Apps', href: '/services/mobile-apps' },
      { name: 'AI Automation', href: '/services/ai-automation' },
      { name: 'Automation', href: '/services/automation' }
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' }
    ],
    social: [
      { name: 'Twitter', href: 'https://x.com/manisense_tech', icon: 'twitter' as IconName },
      { name: 'Gmail', href: 'mailto:manisense7@gmail.com', icon: 'gmail' as IconName },
      { name: 'GitHub', href: 'https://github.com/manisense', icon: 'github' as IconName }
    ]
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Image src="/logo/manisense-icon.svg" alt="ManiSense" width={60} height={40} className="dark:invert" /><span className="hidden md:inline-block text-xl font-bold mt-2 ">ManiSense
            </span>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Transforming ideas into digital reality with innovation and excellence.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {sections.services.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {sections.company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Get In Touch
            </h3>
            <ul className="space-y-3">
              <li className="text-gray-600 dark:text-gray-400">
                manisense7@gmail.com
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                +1 (555) 123-4567
              </li>
              <li className="flex space-x-4 mt-4">
                {sections.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <ClientIcon name={item.icon} className="w-5 h-5" />
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-gray-500 dark:text-gray-400 text-sm text-center">
            © {currentYear} ManiSense. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
