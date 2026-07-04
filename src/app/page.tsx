import Link from 'next/link';
import {
  Heart,
  Shield,
  Clock,
  DollarSign,
  ArrowRight,
  MapPin,
  Building2,
  Star,
  Quote,
  BookOpen,
  Stethoscope,
  Globe2,
  Users,
} from 'lucide-react';
import HospitalCard from '@/components/HospitalCard';
import ArticleCard from '@/components/ArticleCard';
import hospitalsData from '@/data/hospitals.json';
import articlesData from '@/data/articles.json';
import citiesData from '@/data/cities.json';
import patientStoriesData from '@/data/patient-stories.json';
import type { Hospital, Article, City, PatientStory } from '@/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'China Medical Guides | Your Trusted Healthcare Companion in China',
  description: 'Your trusted guide to world-class healthcare in China. Find top hospitals, understand costs, and navigate the Chinese medical system with confidence.',
};

const featuredHospitals = (hospitalsData as Hospital[]).slice(0, 4);
const featuredArticles = (articlesData as Article[]).filter((a) => a.featured).slice(0, 3);
const cities = citiesData as City[];
const patientStories = patientStoriesData as PatientStory[];

const stats = [
  { value: '500+', label: 'Top Hospitals', icon: Building2 },
  { value: '40-80%', label: 'Cost Savings', icon: DollarSign },
  { value: '48h-2w', label: 'Surgery Wait', icon: Clock },
  { value: '50+', label: 'Nationalities Served', icon: Globe2 },
];

const costComparisons = [
  {
    procedure: 'Knee Replacement',
    china: { price: '$12,000', percent: 20 },
    us: { price: '$55,000', percent: 100 },
  },
  {
    procedure: 'Coronary Angioplasty',
    china: { price: '$8,000', percent: 18 },
    us: { price: '$45,000', percent: 100 },
  },
  {
    procedure: 'Brain MRI Scan',
    china: { price: '$200', percent: 10 },
    us: { price: '$2,000', percent: 100 },
  },
];

