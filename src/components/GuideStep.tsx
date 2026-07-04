import {
  Plane,
  CalendarCheck,
  ClipboardCheck,
  Stethoscope,
  CreditCard,
  Pill,
  LucideIcon,
} from 'lucide-react';
import type { GuideStep as GuideStepType } from '@/types';

const iconMap: Record<string, LucideIcon> = {
  Plane,
  CalendarCheck,
  ClipboardCheck,
  Stethoscope,
  CreditCard,
  Pill,
};

interface GuideStepProps {
  step: GuideStepType;
  isActive?: boolean;
  isLast?: boolean;
}

export default function GuideStep({ step, isLast = false }: GuideStepProps) {
  const IconComponent = iconMap[step.icon] || ClipboardCheck;

  return (
    <div className="relative pl-0 md:pl-16 pb-12 last:pb-0">
      <div className="absolute left-0 top-0 hidden md:flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-primary-700 text-white flex items-center justify-center shadow-lg shadow-primary-200 z-10">
          <IconComponent size={22} />
        </div>
        {!isLast && (
          <div className="w-0.5 flex-1 bg-primary-100 mt-2" style={{ minHeight: 'calc(100% + 3rem)' }} />
        )}
      </div>

      <div className="md:hidden flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-primary-700 text-white flex items-center justify-center shadow-md shadow-primary-200 flex-shrink-0">
          <IconComponent size={18} />
        </div>
        <div>
          <span className="text-xs text-primary-600 font-semibold uppercase tracking-wide">
            Step {step.step}
          </span>
          <h3 className="text-xl font-bold text-neutral-900">{step.title}</h3>
        </div>
      </div>

      <div className="hidden md:block mb-4">
        <span className="text-sm text-primary-600 font-semibold uppercase tracking-wide">
          Step {step.step}
        </span>
        <h3 className="text-2xl font-bold text-neutral-900 mt-1">{step.title}</h3>
      </div>

      <div className="bg-white rounded-xl p-5 md:p-6 shadow-card border border-neutral-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {step.items.map((item, index) => (
            <div key={index} className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0 text-xs font-semibold mt-0.5">
                {index + 1}
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 text-sm md:text-base mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
