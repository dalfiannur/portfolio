/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["*.cloudfront.net"]
  }
}

module.exports = nextConfig
