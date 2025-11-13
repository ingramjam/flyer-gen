/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/flyer-gen' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/flyer-gen/' : '',
};

export default nextConfig;