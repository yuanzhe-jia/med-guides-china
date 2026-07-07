import ArticlesContent from '@/components/ArticlesContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Medical Articles & Guides',
  description: 'Expert articles and guides on healthcare in China. Medical tourism, hospital reviews, treatment costs, insurance tips, and health advice for international patients.',
  keywords: ['China healthcare articles', 'medical tourism guide', 'hospital reviews China', 'treatment costs China', 'health tips China'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.medguideschina.com/articles',
    siteName: 'China Medical Guides',
    title: 'Medical Articles & Guides | China Medical Guides',
    description: 'Expert articles and guides on healthcare in China. Medical tourism, hospital reviews, treatment costs, insurance tips, and health advice for international patients.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medical Articles & Guides | China Medical Guides',
    description: 'Expert articles and guides on healthcare in China. Medical tourism, hospital reviews, treatment costs, insurance tips, and health advice for international patients.',
    creator: '@medguideschina',
  },
  alternates: {
    canonical: 'https://www.medguideschina.com/articles',
  },
};

export default function ArticlesPage() {
  return <ArticlesContent />;
}
