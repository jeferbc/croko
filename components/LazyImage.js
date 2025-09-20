import { useState, useRef, useEffect } from 'react';

const LazyImage = ({ 
  src, 
  alt = '', 
  className = '', 
  placeholder = '/assets/images/placeholder.png',
  autoWebP = true,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    console.error(`Failed to load image: ${src}`);
  };

  // Function to add WebP transformation parameter
  const getOptimizedSrc = (originalSrc) => {
    if (!autoWebP || !originalSrc) return originalSrc;
    
    // Check if it's an ImageKit URL
    if (originalSrc.includes('ik.imagekit.io')) {
      const separator = originalSrc.includes('?') ? '&' : '?';
      return `${originalSrc}${separator}tr=f-webp,q-80`;
    }
    
    // For other URLs, just return as is
    return originalSrc;
  };

  const optimizedSrc = getOptimizedSrc(src);

  return (
    <div ref={imgRef} className={`lazy-image-container ${className}`} {...props}>
      {/* Placeholder/Loading state */}
      {!isLoaded && (
        <div className="lazy-placeholder">
          <div className="lazy-spinner"></div>
        </div>
      )}
      
      {/* Actual image - only load when in view */}
      {isInView && (
        <img
          src={optimizedSrc}
          alt={alt}
          className={`lazy-image ${isLoaded ? 'loaded' : 'loading'} ${className}`}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy" // Native lazy loading as fallback
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out'
          }}
        />
      )}
    </div>
  );
};

export default LazyImage;