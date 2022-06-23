import { defineNuxtConfig } from 'nuxt'
import { Static } from 'vue'

const lifecycle = process.env.npm_lifecycle_event

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  target: 'static',
  // meta
  meta: {
    title: 'Element Plus + Nuxt 3',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'ElementPlus + Nuxt3',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  nitro: {
    prerender: {
      routes: ['/hi/{id}', '/user']
    }
  },
  css: [
    '~/assets/scss/index.scss',
    '~/assets/sass/main.css',
    '~/assets/sass/main.scss'
  ],

  // build
  build: {
    transpile:
      lifecycle === 'build' || lifecycle === 'generate' ? ['element-plus'] : [],
  },

  typescript: {
    strict: true,
    shim: false,
  },

  // build modules
  modules: [
    '@vueuse/nuxt', 
    '@unocss/nuxt', 
    '@pinia/nuxt'
  ],
  components: true,
  vueuse: {
    ssrHandlers: true,
  },
  unocss: {
    uno: true,
    attributify: true,
    // preflight: true,
    icons: {
      scale: 1.2,
    },
    shortcuts: [
      [
        'btn',
        'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
      ],
    ],
  },
})
