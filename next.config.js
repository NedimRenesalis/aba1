/** @type {import('next').NextConfig} */
const nextConfig = {
webpack: (config, { isServer }) => { config.resolve.alias['@'] = path.resolve(__dirname, '.'); return config; },
  
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
