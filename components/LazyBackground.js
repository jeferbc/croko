import { useState, useRef, useEffect } from 'react';

const LazyBackground = ({ 
  backgroundImage, 
  children, 
  className = '',
  placeholder = '',
  autoWebP = true,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const divRef = useRef();

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
        rootMargin: '100px' // Start loading earlier for backgrounds
      }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => observer.disconnect();
  }, []);

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

  const optimizedBackgroundImage = getOptimizedSrc(backgroundImage);

  useEffect(() => {
    if (isInView && optimizedBackgroundImage) {
      const img = new Image();
      img.onload = () => setIsLoaded(true);
      img.onerror = () => console.error(`Failed to load background: ${optimizedBackgroundImage}`);
      img.src = optimizedBackgroundImage;
    }
  }, [isInView, optimizedBackgroundImage]);

  const backgroundStyle = {
    backgroundImage: isLoaded ? `url(${optimizedBackgroundImage})` : placeholder ? `url(${placeholder})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    transition: 'all 0.3s ease-in-out',
    filter: isLoaded ? 'none' : 'blur(5px)',
    transform: isLoaded ? 'scale(1)' : 'scale(1.1)'
  };

  return (
    <div 
      ref={divRef}
      className={`lazy-background ${isLoaded ? 'loaded' : 'loading'} ${className}`}
      style={backgroundStyle}
      {...props}
    >
      {!isLoaded && (
        <div className="lazy-background-placeholder">
          <div className="lazy-spinner"></div>
        </div>
      )}
      {children}
    </div>
  );
};

export default LazyBackground;