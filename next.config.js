/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { remotePatterns: [{ protocol: "images.unsplash.com", hostname: "images.unsplash.com" }] }
};
module.exports = nextConfig;
