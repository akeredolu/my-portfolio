/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // disables Image Optimization API for static export
  },
  output: 'export', // required for static export
};
module.exports = nextConfig;
