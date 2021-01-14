import getRoutes from "./plugins/getRoutes";



export default {
  target: 'static',
  components: true,
  mode: 'universal',
  build: {},
  
 
  // routes: async () => {
  //   const { $content } = require('@nuxt/content')
  
  //   const pages = await $content('energie')
  //     .only(['path'])
  //     .fetch()
  
  //   return pages.map((p) => p.path)
  // },

  sitemap: {
    hostname: 'https://ikvergelijk.nl', // https://www.yoursite.com  -- process.env.BASE_URL
    // routes: async () => {}
  },

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
    ]
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
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
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
