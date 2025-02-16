'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/icon';
import Logo from '@/components/Logo';
import type { IconName } from '@/components/icons';

import Image from 'next/image';
import starUrl from './../../public/logo/manisense-icon.svg';


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Websites', href: '/services/websites', icon: 'websites' as IconName },
    { name: 'Mobile Apps', href: '/services/mobile-apps', icon: 'mobile' as IconName },
    { name: 'AI Solutions', href: '/services/ai-solutions', icon: 'ai' as IconName },
    { name: 'Automation', href: '/services/automation', icon: 'automation' as IconName },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm dark:bg-black/90' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex gap-2">
            <Image
              src="/logo/manisense-icon.svg"
              alt="ManiSense"
              width={32}
              height={32}
              className="dark:invert"
              priority
            />
            <span className="hidden md:inline-block text-xl font-bold mt-2 ">Manisense
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              >
                <Icon name={item.icon} className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Get in Touch Button */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center space-x-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            <Icon name="email" className="w-4 h-4" />
            <span>Get in Touch</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Icon 
              name={isMobileMenuOpen ? "close" : "menu"} 
              className="w-6 h-6" 
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Icon name={item.icon} className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
              <Link
                href="/contact"
                className="flex items-center space-x-2 w-full text-center px-4 py-2 mt-4 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Icon name="email" className="w-4 h-4" />
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}