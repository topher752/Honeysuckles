/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
