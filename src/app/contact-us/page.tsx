import type { Metadata } from 'next';
import { Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact MedGuidesChina. We help international patients navigate China\'s medical system with confidence. Reach out to us at contact@medguideschina.com.',
  keywords: ['contact us', 'get in touch', 'MedGuidesChina contact', 'contact@medguideschina.com'],
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://medguideschina.com/contact-us',
    siteName: 'China Medical Guides',
    title: 'Contact Us | MedGuidesChina',
    description: 'Contact MedGuidesChina. We help international patients navigate China\'s medical system with confidence.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | MedGuidesChina',
    description: 'Contact MedGuidesChina. We help international patients navigate China\'s medical system with confidence.',
    creator: '@medguideschina',
  },
  alternates: {
    canonical: 'https://medguideschina.com/contact-us',
  },
};

export default function ContactUsPage() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-16 md:py-20 overflow-hidden relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-400 rounded-full -translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-primary-100 leading-relaxed">
              Last updated: August 10, 2026
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-10 text-neutral-700 leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-4">1. Who We Are</h2>
              <p>
                We are a team of healthcare professionals and medical editors with years of 
                experience in Chinese hospitals. We help international patients navigate China's 
                medical system confidently.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-4">2. Our Mission</h2>
              <p>
                We bridge the information gap by providing clear, practical, and evidence-based 
                guides on finding specialists, understanding costs, handling insurance, and 
                staying healthy in China.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-4">3. Our Editorial Process</h2>
              <p>
                All content is sourced from official guidelines and peer-reviewed research. 
                No AI-generated content is published without human verification.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-4">4. Contact</h2>
              <div className="bg-primary-50 border border-primary-100 rounded-xl p-6 flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-sm text-primary-600 font-medium mb-1">Email</p>
                  <a
                    href="mailto:contact@medguideschina.com"
                    className="text-lg font-semibold text-primary-800 hover:text-primary-900 transition-colors"
                  >
                    contact@medguideschina.com
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-200">
              <p className="text-sm text-neutral-500">
                Thank you for reaching out to MedGuidesChina, we typically respond to inquiries within 2–3 business days.  
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
