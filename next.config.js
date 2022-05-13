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
        domain: 'localhost:3000/en-US',
        defaultLocale: 'en-US'
      },
      {
        domain: 'localhost:3000/nl-NL',
        defaultLocale: 'nl-NL'
      },
      {
        domain: 'localhost:3000/fr',
        defaultLocale: 'fr',
        http: true
      }
    ]
  }
}

module.exports = nextConfig
