// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false },
  experimental: {
    asyncContext: true,
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@nuxt/image', '@nuxtjs/i18n', 'nuxt-delay-hydration', '@nuxtjs/robots', '@nuxtjs/sitemap',
    ],
    
  i18n: {
    locales: [
      {
        code: 'uz',
        file: 'uz.json',
      },
      {
        code: 'ru',
        file: 'ru.json',
      },
      {
        code: 'en',
        file: 'en.json',
      },
    ],
    defaultLocale: 'ru',
    skipSettingLocaleOnNavigate: true,
    langDir: './locales',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },
  sitemap: {
    i18n: true,
    url: 'https://keshmed.uz',
    exclude: ['/admin', '/admin/*', '/login'],
    sources: [
      '/api/__sitemap__/urls',
    ]
  },
  robots: {
    UserAgent: '*',
    Allow: '/*',
    Disallow: '/admin/*',
  },
  delayHydration: {
    // enables nuxt-delay-hydration in dev mode for testing
    debug: process.env.NODE_ENV === 'development',
    mode: 'mount'
  },
  components: true,
  sourcemap: {
    client: true,
    server: false
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru'
      },
      title: 'Кеш Мед | Медицинское Оборудование в Узбекистане',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [ 
        { name:'title', content:'Медицинское Оборудование в Узбекистане'},
        { name:'description', content:'"Современное и надежное медицинское оборудование в Узбекистане. Диагностика, лечение, реабилитация — мы предоставляем передовые решения для вашей клиники. Партнеры лучших мировых производителей обеспечивают качество и эффективность. Получите консультацию и поддержку от наших экспертов. Обеспечьте вашу клинику современным оборудованием для заботы о здоровье пациентов.' },
        { name:'keywords', content:'Медицинское Оборудование в Узбекистане, медицинское оборудование, медицинское оборудование в кашкадарйе, медицинское оборудование в азии, медицинское, оборудование, tibbiy uskunalar, o\'zbekistondagi tibbiy uskunalar, tibbiy, uskunalar, osiyodagi tibbiy uskunalar, qashqadaryo tibbiy uskunalar, Medical Equipment in Uzbekistan, medical equipment, medical equipment in Kashkadarya, medical equipment in Asia, medical equipment' },
        { name: "author", content: "Кеш Мед" },
        { name: 'og:title', content: "Кеш Мед | Медицинское Оборудование в Узбекистане" }
      ],
      link: [
        { rel: 'canonical', href: 'https://keshmed.uz/' },
        { rel: 'icon', type: 'image/x-icon', href: '/logo-ico.ico' }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "KeshMed",
            "url": "https://keshmed.uz/",
            "description": "Современное и надежное медицинское оборудование в Узбекистане. Диагностика, лечение, реабилитация — мы предоставляем передовые решения для вашей клиники. Партнеры лучших мировых производителей обеспечивают качество и эффективность. Получите консультацию и поддержку от наших экспертов. Обеспечьте вашу клинику современным оборудованием для заботы о здоровье пациентов.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Кашкадарья",
              "addressLocality": "Кашкадарья",
              "addressRegion": "Кашкадарья",
              "postalCode": "181307",
              "addressCountry": "Узбекистан"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+998908893700",
              "contactType": "customer service"
            }
          })
        }
      ],
    },
  },
  runtimeConfig: {
    public: {
      backUrl: process.env.NUXT_SERVER_URL
    },
  },
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  }
})