'use client';

import { useState } from 'react';
import { HelpCircle, MessageCircleQuestion } from 'lucide-react';
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
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-primary-100 leading-relaxed">
              Everything you need to know about seeking medical care in China. 
              Can&apos;t find your question? Reach out to our team.
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

      <section className="bg-white border-t border-neutral-100 py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircleQuestion className="text-primary-600" size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-5">
              Still Have Questions?
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Every patient&apos;s situation is unique. If you have questions we haven&apos;t covered, 
              our team is here to help guide you toward the right care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@medguideschina.com"
                className="inline-flex items-center justify-center gap-2 bg-primary-700 hover:bg-primary-800 text-white px-8 py-3.5 rounded-xl font-semibold transition-colors shadow-md"
              >
                <HelpCircle size={18} />
                Email Us Your Question
              </a>
              <a
                href="/hospitals"
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-neutral-200 hover:border-primary-300 text-neutral-700 hover:text-primary-700 px-8 py-3.5 rounded-xl font-semibold transition-colors"
              >
                Browse Hospitals
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
