import { Suspense } from 'react';
import HospitalsContent from '@/components/HospitalsContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Find Top Hospitals in China',
  description: 'Discover 30+ top Chinese hospitals with international patient services. Filter by city, specialty, tier, and hospital type. Beijing, Shanghai, Guangzhou, Hainan.',
  keywords: ['hospitals in China', 'international hospitals China', 'Beijing hospitals', 'Shanghai hospitals', 'medical tourism China'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://medguideschina.com/hospitals',
    siteName: 'China Medical Guides',
    title: 'Find Top Hospitals in China | China Medical Guides',
    description: 'Discover 30+ top Chinese hospitals with international patient services. Filter by city, specialty, tier, and hospital type. Beijing, Shanghai, Guangzhou, Hainan.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Find Top Hospitals in China | China Medical Guides',
    description: 'Discover 30+ top Chinese hospitals with international patient services. Filter by city, specialty, tier, and hospital type. Beijing, Shanghai, Guangzhou, Hainan.',
    creator: '@medguideschina',
  },
  alternates: {
    canonical: 'https://medguideschina.com/hospitals',
  },
};

export default function HospitalsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-neutral-50" />}>
      <HospitalsContent />
    </Suspense>
  );
}