const waitTimeComparisons = [
  {
    procedure: 'Hip Replacement',
    china: { time: '1-2 weeks', percent: 10 },
    compare: { country: 'UK', time: '6-12 months', percent: 100 },
  },
  {
    procedure: 'Cardiac Bypass',
    china: { time: '3-7 days', percent: 8 },
    compare: { country: 'Canada', time: '3-6 months', percent: 100 },
  },
  {
    procedure: 'Spine Surgery',
    china: { time: '1-2 weeks', percent: 12 },
    compare: { country: 'Australia', time: '4-8 months', percent: 100 },
  },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-secondary-400 rounded-full translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTh2MkgyNHYtMmgxMnptLTgtNHYyaC00di0yaDR6bTE2IDB2MmgtNHYtMmg0eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        
        <div className="container-custom relative z-10 py-20 md:py-28 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6 animate-fade-in">
              <Heart size={16} className="text-red-400" />
              <span className="text-primary-100">Trusted by patients from 50+ countries</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up">
              We Bridge the Gap Between You and{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 to-secondary-400">
                World-Class Healthcare
              </span>{' '}
              in China
            </h1>
            
            <p className="text-lg md:text-xl text-primary-100 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Navigating a foreign healthcare system shouldn't be stressful. We provide transparent, reliable information about China's best hospitals — you can make informed decisions about your health with confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <Link
                href="/hospitals"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-800 px-8 py-3.5 rounded-xl font-semibold hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <Stethoscope size={18} />
                Find a Hospital
              </Link>
              <Link
                href="/guide"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-3.5 rounded-xl font-semibold hover:bg-white/20 transition-all"
              >
                <BookOpen size={18} />
                Read Our Guide
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="relative z-10 border-t border-white/10 bg-primary-900/50 backdrop-blur-sm">
          <div className="container-custom py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl mb-3">
                    <stat.icon className="text-secondary-400" size={22} />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-primary-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cost & Time Advantages Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">Why China</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3 mb-5">
              Exceptional Quality, Remarkable Value
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Affordable doesn't mean lower quality — it means smarter choices. China's top hospitals match international standards at a fraction of the cost, with dramatically shorter wait times.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Cost Comparison */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-card border border-neutral-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                  <DollarSign className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900">Cost Advantage</h3>
                  <p className="text-sm text-neutral-500">Average procedure costs compared to the US</p>
                </div>
              </div>

              <div className="space-y-6">
                {costComparisons.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-neutral-800">{item.procedure}</span>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="text-green-600 font-semibold">{item.china.price}</span>
                        <span className="text-neutral-400">vs</span>
                        <span className="text-neutral-500">{item.us.price}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div className="flex-1 h-3 bg-neutral-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full transition-all duration-1000"
                          style={{ width: `${item.china.percent}%` }}
                        />
                      </div>
                      <span className="text-xs text-green-600 font-medium w-12 text-right">China</span>
                    </div>
                    <div className="flex gap-2 items-center mt-1.5">
                      <div className="flex-1 h-3 bg-neutral-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-neutral-300 rounded-full"
                          style={{ width: `${item.us.percent}%` }}
                        />
                      </div>
                      <span className="text-xs text-neutral-500 font-medium w-12 text-right">USA</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Wait Time Comparison */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-card border border-neutral-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center">
                  <Clock className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900">Time Advantage</h3>
                  <p className="text-sm text-neutral-500">Typical wait times from first consultation</p>
                </div>
              </div>

              <div className="space-y-6">
                {waitTimeComparisons.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-neutral-800">{item.procedure}</span>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="text-primary-600 font-semibold">{item.china.time}</span>
                        <span className="text-neutral-400">vs</span>
                        <span className="text-neutral-500">{item.compare.time}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div className="flex-1 h-3 bg-neutral-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary-400 to-primary-500 rounded-full"
                          style={{ width: `${item.china.percent}%` }}
                        />
                      </div>
                      <span className="text-xs text-primary-600 font-medium w-12 text-right">China</span>
                    </div>
                    <div className="flex gap-2 items-center mt-1.5">
                      <div className="flex-1 h-3 bg-neutral-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-neutral-300 rounded-full"
                          style={{ width: '100%' }}
                        />
                      </div>
                      <span className="text-xs text-neutral-500 font-medium w-12 text-right">
                        {item.compare.country}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Hospitals Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div className="max-w-2xl">
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">Top Hospitals</span>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3 mb-4">
                Most Trusted by International Patients
              </h2>
              <p className="text-lg text-neutral-600">
                Handpicked hospitals with proven track records of excellent care for foreign patients. All have English-speaking staff and international insurance direct billing.
              </p>
            </div>
            <Link
              href="/hospitals"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
            >
              View All Hospitals
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredHospitals.map((hospital, index) => (
              <div key={hospital.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <HospitalCard hospital={hospital} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">Cities</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3 mb-4">
              China's Medical Excellence Hubs
            </h2>
            <p className="text-lg text-neutral-600">
              From Beijing's renowned university hospitals to Shanghai's international medical centers, discover where China's best healthcare is found.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cities.map((city, index) => (
              <Link
                key={city.id}
                href={`/hospitals?city=${city.name}`}
                className="group relative overflow-hidden rounded-2xl shadow-card card-hover h-64"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-24 h-24 border-2 border-white rounded-full" />
                    <div className="absolute bottom-8 left-8 w-16 h-16 border-2 border-white rounded-full opacity-50" />
                  </div>
                </div>

                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="text-secondary-400" size={18} />
                    <span className="text-primary-200 text-sm font-medium">{city.hospital_count} Hospitals</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-secondary-300 transition-colors">
                    {city.name}
                  </h3>
                  <p className="text-primary-200 text-sm leading-relaxed line-clamp-4">
                    {city.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Stories Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">Patient Stories</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3 mb-4">
              Real Stories from Real Patients
            </h2>
            <p className="text-lg text-neutral-600">
              Hear from people who've been through the journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {patientStories.map((story, index) => (
              <div
                key={story.id}
                className="bg-neutral-50 rounded-2xl p-6 md:p-8 relative border border-neutral-100 hover:shadow-card-hover transition-shadow"
              >
                <Quote className="absolute top-6 right-6 text-primary-100" size={48} />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
                      {story.initials}
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900">{story.name}</h4>
                      <p className="text-sm text-neutral-500">
                        {story.nationality} · {story.condition}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-neutral-700 leading-relaxed text-lg italic mb-4">
                    "{story.quote}"
                  </p>
                  
                  <div className="flex items-center gap-2">
                    <Users size={14} className="text-primary-500" />
                    <span className="text-sm text-neutral-500">
                      Treated at <span className="text-primary-600 font-medium">{story.hospital}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div className="max-w-2xl">
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">Learning Center</span>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3 mb-4">
                Essential Reading for Your Medical Journey
              </h2>
              <p className="text-lg text-neutral-600">
                Practical guides, hospital reviews, and expert advice to help you navigate China's healthcare system with confidence.
              </p>
            </div>
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
            >
              All Articles
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredArticles.map((article, index) => (
              <div key={article.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-700 py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-400 rounded-full -translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="text-secondary-400 mx-auto mb-6" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Ready to Take the Next Step?
            </h2>
            <p className="text-lg text-primary-100 mb-8 leading-relaxed">
              Whether you're researching options or ready to book your first appointment, 
              our guide and hospital directory have everything you need to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/guide"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-800 px-8 py-3.5 rounded-xl font-semibold hover:bg-primary-50 transition-all shadow-lg"
              >
                <BookOpen size={18} />
                Read Our Complete Guide
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-3.5 rounded-xl font-semibold hover:bg-white/20 transition-all"
              >
                <Star size={18} />
                View FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
