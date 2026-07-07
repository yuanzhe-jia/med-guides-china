'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Hospitals', href: '/hospitals' },
  { name: 'Guide', href: '/guide' },
  { name: 'Articles', href: '/articles' },
  { name: 'FAQ', href: '/faq' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="bg-primary-800 text-white text-sm py-2 hidden md:block">
        <div className="container-custom flex items-center justify-center">
          <span className="text-primary-300 text-center">All content on this website is for reference only. Please contact the hospital for medical consultation.</span>
        </div>
      </div>
      
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary-800 rounded-full flex items-center justify-center">
              <Heart className="text-white" size={20} />
            </div>
            <div>
              <span className="text-lg md:text-xl font-bold text-primary-800">MedGuides</span>
              <span className="text-xs text-neutral-500 block -mt-1">Chinese Healthcare</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-neutral-700 hover:text-primary-600 font-medium transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/hospitals"
              className="bg-primary-700 hover:bg-primary-800 text-white px-5 py-2.5 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md"
            >
              Find a Hospital
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-700 hover:text-primary-600"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100 animate-slide-up">
          <div className="container-custom py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 px-4 text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/hospitals"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-primary-700 hover:bg-primary-800 text-white py-3 rounded-lg font-medium transition-colors mt-4"
            >
              Find a Hospital
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
