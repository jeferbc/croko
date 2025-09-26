import { useState, useEffect } from 'react';
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
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

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

  return (
    <Image
      src={optimizedSrc}
      alt={alt}
      className={`${isHydrated && isLoaded ? 'loaded' : 'loading'} ${className}`}
      onLoad={handleLoad}
      priority={priority}
      width={width || 100}
      height={height || 100}
      quality={quality}
      style={imgStyle}
      {...props}
    />
  );
};

export default LazyImage;