'use client';
import { useEffect } from 'react';

export default function WOWInitializer() {
  useEffect(() => {
    const initWow = async () => {
      if (typeof window !== 'undefined') {
        const WOW = (await import('wowjs')).default.WOW;
        new WOW().init();
      }
    };

    initWow();
  }, []);

  return null; // This component doesn't render anything
}