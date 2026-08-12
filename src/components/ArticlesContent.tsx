'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, BookOpen, Filter, MessageCircleQuestion, Star } from 'lucide-react';
import ArticleCard from '@/components/ArticleCard';
import articlesData from '@/data/articles.json';
import type { Article } from '@/types';

const allArticles = articlesData as Article[];

const categories = [
  { value: 'all', label: 'All Articles' },
  { value: 'medical-tourism', label: 'Medical Tourism' },
  { value: 'cost_savings', label: 'Cost & Savings' },
  { value: 'medical-guide', label: 'Medical Guide' }
];

export default function ArticlesContent() {
  const [category, setCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = useMemo(() => {
    let result = [...allArticles];

    if (category !== 'all') {
      result = result.filter((a) => a.category === category);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(query) ||
          a.excerpt.toLowerCase().includes(query) ||
          a.tags.some((t) => t.toLowerCase().includes(query))
      );
    }

    return result.sort((a, b) => {
      // ID 格式 "a1" ~ "a12"：解析尾部数字，按数值从小到大排序（避免字典序 a10 < a2 的坑）
      const na = parseInt(a.id.slice(1), 10);
      const nb = parseInt(b.id.slice(1), 10);
      return (Number.isFinite(na) ? na : Number.MAX_SAFE_INTEGER) - (Number.isFinite(nb) ? nb : Number.MAX_SAFE_INTEGER);
    });
  }, [category, searchQuery]);

  return (
    <div className="bg-neutral-50 min-h-screen">
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Essential Knowledge You Should know Before Your Arrival
            </h1>
            <p className="text-lg md:text-xl text-primary-100 leading-relaxed">
              Expert suggestions, hospital reviews, and practical guides to help you navigate 
              China&apos;s healthcare system with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-12">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-card border border-neutral-100 p-5 md:p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="flex items-center gap-3">
                <Filter className="text-neutral-400 hidden md:block" size={20} />
                <div className="flex flex-wrap gap-2 flex-1">
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => setCategory(cat.value)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        category === cat.value
                          ? 'bg-primary-700 text-white shadow-md'
                          : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-neutral-100 text-sm text-neutral-600">
              Showing <span className="font-semibold text-primary-700">{filteredArticles.length}</span> of {allArticles.length} articles
            </div>
          </div>

          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article, index) => (
                <div
                  key={article.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <ArticleCard article={article} />
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-card border border-neutral-100 p-12 text-center">
              <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <BookOpen className="text-neutral-400" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                No articles match your search
              </h3>
              <p className="text-neutral-600 mb-6 max-w-md mx-auto">
                Try searching with different keywords or browse all articles to see what we have.
              </p>
              <button
                onClick={() => {
                  setCategory('all');
                  setSearchQuery('');
                }}
                className="inline-flex items-center gap-2 bg-primary-700 hover:bg-primary-800 text-white px-6 py-2.5 rounded-lg font-medium transition-colors"
              >
                View All Articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section — unified dark-blue gradient (consistent with all primary pages) */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-700 py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-400 rounded-full -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <MessageCircleQuestion className="text-secondary-400 mx-auto mb-6" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Still Have Questions?
            </h2>
            <p className="text-lg text-primary-100 mb-8 leading-relaxed">
              Every patient&apos;s situation is unique. 
              If you have questions we haven&apos;t covered, please contact the hospital you are interested in for inquiries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/hospitals"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-800 px-8 py-3.5 rounded-xl font-semibold hover:bg-primary-50 transition-all shadow-lg"
              >
                <BookOpen size={18} />
                Find a Hospital
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
