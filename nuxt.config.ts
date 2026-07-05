import { defineLocalBusiness } from 'nuxt-schema-org/schema'

import siteMetadata from './app/siteMetadata'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { href: '/favicon.ico', rel: 'icon', sizes: '48x48' },
        { href: '/favicon-32x32.png', rel: 'icon', sizes: '32x32', type: 'image/png' },
        { href: '/favicon-16x16.png', rel: 'icon', sizes: '16x16', type: 'image/png' },
        { href: '/apple-touch-icon.png', rel: 'apple-touch-icon', sizes: '180x180' },
      ],
    },
  },

  compatibilityDate: '2025-10-01',

  css: ['~/assets/css/main.css'],

  devtools: {
    enabled: true,
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  image: {
    domains: ['mokkapps.twic.pics'],
    provider: 'twicpics',
    screens: { '2xl': 1536, 'lg': 1024, 'md': 768, 'sm': 640, 'xl': 1280, 'xs': 320, 'xxl': 1536 },
    twicpics: {
      baseURL: siteMetadata.twicPicsBaseUrl,
    },
  },

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/content',
    '@nuxtjs/seo',
    'nuxt-umami',
  ],

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml', '/robots.txt'],
    },
  },

  runtimeConfig: {
    public: {
      googleMapsApiKey: '',
    },
  },

  schemaOrg: {
    identity: defineLocalBusiness({
      '@type': 'LocalBusiness',
      'address': {
        addressCountry: 'DE',
        addressLocality: siteMetadata.address.locality,
        addressRegion: siteMetadata.address.region,
        postalCode: siteMetadata.address.postalCode,
        streetAddress: siteMetadata.address.street,
      },
      'description': siteMetadata.description,
      'email': siteMetadata.email,
      'location': siteMetadata.locations.map(location => ({
        '@type': 'Place',
        'address': {
          '@type': 'PostalAddress',
          'addressCountry': 'DE',
          'addressLocality': location.locality,
          'addressRegion': location.region,
          'postalCode': location.postalCode,
          'streetAddress': location.street,
        },
        'name': location.name,
      })),
      'logo': `${siteMetadata.twicPicsBaseUrl}/logo.png`,
      'name': siteMetadata.title,
      'sameAs': [siteMetadata.instagramUrl],
      'telephone': siteMetadata.phone,
      'url': siteMetadata.url,
    }),
  },

  site: {
    defaultLocale: 'de',
    description: siteMetadata.description,
    name: siteMetadata.title,
    url: siteMetadata.url,
  },

  umami: {
    domains: ['privatimkerei-hoffmann.de'],
    ignoreLocalhost: true,
    proxy: 'cloak',
  },
})
