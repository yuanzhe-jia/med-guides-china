'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import type { FaqItem as FaqItemType } from '@/types';

interface FaqItemProps {
  item: FaqItemType;
  isOpen?: boolean;
  onToggle?: () => void;
}

export default function FaqItem({ item, isOpen: externalIsOpen, onToggle }: FaqItemProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  
  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalIsOpen(!internalIsOpen);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-neutral-100 shadow-card overflow-hidden">
      <button
        onClick={handleToggle}
        className="w-full flex items-start gap-4 p-5 md:p-6 text-left hover:bg-neutral-50 transition-colors"
      >
        <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center flex-shrink-0">
          <HelpCircle className="text-primary-600" size={20} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-neutral-900 text-base md:text-lg leading-snug">
            {item.question}
          </h3>
        </div>
        <ChevronDown
          className={`text-neutral-400 flex-shrink-0 mt-1 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          size={20}
        />
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 md:px-6 pb-5 md:pb-6 pl-19 md:pl-20">
          <div className="pl-14 md:pl-0 ml-0 md:ml-0">
            <p className="text-neutral-600 leading-relaxed text-base">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
