import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = {
    services: [
      { name: 'Websites', href: '/services/websites' },
      { name: 'Mobile Apps', href: '/services/mobile-apps' },
      { name: 'AI Solutions', href: '/services/ai-solutions' },
      { name: 'Automation', href: '/services/automation' }
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' }
    ],
    social: [
      { name: 'Twitter', href: 'https://twitter.com/manisense', icon: '/icons/twitter.svg' },
      { name: 'LinkedIn', href: 'https://linkedin.com/company/manisense', icon: '/icons/linkedin.svg' },
      { name: 'GitHub', href: 'https://github.com/manisense', icon: '/icons/github.svg' }
    ]
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Image src="/vercel.svg" alt="ManiSense" width={120} height={40} className="dark:invert" />
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
                contact@manisense.com
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
                    <Image src={item.icon} alt={item.name} width={20} height={20} className="dark:invert" />
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-gray-400 text-sm text-center">
            © {currentYear} ManiSense. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
