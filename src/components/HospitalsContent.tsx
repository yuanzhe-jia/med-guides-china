'use client';

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, MapPin, AlertCircle } from 'lucide-react';
import HospitalCard from '@/components/HospitalCard';
import hospitalsData from '@/data/hospitals.json';
import type { Hospital } from '@/types';

const allHospitals = hospitalsData as Hospital[];

const cities = ['All Cities', ...Array.from(new Set(allHospitals.map((h) => h.city)))];

const tiers = [
  { value: 'all', label: 'All Tiers' },
  { value: '3A', label: '3A (Tier 3A / 三甲)' },
  { value: 'Other', label: 'Other' },
];

const categories = [
  { value: 'all', label: 'All Types' },
  { value: 'public_international', label: 'Public' },
  { value: 'private', label: 'Private' },
];

const specialties = [
  'All Specialties',
  'Oncology',
  'Orthopedics',
  'Cardiology',
  'Neurology',
  'Neurosurgery',
  'Obstetrics',
  'Obstetrics & Gynecology',
  'Traditional Chinese Medicine',
  'Dermatology',
  'Dentistry',
  'Pulmonology',
  'Rheumatology',
  'Endocrinology',
  'Ophthalmology',
];

export default function HospitalsContent() {
  const searchParams = useSearchParams();
  const [city, setCity] = useState('All Cities');
  const [tier, setTier] = useState('all');
  const [category, setCategory] = useState('all');
  const [specialty, setSpecialty] = useState('All Specialties');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // 先重置所有筛选条件为默认值，避免与之前的状态叠加
    setCity('All Cities');
    setTier('all');
    setCategory('all');
    setSpecialty('All Specialties');
    setSearchQuery('');

    // 只根据当前 URL 中存在的参数设置状态
    const cityParam = searchParams.get('city');
    if (cityParam && cities.includes(cityParam)) {
      setCity(cityParam);
    }
    const specialtyParam = searchParams.get('specialty');
    if (specialtyParam) {
      const formatted = specialtyParam
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
      if (specialties.includes(formatted)) {
        setSpecialty(formatted);
      }
    }
  }, [searchParams]);

  const filteredHospitals = useMemo(() => {
    let result = [...allHospitals];

    if (city !== 'All Cities') {
      result = result.filter((h) => h.city === city);
    }

    if (tier !== 'all') {
      result = result.filter((h) => h.tier === tier);
    }

    if (category !== 'all') {
      result = result.filter((h) => h.category === category);
    }

    if (specialty !== 'All Specialties') {
      result = result.filter((h) =>
        h.specialties.some(
          (s) => s.toLowerCase() === specialty.toLowerCase() ||
            s.toLowerCase().includes(specialty.toLowerCase())
        )
      );
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (h) =>
          h.name.toLowerCase().includes(query) ||
          h.city.toLowerCase().includes(query) ||
          h.description.toLowerCase().includes(query) ||
          h.specialties.some((s) => s.toLowerCase().includes(query))
      );
    }

    return result;
  }, [city, tier, category, specialty, searchQuery]);

  const hasActiveFilters =
    city !== 'All Cities' ||
    tier !== 'all' ||
    category !== 'all' ||
    specialty !== 'All Specialties' ||
    searchQuery.trim() !== '';

  const clearFilters = () => {
    setCity('All Cities');
    setTier('all');
    setCategory('all');
    setSpecialty('All Specialties');
    setSearchQuery('');
  };

  return (
    <div className="bg-neutral-50 min-h-screen">
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Find the Right Hospital for Your Health Needs
            </h1>
            <p className="text-lg md:text-xl text-primary-100 leading-relaxed">
              Browse our curated list of top Chinese hospitals with international patient services.
              Filter by city, specialty, or hospital type to find your perfect match.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-12">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-card border border-neutral-100 p-5 md:p-6 mb-8">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
              <input
                type="text"
                placeholder="Search hospitals, specialties, cities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-base"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1.5">City</label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all cursor-pointer"
                >
                  {cities.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1.5">Hospital Tier</label>
                <select
                  value={tier}
                  onChange={(e) => setTier(e.target.value)}
                  className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all cursor-pointer"
                >
                  {tiers.map((t) => (
                    <option key={t.value} value={t.value}>{t.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1.5">Hospital Type</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all cursor-pointer"
                >
                  {categories.map((c) => (
                    <option key={c.value} value={c.value}>{c.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1.5">Specialty</label>
                <select
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                  className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all cursor-pointer"
                >
                  {specialties.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-4 border-t border-neutral-100">
              <p className="text-neutral-600">
                Showing <span className="font-semibold text-primary-700">{filteredHospitals.length}</span> of {allHospitals.length} hospitals
              </p>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-neutral-500 hover:text-primary-600 transition-colors flex items-center gap-1.5"
                >
                  <AlertCircle size={14} />
                  Clear all filters
                </button>
              )}
            </div>
          </div>

          {filteredHospitals.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredHospitals.map((hospital, index) => (
                <div
                  key={hospital.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <HospitalCard hospital={hospital} />
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-card border border-neutral-100 p-12 text-center">
              <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <AlertCircle className="text-neutral-400" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                No hospitals match your filters
              </h3>
              <p className="text-neutral-600 mb-6 max-w-md mx-auto">
                We couldn&apos;t find a match just yet. Try broadening your filters, 
                or explore our complete hospital directory.
              </p>
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-2 bg-primary-700 hover:bg-primary-800 text-white px-6 py-2.5 rounded-lg font-medium transition-colors"
              >
                <MapPin size={16} />
                View All Hospitals
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
