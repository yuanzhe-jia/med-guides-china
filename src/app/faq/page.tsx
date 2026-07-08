import FaqContent from '@/components/FaqContent';
import faqData from '@/data/faq.json';
import type { Metadata } from 'next';
import type { FaqItem } from '@/types';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Find answers to common questions about medical care in China. Hospital appointments, payment, insurance, language support, medical tourism, and more.',
  keywords: ['China healthcare FAQ', 'medical questions China', 'hospital appointment China', 'medical insurance China', 'medical tourism FAQ'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://medguideschina.com/faq',
    siteName: 'China Medical Guides',
    title: 'Frequently Asked Questions | China Medical Guides',
    description: 'Find answers to common questions about medical care in China. Hospital appointments, payment, insurance, language support, medical tourism, and more.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Questions | China Medical Guides',
    description: 'Find answers to common questions about medical care in China. Hospital appointments, payment, insurance, language support, medical tourism, and more.',
    creator: '@medguideschina',
  },
  alternates: {
    canonical: 'https://medguideschina.com/faq',
  },
};

export default function FaqPage() {
  const faqItems = faqData as FaqItem[];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FaqContent />
    </>
  );
}
