export default defineNuxtConfig({
  // app: {
  //   head: {
  //     link: [{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' }]
  //   },
  //   layoutTransition: { name: 'layout', mode: 'out-in' }
  // },
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  css: ['~/assets/style.scss'],
  modules: ['@nuxtjs/tailwindcss', "@nuxt/eslint"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/validate.scss" as *;',
        },
      },
    },
  },
  extends: ['./custom'],
  typescript: {
    // 开发阶段启动类型检查
    typeCheck: true,
    strict: false
  }
})