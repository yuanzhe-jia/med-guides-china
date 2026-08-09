'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

const GOOGLE_AD_CLIENT = 'ca-pub-7905191864325907';

export default function GoogleAdSense() {
  const pathname = usePathname();
  const pageLevelInitialized = useRef(false);
  const lastPathname = useRef<string | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      if (!pageLevelInitialized.current) {
        (window.adsbygoogle = window.adsbygoogle || []).push({
          google_ad_client: GOOGLE_AD_CLIENT,
          enable_page_level_ads: true,
          overlays: { bottom: true, sidebars: true },
        });
        pageLevelInitialized.current = true;
        lastPathname.current = pathname;
        return;
      }

      if (lastPathname.current !== pathname) {
        lastPathname.current = pathname;
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch {
      /* no-op */
    }
  }, [pathname]);

  return null;
}

