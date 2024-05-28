/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer, dev, webpack }) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      tls: false
    }

module.exports = {
webpack5: false,
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

}

module.exports = nextConfig

module.exports = {
webpack5: false,
}
