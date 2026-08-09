import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Article } from '@/types';

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
        featured ? 'h-[72px] md:h-auto md:w-2/5' : 'h-[60px]'
      }`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-primary-700 text-center px-4">
            <div className="text-xs font-semibold text-primary-600 uppercase tracking-wide">
              {article.category_label}
            </div>
          </div>
        </div>
      </div>

      <div className={`p-5 flex-1 flex flex-col ${featured ? 'md:w-3/5' : ''}`}>
        <h3 className="font-semibold text-neutral-900 group-hover:text-primary-700 transition-colors text-lg leading-snug mb-3 line-clamp-2 h-[3.125rem]">
          {article.title}
        </h3>

        <p className="text-sm text-neutral-600 leading-relaxed mb-4 line-clamp-3 h-[4.3rem]">
          {article.excerpt}
        </p>

        <div className="mt-auto flex justify-end">
          <span className="text-primary-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
            Read more
            <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}
