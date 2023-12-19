/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ["lh3.googleusercontent.com", "firebasestorage.googleapis.com"],
    unoptimized: true,
  },
};

module.exports = nextConfig;