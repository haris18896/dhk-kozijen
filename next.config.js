/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {},
  amp: {
    validator: './custom_validator.js'
  },

  i18n: {
    locales: ['en-US', 'fr', 'nl-NL'],
    defaultLocale: 'en-US',
    domains: [
      {
        name: 'en-US',
        domain: 'http://www.localhost:3000',
        defaultLocale: 'en-US'
      },
      {
        name: 'fr',
        domain: 'http://www.localhost:3000',
        defaultLocale: 'fr'
      },
      {
        name: 'nl-NL',
        domain: 'http://www.localhost:3000',
        defaultLocale: 'nl-NL'
      }
    ]
  }
}

module.exports = nextConfig
