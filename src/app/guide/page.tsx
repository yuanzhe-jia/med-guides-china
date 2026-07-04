import GuideStep from '@/components/GuideStep';
import guideStepsData from '@/data/guide-steps.json';
import type { GuideStep as GuideStepType } from '@/types';
import type { Metadata } from 'next';

const guideSteps = guideStepsData as GuideStepType[];

export const metadata: Metadata = {
  title: 'Complete Medical Guide to China | Your Roadmap to Healthcare',
  description: 'Your complete roadmap to medical care in China. From pre-departure preparation to follow-up care, we break down every step.',
};

export default function GuidePage() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-16 md:py-20 overflow-hidden relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-400 rounded-full -translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
              Your Complete Roadmap to Medical Care in China
            </h1>
            <p className="text-lg md:text-xl text-primary-100 leading-relaxed">
              We've broken down every step so you know exactly what to do — and when. 
              From planning your trip to your final follow-up, we're here to guide you.
            </p>
          </div>
        </div>
      </section>

      {/* Step Navigation */}
      <section className="bg-white border-b border-neutral-100 sticky top-20 z-40 shadow-sm">
        <div className="container-custom">
          <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-hide">
            {guideSteps.map((step) => (
              <a
                key={step.step}
                href={`#step-${step.step}`}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-neutral-600 hover:bg-primary-50 hover:text-primary-700 transition-colors whitespace-nowrap flex-shrink-0"
              >
                <span className="w-6 h-6 rounded-full bg-neutral-100 text-neutral-600 flex items-center justify-center text-xs font-bold">
                  {step.step}
                </span>
                {step.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Content */}
      <section className="py-12 md:py-16">
        <div className="container-custom max-w-4xl">
          <div className="space-y-0">
            {guideSteps.map((step, index) => (
              <div key={step.step} id={`step-${step.step}`} className="scroll-mt-32">
                <GuideStep step={step} isLast={index === guideSteps.length - 1} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-primary-800 to-primary-700 py-16 md:py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 -translate-y-1/2" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Ready to Find the Right Hospital?
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Now that you know what to expect, explore our curated directory of top hospitals 
              with international patient services.
            </p>
            <a
              href="/hospitals"
              className="inline-flex items-center gap-2 bg-white text-primary-800 px-8 py-3.5 rounded-xl font-semibold hover:bg-primary-50 transition-all shadow-lg"
            >
              Browse Hospital Directory
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
