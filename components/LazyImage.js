import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const LazyImage = ({
  src,
  alt = '',
  className = '',
  autoWebP = true,
  priority = false,
  width,
  height,
  responsive = true,
  quality = 80,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority); // If priority, load immediately
  const [isHydrated, setIsHydrated] = useState(false);
  const imgRef = useRef();

  // Handle hydration
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    // Skip intersection observer for priority images or during SSR
    if (priority || !isHydrated) {
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
  }, [priority, isHydrated]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Function to add optimizations including WebP and responsive sizing
  const getOptimizedSrc = (originalSrc) => {
    if (!originalSrc) return originalSrc;

    // Handle relative paths for Next.js Image component
    if (originalSrc.startsWith('../') || originalSrc.startsWith('./')) {
      // Convert relative path to absolute path
      return originalSrc.replace(/^\.\.?\//, '/');
    }

    // Check if it's an ImageKit URL
    if (originalSrc.includes('ik.imagekit.io')) {
      const separator = originalSrc.includes('?') ? '&' : '?';
      let transformations = [];

      // Add WebP format transformation
      if (autoWebP) {
        transformations.push('f-webp');
      }

      // Add quality
      transformations.push(`q-${quality}`);

      // Add responsive sizing if width/height provided
      if (responsive && (width || height)) {
        if (width && height) {
          transformations.push(`w-${width}`, `h-${height}`, 'c-maintain_ratio');
        } else if (width) {
          transformations.push(`w-${width}`);
        } else if (height) {
          transformations.push(`h-${height}`);
        }
      }

      if (transformations.length > 0) {
        return `${originalSrc}${separator}tr=${transformations.join(',')}`;
      }
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
      <Image
        ref={imgRef}
        src={optimizedSrc}
        alt={alt}
        className={`${isLoaded ? 'loaded' : 'loading'} ${className}`}
        onLoad={handleLoad}
        priority={priority}
        width={width}
        height={height}
        quality={quality}
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