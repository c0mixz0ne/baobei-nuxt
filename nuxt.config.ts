// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['@/assets/css/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/_mixins.scss" as *;' // Mixins
        }
      }
    }
  },
  modules: [
    'vue-yandex-maps/nuxt',
    '@pinia/nuxt',
    '@/modules/sitemap'
  ],
  yandexMaps: {
    apikey: process.env.VITE_YMAPKEY,
  },
  runtimeConfig: {
    public: {
      ymapkey: process.env.VITE_YMAPKEY,
      apitoken: process.env.VITE_ALFACRM_TOKEN
    }
  },
  sitemap: {
    hostname: 'https://baobei-online.ru',
  },
  nitro: {
    routeRules: {
      '/_nuxt/**': { headers: { 'Cache-Control': 'public, max-age=31536000' } },
      '/images/**': { headers: { 'Cache-Control': 'public, max-age=31536000' } },
      '/fonts/**': { headers: { 'Cache-Control': 'public, max-age=31536000' } },
    }
  }
})
