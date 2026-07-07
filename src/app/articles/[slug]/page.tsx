import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  ArrowLeft,
  Calendar,
  Clock,
  BookOpen,
  Share2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import articlesData from '@/data/articles.json';
import { getArticleContent } from '@/lib/markdown';
import { formatDate } from '@/lib/utils';
import type { Article } from '@/types';
import type { Metadata } from 'next';

interface ArticlePageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return (articlesData as Article[]).map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }: ArticlePageProps): Metadata {
  const article = (articlesData as Article[]).find((a) => a.slug === params.slug);
  
  if (!article) {
    return { title: 'Article Not Found' };
  }

  const url = `https://www.medguideschina.com/articles/${article.slug}`;

  return {
    title: article.title,
    description: article.excerpt,
    keywords: article.tags,
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: url,
      siteName: 'China Medical Guides',
      title: `${article.title} | China Medical Guides`,
      description: article.excerpt,
      publishedTime: article.publish_date,
      modifiedTime: article.publish_date,
      authors: ['Xinhua'],
      tags: article.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} | China Medical Guides`,
      description: article.excerpt,
      creator: '@medguideschina',
    },
    alternates: {
      canonical: url,
    },
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const articles = articlesData as Article[];
  const article = articles.find((a) => a.slug === params.slug);
  const content = getArticleContent(params.slug);

  if (!article) {
    notFound();
  }

  const currentIndex = articles.findIndex((a) => a.slug === params.slug);
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  return (
    <div className="bg-neutral-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: article.title,
            description: article.excerpt,
            articleBody: content,
            datePublished: article.publish_date,
            dateModified: article.publish_date,
            author: {
              '@type': 'Organization',
              name: 'Xinhua',
            },
            publisher: {
              '@type': 'Organization',
              name: 'China Medical Guides',
              url: 'https://www.medguideschina.com',
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://www.medguideschina.com/articles/${article.slug}/`,
            },
            keywords: article.tags.join(', '),
            articleSection: article.category_label,
          }),
        }}
      />
      {/* Article Header */}
      <section className="bg-white border-b border-neutral-100">
        <div className="container-custom py-8">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-neutral-500 hover:text-primary-600 transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            Back to All Articles
          </Link>

          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                {article.category_label}
              </span>
              {article.featured && (
                <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm font-medium">
                  Featured
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{formatDate(article.publish_date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{article.read_time} read</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen size={16} />
                <span>By Xinhua</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-10 md:py-12">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <article className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-card border border-neutral-100 p-6 md:p-10">
                <div className="article-content text-lg max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {content}
                  </ReactMarkdown>
                </div>

                {/* Tags */}
                <div className="mt-10 pt-8 border-t border-neutral-100">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm text-neutral-500 font-medium">Tags:</span>
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full text-sm hover:bg-neutral-200 transition-colors cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Previous / Next Navigation */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {prevArticle ? (
                  <Link
                    href={`/articles/${prevArticle.slug}`}
                    className="bg-white rounded-xl shadow-card border border-neutral-100 p-5 hover:shadow-card-hover transition-all group"
                  >
                    <div className="flex items-center gap-2 text-sm text-neutral-500 mb-2">
                      <ChevronLeft size={16} />
                      <span>Previous Article</span>
                    </div>
                    <p className="font-semibold text-neutral-900 group-hover:text-primary-700 transition-colors line-clamp-2">
                      {prevArticle.title}
                    </p>
                  </Link>
                ) : (
                  <div />
                )}
                {nextArticle ? (
                  <Link
                    href={`/articles/${nextArticle.slug}`}
                    className="bg-white rounded-xl shadow-card border border-neutral-100 p-5 hover:shadow-card-hover transition-all group text-right"
                  >
                    <div className="flex items-center justify-end gap-2 text-sm text-neutral-500 mb-2">
                      <span>Next Article</span>
                      <ChevronRight size={16} />
                    </div>
                    <p className="font-semibold text-neutral-900 group-hover:text-primary-700 transition-colors line-clamp-2">
                      {nextArticle.title}
                    </p>
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-gradient-to-br from-primary-700 to-primary-800 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-3">New Here?</h3>
                <p className="text-primary-100 text-sm mb-5">
                  Start with our complete guide to medical care in China — everything you need to know.
                </p>
                <Link
                  href="/guide"
                  className="inline-flex items-center gap-2 bg-white text-primary-700 px-4 py-2.5 rounded-lg font-medium text-sm hover:bg-primary-50 transition-colors"
                >
                  Read the Guide
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
