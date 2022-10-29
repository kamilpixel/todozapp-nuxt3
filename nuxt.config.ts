// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head : {
      title: 'Todo App in Nuxt3',
      link: [
        {
          href: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.2/css/bootstrap.min.css',
          rel: 'stylesheet',
        },
        {
          href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
          rel: 'stylesheet',
        },
        {
          href: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.9.1/font/bootstrap-icons.min.css',
          rel: 'stylesheet',
        }
      ],
      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.2/js/bootstrap.min.js', }
      ]
    }
  },
  modules: [
    '@pinia/nuxt',
  ],
  ssr: false,
  imports: {
    autoImport: false
  },
  target: 'static',
})
