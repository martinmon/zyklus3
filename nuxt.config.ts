// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ['vuetify']
  },

  components: true,

  css: [
    'vuetify/styles'
  ],

  modules: ['nuxt-icons'],

  vite: {
    define: {
      'process.env.DEBUG': false
    }
  }
})
