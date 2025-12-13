const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require("next/constants");

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== "1";
  const isStaging = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === "1";

  const env = {
    API_PROD_URL: (() => {
      if (isDev) return "http://localhost:3000/api/";
      if (isProd) {
        // Note: The code below needs to be uncommented, and you should use your domain where your API is hosted.
        // return 'Enter Your URL here'
      }
      if (isStaging) return "http://localhost:3000/api/";
      return "RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)";
    })(),
    API_BASE_URL: "http://localhost:3000/api",
  };

  return {
    env,
    // Optimize CSS loading
    compiler: {
      removeConsole: isProd,
    },
    // Compress output
    compress: true,
    // Production optimizations
    productionBrowserSourceMaps: false,
    // Optimize CSS chunking and inline critical CSS
    experimental: {
      optimizeCss: {
        inlineFontCss: true,
        critters: {
          preload: 'swap',
          pruneSource: false, // Changed to false to prevent removing Font Awesome and other icon CSS
        },
      },
    },
    // Redirects for SEO-friendly URL changes
    async redirects() {
      return [
        {
          source: '/kit',
          destination: '/kit-pinta-barriguitas',
          permanent: true, // 301 redirect
        },
      ];
    },
  };
};