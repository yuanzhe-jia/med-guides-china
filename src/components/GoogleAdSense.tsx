'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

const GOOGLE_AD_CLIENT = 'ca-pub-7905191864325907';

function pushPageLevelAds() {
  if (typeof window === 'undefined') return;
  try {
    (window.adsbygoogle = window.adsbygoogle || []).push({
      google_ad_client: GOOGLE_AD_CLIENT,
      enable_page_level_ads: true,
      overlays: { bottom: true, sidebars: true },
    });
  } catch {
    /* no-op */
  }
}

export default function GoogleAdSense() {
  const pathname = usePathname();

  useEffect(() => {
    // Initial page-level auto ads trigger (SSR-hydrated first paint)
    pushPageLevelAds();

    // Re-trigger on client-side route changes (SPA navs between articles/hospitals)
  }, [pathname]);

  return null;
}

