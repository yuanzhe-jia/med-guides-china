'use client';

import { useState, useMemo } from 'react';
import { Search, Filter, X, ChevronDown } from 'lucide-react';
import type { Hospital } from '@/types';

const cities = ['All Cities', 'Beijing', 'Shanghai', 'Guangzhou', 'Hainan'];
const categories = [
  { value: 'all', label: 'All Types' },
  { value: 'public_international', label: 'Public Intl Departments' },
  { value: 'private', label: 'Private Hospitals' },
  { value: 'specialty', label: 'Specialty Hospitals' },
];

const diseaseCategories = [
  { value: 'all', label: 'All Specialties', specialties: [] },
  {
    value: 'oncology',
    label: 'Oncology',
    specialties: ['Oncology', 'Radiation Oncology', 'Surgical Oncology'],
  },
  {
    value: 'orthopedics',
    label: 'Orthopedics',
    specialties: ['Orthopedics', 'Joint Replacement', 'Spine Surgery', 'Sports Medicine', 'Traumatology', 'Hand Surgery'],
  },
  {
    value: 'cardiology',
    label: 'Cardiology',
    specialties: ['Cardiology', 'Cardiac Surgery', 'Vascular Surgery', 'Hypertension', 'Arrhythmia'],
  },
  {
    value: 'neurology',
    label: 'Neurology & Neurosurgery',
    specialties: ['Neurology', 'Neurosurgery', 'Stroke Center', 'Neurointervention', 'Pediatric Neurology'],
  },
  {
    value: 'obstetrics',
    label: 'Obstetrics & Gynecology',
    specialties: ['Obstetrics', 'Obstetrics & Gynecology'],
  },
  {
    value: 'tcm',
    label: 'Traditional Chinese Medicine',
    specialties: ['Traditional Chinese Medicine', 'Acupuncture', 'Tuina Massage', 'Herbal Medicine'],
  },
];

interface FilterBarProps {
  hospitals: Hospital[];
  onFiltered: (filtered: Hospital[]) => void;
}

export default function FilterBar({ hospitals, onFiltered }: FilterBarProps) {
  const [city, setCity] = useState('All Cities');
  const [category, setCategory] = useState('all');
  const [disease, setDisease] = useState('all');
  const [specialty, setSpecialty] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const selectedDisease = diseaseCategories.find((d) => d.value === disease);

  const filteredHospitals = useMemo(() => {
    let result = [...hospitals];

    if (city !== 'All Cities') {
      result = result.filter((h) => h.city === city);
    }

    if (category !== 'all') {
      result = result.filter((h) => h.category === category);
    }

    if (specialty !== 'all') {
      result = result.filter((h) =>
        h.specialties.some((s) => s.toLowerCase().includes(specialty.toLowerCase()))
      );
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (h) =>
          h.name.toLowerCase().includes(query) ||
          h.city.toLowerCase().includes(query) ||
          h.specialties.some((s) => s.toLowerCase().includes(query))
      );
    }

    return result;
  }, [hospitals, city, category, specialty, searchQuery]);

  const handleDiseaseChange = (value: string) => {
    setDisease(value);
    setSpecialty('all');
  };

  const clearFilters = () => {
    setCity('All Cities');
    setCategory('all');
    setDisease('all');
    setSpecialty('all');
    setSearchQuery('');
  };

  const hasActiveFilters =
    city !== 'All Cities' ||
    category !== 'all' ||
    disease !== 'all' ||
    specialty !== 'all' ||
    searchQuery.trim() !== '';

  return (
    <div className="bg-white rounded-2xl shadow-card border border-neutral-100 p-5 md:p-6 mb-8">
      <div className="flex items-center gap-2 mb-5">
        <Filter className="text-primary-600" size={20} />
        <h2 className="text-lg font-semibold text-neutral-900">Filter Hospitals</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1.5">City</label>
          <div className="relative">
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-900 appearance-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all cursor-pointer"
            >
              {cities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" size={18} />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1.5">Hospital Type</label>
          <div className="relative">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-900 appearance-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all cursor-pointer"
            >
              {categories.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" size={18} />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1.5">Medical Specialty</label>
          <div className="relative">
            <select
              value={disease}
              onChange={(e) => handleDiseaseChange(e.target.value)}
              className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-900 appearance-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all cursor-pointer"
            >
              {diseaseCategories.map((d) => (
                <option key={d.value} value={d.value}>
                  {d.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" size={18} />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1.5">Specific Department</label>
          <div className="relative">
            <select
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              disabled={!selectedDisease || selectedDisease.specialties.length === 0}
              className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-900 appearance-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <option value="all">All Departments</option>
              {selectedDisease?.specialties.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" size={18} />
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
          <input
            type="text"
            placeholder="Search hospitals, specialties..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          />
        </div>

        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-1.5 text-sm text-neutral-500 hover:text-primary-600 transition-colors"
          >
            <X size={16} />
            Clear all filters
          </button>
        )}
      </div>

      <div className="mt-4 text-sm text-neutral-600">
        <span className="font-semibold text-primary-700">{filteredHospitals.length}</span> hospitals found
      </div>
    </div>
  );
}
