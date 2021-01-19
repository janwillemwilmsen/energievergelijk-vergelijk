import getSiteMeta from "./plugins/getSiteMeta";

const meta = getSiteMeta();


import getRoutes from "./plugins/getRoutes";

export default {
  target: 'static',
  components: true,
  // mode: 'universal',
  build: {},
  
 
  // routes: async () => {
  //   const { $content } = require('@nuxt/content')
  
  //   const pages = await $content('energie')
  //     .only(['path'])
  //     .fetch()
  
  //   return pages.map((p) => p.path)
  // },

  

  // Dan werkt Sitemap niet meer.
  // content: {
  //   dir: 'energie' // read content from my-content/
  // },
  


  /*
  ** Headers of the page
  */
  




    head: {
      htmlAttrs: { lang: "en-GB" },
      title: "My Amazing Blog on The Joy of Painting",
      meta: [
        ...meta,
        { charset: "utf-8" },
        { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
        { name: 'theme-color', content: "#9B242C"},
        { name: "HandheldFriendly", content: "True" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { property: "og:site_name", content: "Bob Ross" },
        { property: "og:image:width", content: "740" },
        { property: "og:image:height", content: "300" },
        { name: "twitter:site", content: "@bobross" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        // { hid: "canonical", rel: "canonical", href: process.env.BASE_URL },
      ],



    script: [
     
      // { defer: true, async: true, crossorigin: 'anonymous', src:"https://carrier.formcarry.com/js/v1.js", type: "module"},
      { defer: true, async: true, crossorigin: 'anonymous', src:"https://cdn.jsdelivr.net/npm/@pwabuilder/pwainstall@1.6.3/dist/pwa-install.js", type: "module"},
      // { defer: true, async: true, crossorigin: 'anonymous', src:"https://s.pageclip.co/v1/pageclip.js", type: "module"},
    ],

  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],

  

// PWA Manifest False werkt niet. Er wordt toch een manifest met Dynamische filename gebuild.
// in de static map staat manifest.jww.json - die is gekoppeld aan het 'Install PWA' script in ThePWA.vue


  pwa: {
    // manifest: false,
    workbox: {
      /* workbox options */
      workboxExtensions: ['plugins/import-custom-sw.client.js'], 
         },
    manifest: {
      name: 'energievergelijk-vergelijk',
      start_url: '/?standalone=true',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#9B242C',
      lang: 'nl',
      // useWebmanifestExtension: true,
      // publicPath: '/',
    },
   
  },


  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // '~plugins/kwesforms.js'
    '~plugins/lottie.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@/modules/sitemapRouteGenerator',
    '@nuxtjs/pwa',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxt/content',
    '@nuxtjs/sitemap',
    'vue-social-sharing/nuxt'
    
  ],
  
  
  router: {
    scrollBehavior: async (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition
      }

      const findEl = async (hash, x) => {
        return document.querySelector(hash) ||
          new Promise((resolve, reject) => {
            if (x > 50) {
              return resolve()
            }
            setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 100)
          })
      }

      if (to.hash) {
        let el = await findEl(to.hash)
        if ('scrollBehavior' in document.documentElement.style) {
          return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
        } else {
          return window.scrollTo(0, el.offsetTop)
        }
      }

      return { x: 0, y: 0 }
    }
  },
      
    
   

  sitemap: {
    hostname: 'https://ikvergelijk.nl', // https://www.yoursite.com  -- process.env.BASE_URL
    // routes: async () => {}
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}



 