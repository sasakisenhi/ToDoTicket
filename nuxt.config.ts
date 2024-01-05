// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/style.css'],
  app: {
    head:{
      title: 'TODOTICKET',
      meta: [{ name: 'description', content: 'Nuxt 3 for beginners' }],
      link:[{rel: 'icon', href:'/logo.png'}],
    },
  },
});
