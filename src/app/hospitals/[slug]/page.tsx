import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  MapPin,
  Phone,
  Clock,
  Globe,
  Shield,
  Stethoscope,
  DollarSign,
  Train,
  Bus,
  Car,
  CheckCircle2,
  ArrowLeft,
  Building2,
  Star,
  FileText,
} from 'lucide-react';
import hospitalsData from '@/data/hospitals.json';
import type { Hospital } from '@/types';
import type { Metadata } from 'next';

interface HospitalPageProps {
  params: { slug: string };
}

const tierColors: Record<string, string> = {
  '3A': 'bg-amber-500 text-white',
  'Other': 'bg-neutral-500 text-white',
};

export function generateStaticParams() {
  return (hospitalsData as Hospital[]).map((hospital) => ({
    slug: hospital.slug,
  }));
}

export function generateMetadata({ params }: HospitalPageProps): Metadata {
  const hospital = (hospitalsData as Hospital[]).find((h) => h.slug === params.slug);
  
  if (!hospital) {
    return { title: 'Hospital Not Found' };
  }

  const url = `https://medguideschina.com/hospitals/${hospital.slug}`;

  return {
    title: hospital.name,
    description: hospital.description,
    keywords: [hospital.name, `${hospital.city} hospitals`, ...hospital.specialties, 'international hospital China'],
    openGraph: {
      type: 'profile',
      locale: 'en_US',
      url: url,
      siteName: 'China Medical Guides',
      title: `${hospital.name} | China Medical Guides`,
      description: hospital.description,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${hospital.name} | China Medical Guides`,
      description: hospital.description,
      creator: '@medguideschina',
    },
    alternates: {
      canonical: url,
    },
  };
}

export default function HospitalPage({ params }: HospitalPageProps) {
  const hospital = (hospitalsData as Hospital[]).find((h) => h.slug === params.slug);

  if (!hospital) {
    notFound();
  }

  return (
    <div className="bg-neutral-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Hospital',
            name: hospital.name,
            alternateName: hospital.name_zh,
            description: hospital.description,
            url: `https://medguideschina.com/hospitals/${hospital.slug}/`,
            address: {
              '@type': 'PostalAddress',
              addressLocality: hospital.city,
              addressCountry: 'CN',
            },
            medicalSpecialty: hospital.specialties,
            availableService: hospital.direct_billing_insurers.length > 0 ? ['Insurance direct billing'] : [],
            languagesSpoken: hospital.languages,
            telephone: hospital.phone_foreign,
          }),
        }}
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 -translate-y-1/2" />
        </div>
        
        <div className="container-custom relative z-10 py-10 md:py-14">
          <Link
            href="/hospitals"
            className="inline-flex items-center gap-2 text-primary-200 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            Back to Hospital Directory
          </Link>

          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${tierColors[hospital.tier] || 'bg-neutral-500 text-white'}`}>
                  {hospital.tier === '3A' ? '3A (三甲)' : hospital.tier}
                </span>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-white/10 backdrop-blur-sm">
                  {hospital.category_label}
                </span>
                {hospital.has_24h_emergency && (
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-red-500/90">
                    24h Emergency
                  </span>
                )}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-3">{hospital.name}</h1>
              <p className="text-primary-200 text-lg mb-4">{hospital.name_zh}</p>
              
              <div className="flex flex-wrap gap-6 text-primary-100">
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-secondary-400" />
                  <span>{hospital.city}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={18} className="text-secondary-400" />
                  <a href={`tel:${hospital.phone_foreign}`} className="hover:text-white transition-colors">
                    {hospital.phone_foreign}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={18} className="text-secondary-400" />
                  <span>{hospital.languages.join(', ')}</span>
                </div>
              </div>
            </div>

            <div className="md:text-right">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 inline-block">
                <p className="text-primary-200 text-sm mb-1">Registration Fee Range</p>
                <p className="text-2xl font-bold text-white">{hospital.registration_fee_range}</p>
                <p className="text-primary-300 text-xs mt-1">Last verified: {hospital.last_verified}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 md:py-12">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Section */}
              <div className="bg-white rounded-2xl shadow-card border border-neutral-100 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                    <Building2 className="text-primary-600" size={20} />
                  </div>
                  <h2 className="text-xl font-bold text-neutral-900">About This Hospital</h2>
                </div>
                <p className="text-neutral-700 leading-relaxed text-lg">
                  {hospital.description}
                </p>
              </div>

              {/* Specialties Section */}
              <div className="bg-white rounded-2xl shadow-card border border-neutral-100 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                    <Stethoscope className="text-green-600" size={20} />
                  </div>
                  <h2 className="text-xl font-bold text-neutral-900">Top Specialties</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {hospital.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="px-4 py-2 bg-primary-50 text-primary-700 rounded-lg font-medium text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cost Reference Section */}
              <div className="bg-white rounded-2xl shadow-card border border-neutral-100 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center">
                    <DollarSign className="text-amber-600" size={20} />
                  </div>
                  <h2 className="text-xl font-bold text-neutral-900">Cost Reference</h2>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-neutral-800 mb-3">Registration & Consultation</h3>
                  <div className="bg-neutral-50 rounded-xl p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-600">Registration Fee</span>
                      <span className="font-bold text-primary-700">{hospital.registration_fee_range}</span>
                    </div>
                    <div className="flex justify-between items-center mt-2 pt-2 border-t border-neutral-200">
                      <span className="text-neutral-600">Booking Channel</span>
                      <span className="text-neutral-800 font-medium">{hospital.registration_channel}</span>
                    </div>
                    <div className="flex justify-between items-center mt-2 pt-2 border-t border-neutral-200">
                      <span className="text-neutral-600">Registration Difficulty</span>
                      <span className="text-neutral-800 font-medium">{hospital.registration_difficulty}</span>
                    </div>
                  </div>
                </div>

                {hospital.common_tests && hospital.common_tests.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-neutral-800 mb-3">Common Tests & Procedures</h3>
                    <div className="border border-neutral-200 rounded-xl overflow-hidden">
                      <table className="w-full text-sm">
                        <thead className="bg-neutral-50">
                          <tr>
                            <th className="text-left py-3 px-4 font-semibold text-neutral-700">Service</th>
                            <th className="text-right py-3 px-4 font-semibold text-neutral-700">Price Range</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-100">
                          {hospital.common_tests.map((test, index) => (
                            <tr key={index} className="hover:bg-neutral-50">
                              <td className="py-3 px-4 text-neutral-700">{test.name}</td>
                              <td className="py-3 px-4 text-right font-medium text-primary-700">{test.price_range}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                  <p className="text-sm text-blue-800 leading-relaxed">
                    <span className="font-semibold">Note:</span> Final costs depend on individual conditions and treatment plans. 
                    A detailed quote is always provided before any procedure begins. Request an estimate directly from the hospital's 
                    international department for the most accurate pricing.
                  </p>
                </div>
              </div>

              {/* International Services Section */}
              <div className="bg-white rounded-2xl shadow-card border border-neutral-100 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
                    <Globe className="text-purple-600" size={20} />
                  </div>
                  <h2 className="text-xl font-bold text-neutral-900">International Patient Services</h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-neutral-50 rounded-xl">
                    <CheckCircle2 className="text-green-500 mt-0.5 flex-shrink-0" size={18} />
                    <div>
                      <p className="font-medium text-neutral-800">Languages Supported</p>
                      <p className="text-sm text-neutral-600 mt-0.5">
                        {hospital.international_services.languages.join(', ')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-neutral-50 rounded-xl">
                    <CheckCircle2 className="text-green-500 mt-0.5 flex-shrink-0" size={18} />
                    <div>
                      <p className="font-medium text-neutral-800">International Coordinators</p>
                      <p className="text-sm text-neutral-600 mt-0.5">
                        {hospital.international_services.has_international_coordinators ? 'Available' : 'Not available'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-neutral-50 rounded-xl">
                    <CheckCircle2 className="text-green-500 mt-0.5 flex-shrink-0" size={18} />
                    <div>
                      <p className="font-medium text-neutral-800">Translation Service</p>
                      <p className="text-sm text-neutral-600 mt-0.5">
                        {hospital.international_services.has_translation_service ? 'Provided' : 'Not provided'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-neutral-50 rounded-xl">
                    <CheckCircle2 className="text-green-500 mt-0.5 flex-shrink-0" size={18} />
                    <div>
                      <p className="font-medium text-neutral-800">Dedicated International Floor</p>
                      <p className="text-sm text-neutral-600 mt-0.5">
                        {hospital.international_services.has_dedicated_international_floor ? 'Yes' : 'No'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Insurance & Payment Section */}
              <div className="bg-white rounded-2xl shadow-card border border-neutral-100 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center">
                    <Shield className="text-indigo-600" size={20} />
                  </div>
                  <h2 className="text-xl font-bold text-neutral-900">Insurance & Payment</h2>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-neutral-800 mb-3">Direct Billing Insurance Partners</h3>
                  <div className="flex flex-wrap gap-2">
                    {hospital.direct_billing_insurers.map((insurer) => (
                      <span
                        key={insurer}
                        className="px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-medium"
                      >
                        {insurer}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-neutral-500 mt-3">
                    Confirm your plan's China coverage with your insurer before your visit.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-800 mb-3">Accepted Payment Methods</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Cash (RMB)', 'Visa', 'Mastercard', 'UnionPay', 'WeChat Pay', 'Alipay'].map((method) => (
                      <span
                        key={method}
                        className="px-3 py-1.5 bg-neutral-100 text-neutral-700 rounded-lg text-sm"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Transportation Section */}
              <div className="bg-white rounded-2xl shadow-card border border-neutral-100 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center">
                    <MapPin className="text-teal-600" size={20} />
                  </div>
                  <h2 className="text-xl font-bold text-neutral-900">Location & Transportation</h2>
                </div>

                <div className="mb-6 p-4 bg-neutral-50 rounded-xl">
                  <p className="font-medium text-neutral-800 mb-1">Address</p>
                  <p className="text-neutral-600">{hospital.address}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Train className="text-blue-600" size={16} />
                    </div>
                    <div>
                      <p className="font-medium text-neutral-800">Nearest Subway</p>
                      <p className="text-sm text-neutral-600">{hospital.transportation.nearest_subway}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Bus className="text-green-600" size={16} />
                    </div>
                    <div>
                      <p className="font-medium text-neutral-800">Bus Routes</p>
                      <p className="text-sm text-neutral-600">{hospital.transportation.bus_routes.join(', ')}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Car className="text-amber-600" size={16} />
                    </div>
                    <div>
                      <p className="font-medium text-neutral-800">By Taxi</p>
                      <p className="text-sm text-neutral-600">{hospital.transportation.taxi_guide}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Sticky Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-card border border-neutral-100 p-6 sticky top-24">
                <h3 className="font-bold text-lg text-neutral-900 mb-5">Quick Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-neutral-100">
                    <span className="text-neutral-600 text-sm">Phone</span>
                    <a
                      href={`tel:${hospital.phone_foreign}`}
                      className="font-medium text-primary-600 hover:text-primary-700 text-sm"
                    >
                      {hospital.phone_foreign}
                    </a>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b border-neutral-100">
                    <span className="text-neutral-600 text-sm">City</span>
                    <span className="font-medium text-neutral-800 text-sm">{hospital.city}</span>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b border-neutral-100">
                    <span className="text-neutral-600 text-sm">Tier</span>
                    <span className={`px-2 py-0.5 rounded text-xs font-semibold ${tierColors[hospital.tier] || 'bg-neutral-500 text-white'}`}>
                      {hospital.tier === '3A' ? '3A (三甲)' : hospital.tier}
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b border-neutral-100">
                    <span className="text-neutral-600 text-sm">24h ER</span>
                    <span className={`text-sm font-medium ${hospital.has_24h_emergency ? 'text-green-600' : 'text-neutral-500'}`}>
                      {hospital.has_24h_emergency ? 'Available' : 'Not available'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-3">
                    <span className="text-neutral-600 text-sm">Languages</span>
                    <span className="font-medium text-neutral-800 text-sm text-right">
                      {hospital.languages.join(', ')}
                    </span>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <a
                    href={`tel:${hospital.phone_foreign}`}
                    className="w-full flex items-center justify-center gap-2 bg-primary-700 hover:bg-primary-800 text-white py-3 rounded-xl font-semibold transition-colors"
                  >
                    <Phone size={18} />
                    Call Hospital
                  </a>
                  <Link
                    href="/roadmap"
                    className="w-full flex items-center justify-center gap-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 py-3 rounded-xl font-semibold transition-colors"
                  >
                    <FileText size={18} />
                    Read Roadmap
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
