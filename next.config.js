/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: "standalone",
  images: {
    domains: [
      "web.nepalnews.com",
      "www.investopaper.com",
      "storage.googleapis.com",
    ],
  },
};

module.exports = nextConfig;
