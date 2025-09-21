const withImages = require('next-images')

module.exports = withImages({
  sassOptions: {
    includePaths: ['./styles'],
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ['ik.imagekit.io'],
    loader: 'default',
    path: '/_next/image/',
  },
  
  // Asset optimization
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  
  webpack: (config, { isServer, dev }) => {
    // Production optimizations
    if (!dev) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          commons: {
            name: 'commons',
            chunks: 'all',
            minChunks: 2,
            priority: 0
          },
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /node_modules/,
            priority: 1
          }
        }
      }
    }
    
    if (isServer) {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
            name: '[name].[ext]'
          }
        }
      })
    }
    
    return config
  },
  
  // Headers for caching and performance
  async headers() {
    return [
      {
        source: '/assets/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ]
  }
})