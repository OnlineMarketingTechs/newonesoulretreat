'use client';
import { useEffect } from 'react';

const DynamicWOWLoader = ({ shouldLoad }) => {
  useEffect(() => {
    if (shouldLoad) {
      const initWow = async () => {
        if (typeof window !== 'undefined') {
          const { WOW } = await import('wowjs');
          const wow = new WOW();
          wow.init();
        }
      };

      initWow(); // This will run after the component has mounted
    }
  }, [shouldLoad]);

  return null;
};

export default DynamicWOWLoader;