/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer, dev, webpack }) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      tls: false
    }

    config.externals.push(
      'pino-pretty',
      'lokijs',
      'encoding'
    )

    return config
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/events/top',
        permanent: false,
      },
    ]
  },
future: { webpack5: true }
}

future: { webpack5: true }

module.exports = nextConfig

future: { webpack5: true }
