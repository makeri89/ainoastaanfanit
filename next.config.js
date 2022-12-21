/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ainoastaanfanit.s3.eu-north-1.amazonaws.com',
      },
    ],
  },
}

module.exports = nextConfig
