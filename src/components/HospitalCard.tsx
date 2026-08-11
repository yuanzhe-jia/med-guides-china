import Link from 'next/link';
import { MapPin, Clock, Globe, Shield } from 'lucide-react';
import type { Hospital } from '@/types';

interface HospitalCardProps {
  hospital: Hospital;
  featured?: boolean;
}

const tierColors: Record<string, string> = {
  '3A': 'bg-amber-500 text-white',
  'Other': 'bg-neutral-500 text-white',
};

export default function HospitalCard({ hospital, featured = false }: HospitalCardProps) {
  return (
    <Link
      href={`/hospitals/${hospital.slug}`}
      className="group bg-white rounded-xl overflow-hidden shadow-card card-hover border border-neutral-100 flex flex-col"
    >
      <div className={`relative ${featured ? 'h-48' : 'h-36'} overflow-hidden bg-neutral-100`}>
        {hospital.image_cover && (
          <img
            src={hospital.image_cover}
            alt={hospital.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            {...(featured
              ? { fetchpriority: "high", loading: "eager", decoding: "sync" }
              : { loading: "lazy", decoding: "async" })}
            width="800"
            height="450"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        
        <div className="absolute top-3 left-3 flex gap-2">
          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${tierColors[hospital.tier] || 'bg-neutral-500 text-white'}`}>
            {hospital.tier === '3A' ? '3A (三甲)' : hospital.tier}
          </span>
          {hospital.has_24h_emergency && (
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-red-500 text-white">
              24h ER
            </span>
          )}
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-semibold text-neutral-900 group-hover:text-primary-700 transition-colors text-base leading-tight mb-1 line-clamp-2 h-[2.5rem]">
          {hospital.name}
        </h3>
        <p className="text-sm text-neutral-500 mb-3 line-clamp-1 h-5">{hospital.name_zh}</p>

        <div className="flex items-center gap-1.5 text-sm text-neutral-600 mb-3 h-5">
          <MapPin size={14} className="text-primary-500 flex-shrink-0" />
          <span className="line-clamp-1">{hospital.city}</span>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4 h-6 overflow-hidden">
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
          <div className="flex items-center justify-between text-sm h-5">
            <div className="flex items-center gap-1.5 min-w-0 flex-1 mr-2">
              <Globe size={14} className="text-green-600 flex-shrink-0" />
              <span className="text-neutral-600 truncate">
                {hospital.languages.join(', ')}
              </span>
            </div>
            <div className="text-primary-700 font-semibold flex-shrink-0">
              {hospital.registration_fee_range}
            </div>
          </div>

          <div className="flex items-center gap-1.5 mt-2 text-xs text-neutral-500 h-4">
            {hospital.direct_billing_insurers.length > 0 ? (
              <>
                <Shield size={12} className="text-primary-500 flex-shrink-0" />
                <span className="truncate">Insurance direct billing available</span>
              </>
            ) : (
              <span className="text-transparent">placeholder</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
