export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' }]
    }
  },
  css: ['~/assets/style.scss'],
  modules: ['@nuxtjs/tailwindcss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/validate.scss" as *;' 
        }
      }
    }
  }
})
