import Link from 'next/link';
import { MapPin, Clock, Star, Globe, Shield, Phone } from 'lucide-react';
import type { Hospital } from '@/types';

interface HospitalCardProps {
  hospital: Hospital;
  featured?: boolean;
}

const tierColors: Record<string, string> = {
  'S': 'bg-amber-500 text-white',
  'A+': 'bg-primary-600 text-white',
  'A': 'bg-primary-500 text-white',
  'B': 'bg-neutral-500 text-white',
};

export default function HospitalCard({ hospital, featured = false }: HospitalCardProps) {
  return (
    <Link
      href={`/hospitals/${hospital.slug}`}
      className="group bg-white rounded-xl overflow-hidden shadow-card card-hover border border-neutral-100 flex flex-col"
    >
      <div className={`relative ${featured ? 'h-48' : 'h-36'} overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-primary-700 text-center px-4">
            <div className="text-4xl md:text-5xl font-bold text-primary-800 opacity-20 font-serif">
              {hospital.name.charAt(0)}
            </div>
          </div>
        </div>
        
        <div className="absolute top-3 left-3 flex gap-2">
          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${tierColors[hospital.tier] || 'bg-neutral-500 text-white'}`}>
            {hospital.tier} Tier
          </span>
          {hospital.has_24h_emergency && (
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-red-500 text-white">
              24h ER
            </span>
          )}
        </div>

        <div className="absolute top-3 right-3">
          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/90 text-primary-700 backdrop-blur-sm">
            {hospital.category_label}
          </span>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-start gap-2 mb-2">
          <h3 className="font-semibold text-neutral-900 group-hover:text-primary-700 transition-colors text-base leading-tight">
            {hospital.name}
          </h3>
        </div>
        <p className="text-sm text-neutral-500 mb-3">{hospital.name_zh}</p>

        <div className="flex items-center gap-1.5 text-sm text-neutral-600 mb-3">
          <MapPin size={14} className="text-primary-500 flex-shrink-0" />
          <span>{hospital.city}</span>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {hospital.specialties.slice(0, 3).map((specialty) => (
            <span
              key={specialty}
              className="px-2 py-0.5 bg-primary-50 text-primary-700 text-xs rounded-md"
            >
              {specialty}
            </span>
          ))}
          {hospital.specialties.length > 3 && (
            <span className="px-2 py-0.5 bg-neutral-100 text-neutral-500 text-xs rounded-md">
              +{hospital.specialties.length - 3} more
            </span>
          )}
        </div>

        <div className="mt-auto pt-4 border-t border-neutral-100">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1.5">
              <Globe size={14} className="text-green-600" />
              <span className="text-neutral-600">
                {hospital.languages.join(', ')}
              </span>
            </div>
            <div className="text-primary-700 font-semibold">
              {hospital.registration_fee_range}
            </div>
          </div>

          {hospital.direct_billing_insurers.length > 0 && (
            <div className="flex items-center gap-1.5 mt-2 text-xs text-neutral-500">
              <Shield size={12} className="text-primary-500" />
              <span>Insurance direct billing available</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
