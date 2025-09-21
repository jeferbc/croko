import { useState, useRef, useEffect } from 'react';

const LazyImage = ({ 
  src, 
  alt = '', 
  className = '', 
  autoWebP = true,
  priority = false,
  width,
  height,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority); // If priority, load immediately
  const [mounted, setMounted] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Skip intersection observer for priority images
    if (priority) {
      setIsInView(true);
      return;
    }

    // Check if IntersectionObserver is available
    if (typeof window === 'undefined' || !window.IntersectionObserver) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px' // Load earlier for better UX
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority, mounted]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Function to add WebP transformation parameter with responsive sizing
  const getOptimizedSrc = (originalSrc, format = 'webp', quality = 80) => {
    if (!originalSrc) return originalSrc;
    
    // Check if it's an ImageKit URL
    if (originalSrc.includes('ik.imagekit.io')) {
      const separator = originalSrc.includes('?') ? '&' : '?';
      let params = `tr=f-${format},q-${quality}`;
      
      // Add responsive sizing if width/height provided
      if (width) params += `,w-${width}`;
      if (height) params += `,h-${height}`;
      
      return `${originalSrc}${separator}${params}`;
    }
    
    return originalSrc;
  };

  const webpSrc = autoWebP ? getOptimizedSrc(src, 'webp') : null;
  const fallbackSrc = getOptimizedSrc(src, 'jpg');

  // Create style object with dimensions to prevent layout shift
  const imgStyle = {
    transition: isLoaded ? 'opacity 0.3s ease-in-out' : 'none',
    display: 'block',
    width: width || '100%',
    height: height || 'auto'
  };

  // Always render the same structure to avoid hydration mismatch
  return (
    <div 
      ref={imgRef} 
      className={`lazy-image-container ${className}`}
      style={{
        position: 'relative',
        display: 'inline-block',
        width: width || '100%',
        height: height || 'auto'
      }}
      {...props}
    >
      {mounted && isInView ? (
        <picture>
          {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
          <source srcSet={fallbackSrc} type="image/jpeg" />
          <img
            src={fallbackSrc}
            alt={alt}
            className={`lazy-image ${isLoaded ? 'loaded' : 'loading'}`}
            onLoad={handleLoad}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            style={imgStyle}
            width={width}
            height={height}
          />
        </picture>
      ) : (
        <div 
          className="lazy-placeholder"
          style={{
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: height || '200px',
            width: '100%'
          }}
        >
          <div style={{
            width: '40px',
            height: '40px',
            border: '3px solid #ddd',
            borderTop: '3px solid #333',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }}></div>
        </div>
      )}
    </div>
  );
};

export default LazyImage;