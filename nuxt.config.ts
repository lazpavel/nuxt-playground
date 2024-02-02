// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: 'awsAmplify',
  },
  routeRules: {
    // all routes (by default) will be revalidated every 60 seconds, in the background
    '/isr/**': { isr: 60 },
    // this page will be generated on demand and then cached permanently
    '/static': { isr: true },
    // this page is statically generated at build time and cached permanently
    '/pre-rendered': { prerender: true },
    // this page will be always fresh
    '/dynamic': { isr: false },
  },
})
