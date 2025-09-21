// Performance monitoring for Core Web Vitals
(function() {
  'use strict';
  
  // Only run in production and on the client
  if (typeof window === 'undefined' || window.location.hostname === 'localhost') {
    return;
  }
  
  // Track Core Web Vitals
  function trackWebVital(name, value, id) {
    // Send to analytics (replace with your analytics service)
    if (typeof gtag !== 'undefined') {
      gtag('event', name, {
        event_category: 'Web Vitals',
        value: Math.round(name === 'CLS' ? value * 1000 : value),
        event_label: id,
        non_interaction: true,
      });
    }
    
    // Log to console in development
    console.log(`${name}: ${value} (${id})`);
  }
  
  // Dynamic import for web-vitals library
  function loadWebVitals() {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(trackWebVital);
      getFID(trackWebVital);
      getFCP(trackWebVital);
      getLCP(trackWebVital);
      getTTFB(trackWebVital);
    }).catch(err => {
      // Fallback manual tracking if web-vitals library not available
      console.log('Web Vitals library not available, using manual tracking');
      manualPerformanceTracking();
    });
  }
  
  // Manual performance tracking fallback
  function manualPerformanceTracking() {
    // Track LCP manually
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        trackWebVital('LCP', lastEntry.startTime, lastEntry.id || 'manual');
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      
      // Track FCP
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (entry.name === 'first-contentful-paint') {
            trackWebVital('FCP', entry.startTime, 'manual');
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
    }
    
    // Track page load times
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0];
        if (navigation) {
          trackWebVital('Load Time', navigation.loadEventEnd - navigation.loadEventStart, 'manual');
          trackWebVital('DOM Content Loaded', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart, 'manual');
        }
      }, 0);
    });
  }
  
  // Image loading performance
  function trackImagePerformance() {
    const images = document.querySelectorAll('img[src*="ik.imagekit.io"]');
    images.forEach((img, index) => {
      const startTime = performance.now();
      img.addEventListener('load', () => {
        const loadTime = performance.now() - startTime;
        trackWebVital('Image Load Time', loadTime, `image-${index}`);
      });
    });
  }
  
  // Initialize monitoring
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      loadWebVitals();
      trackImagePerformance();
    });
  } else {
    loadWebVitals();
    trackImagePerformance();
  }
  
})();