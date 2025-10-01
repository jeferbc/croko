'use client'
import { Image } from '@imagekit/next';

const URL_ENDPOINT = 'https://ik.imagekit.io/ge17f66b4ma';

/**
 * ImageKit Image Component
 *
 * A wrapper around ImageKit's Next.js Image component with pre-configured settings.
 *
 * @param {Object} props - Component props
 * @param {string} props.src - Image path (relative or absolute)
 * @param {string} props.alt - Alt text for the image
 * @param {number} props.width - Image width
 * @param {number} props.height - Image height
 * @param {Array} props.transformation - ImageKit transformation array (optional)
 * @param {Object} props.queryParameters - Additional query parameters (optional)
 * @param {string} props.loading - Loading strategy: 'lazy' | 'eager' (default: 'lazy')
 * @param {boolean} props.responsive - Enable responsive images (default: true)
 * @param {string} props.transformationPosition - 'query' | 'path' (default: 'query')
 * @param {Object} props.style - Custom styles (optional)
 * @param {string} props.className - CSS class names (optional)
 *
 * @example
 * <IKImage
 *   src="/default-image.jpg"
 *   alt="Description"
 *   width={500}
 *   height={500}
 *   transformation={[{ width: 500, height: 500 }]}
 * />
 */
const IKImage = ({
  src,
  alt,
  width,
  height,
  transformation,
  queryParameters,
  loading = 'lazy',
  responsive = true,
  transformationPosition = 'query',
  style,
  className,
  ...rest
}) => {
  return (
    <Image
      urlEndpoint={URL_ENDPOINT}
      src={src}
      alt={alt}
      width={width}
      height={height}
      transformation={transformation}
      queryParameters={queryParameters}
      loading={loading}
      responsive={responsive}
      transformationPosition={transformationPosition}
      style={style}
      className={className}
      {...rest}
    />
  );
};

export default IKImage;
