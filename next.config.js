/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.images.unsplash.com"],
  },
};

module.exports = nextConfig;
