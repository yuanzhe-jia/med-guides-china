import Link from 'next/link';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import type { Article } from '@/types';
import { formatDate } from '@/lib/utils';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className={`group bg-white rounded-xl overflow-hidden shadow-card card-hover border border-neutral-100 flex flex-col ${
        featured ? 'md:flex-row md:items-stretch' : ''
      }`}
    >
      <div className={`relative overflow-hidden bg-gradient-to-br from-secondary-50 to-primary-100 ${
        featured ? 'h-48 md:h-auto md:w-2/5' : 'h-40'
      }`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-primary-700 text-center px-6">
            <div className="text-sm font-medium text-primary-600 uppercase tracking-wide mb-2">
              {article.category_label}
            </div>
            <div className="w-12 h-0.5 bg-primary-400 mx-auto" />
          </div>
        </div>
        
        {article.featured && (
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500 text-white">
              Featured
            </span>
          </div>
        )}
      </div>

      <div className={`p-5 flex-1 flex flex-col ${featured ? 'md:w-3/5' : ''}`}>
        <div className="flex items-center gap-4 text-xs text-neutral-500 mb-3">
          <div className="flex items-center gap-1">
            <Calendar size={12} />
            <span>{formatDate(article.publish_date)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={12} />
            <span>{article.read_time} read</span>
          </div>
        </div>

        <h3 className="font-semibold text-neutral-900 group-hover:text-primary-700 transition-colors text-lg leading-snug mb-3">
          {article.title}
        </h3>

        <p className="text-sm text-neutral-600 leading-relaxed mb-4 line-clamp-3">
          {article.excerpt}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {article.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-neutral-100 text-neutral-600 text-xs rounded-md"
              >
                #{tag}
              </span>
            ))}
          </div>
          
          <span className="text-primary-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
            Read more
            <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}
