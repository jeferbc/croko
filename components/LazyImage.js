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
  const imgRef = useRef();

  useEffect(() => {
    // Skip intersection observer for priority images
    if (priority) {
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
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Function to add WebP transformation parameter
  const getOptimizedSrc = (originalSrc) => {
    if (!autoWebP || !originalSrc) return originalSrc;
    
    // Check if it's an ImageKit URL
    if (originalSrc.includes('ik.imagekit.io')) {
      const separator = originalSrc.includes('?') ? '&' : '?';
      return `${originalSrc}${separator}tr=f-webp,q-80`;
    }
    
    return originalSrc;
  };

  const optimizedSrc = getOptimizedSrc(src);

  // Create style object with dimensions to prevent layout shift
  const imgStyle = {
    transition: isLoaded ? 'opacity 0.3s ease-in-out' : 'none',
    display: 'block'
  };

  // For priority images or when in view, render the actual image
  if (isInView) {
    return (
      <img
        ref={imgRef}
        src={optimizedSrc}
        alt={alt}
        className={`${isLoaded ? 'loaded' : 'loading'} ${className}`}
        onLoad={handleLoad}
        loading={priority ? 'eager' : 'lazy'}
        style={imgStyle}
        {...props}
      />
    );
  }

  // Placeholder for non-priority images not yet in view
  return (
    <div 
      ref={imgRef} 
      className={`lazy-image-placeholder ${className}`}
      style={{
        backgroundColor: '#f0f0f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      {...props}
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
  );
};

export default LazyImage;