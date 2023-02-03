/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/api/auth/callback',
        destination: '/',
        permanent: true,
      },
      {
        source: '/api/auth/logout',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
