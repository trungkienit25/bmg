'use client';

import { useEffect } from 'react';
import AOS from 'aos';

const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
      easing: 'ease-in-out',
    });

    // Refresh AOS on route change
    const handleRouteChange = () => {
      AOS.refresh();
    };

    window.addEventListener('load', handleRouteChange);
    
    return () => {
      window.removeEventListener('load', handleRouteChange);
    };
  }, []);

  return null;
};

export default AOSInit;

