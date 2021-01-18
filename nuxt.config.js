


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
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
    manifest: false,
    workbox: {
      /* workbox options */
      workboxExtensions: ['plugins/import-custom-sw.client.js'], 
         }
    // manifest: {
    //   name: 'My Awesome App',
    //   lang: 'nl',
    //   useWebmanifestExtension: true,
    //   publicPath: 'routerBase',
    // },
   
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
    '@nuxtjs/sitemap'
    
  ],


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
