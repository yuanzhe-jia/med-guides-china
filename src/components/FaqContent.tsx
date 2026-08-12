'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MessageCircleQuestion, BookOpen, Star } from 'lucide-react';
import FaqItem from '@/components/FaqItem';
import faqData from '@/data/faq.json';
import type { FaqItem as FaqItemType } from '@/types';

const faqItems = faqData as FaqItemType[];

export default function FaqContent() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleItem = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-neutral-50 min-h-screen">
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
              View Frequently Asked Questions from Worldwide Patients
            </h1>
            <p className="text-lg md:text-xl text-primary-100 leading-relaxed">
              Everything you need to know about seeking medical care in China. 
              Can&apos;t find your question? Reach out a hospital directly.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-custom max-w-4xl">
          <div className="space-y-4">
            {faqItems.map((item) => (
              <FaqItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onToggle={() => toggleItem(item.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section — unified dark-blue gradient (consistent with all primary pages) */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-700 py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-400 rounded-full -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <MessageCircleQuestion className="text-secondary-400 mx-auto mb-6" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Still Have Questions?
            </h2>
            <p className="text-lg text-primary-100 mb-8 leading-relaxed">
              Every patient&apos;s situation is unique. 
              If you have questions we haven&apos;t covered, please contact the hospital you are interested in for inquiries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/hospitals"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-800 px-8 py-3.5 rounded-xl font-semibold hover:bg-primary-50 transition-all shadow-lg"
              >
                <BookOpen size={18} />
                Find a Hospital
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
