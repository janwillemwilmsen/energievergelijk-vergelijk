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
      htmlAttrs: { lang: "nl_NL" },
      title: "Vergelijk energievergelijkers op ikvergelijk.nl!",
      meta: [
        ...meta,
        { charset: "utf-8" },
        { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
        { name: 'theme-color', content: "#9B242C"},
        { name: "HandheldFriendly", content: "True" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { property: "og:site_name", content: "Piet" },
        { property: "og:image:width", content: "740" },
        { property: "og:image:height", content: "300" },
        { name: "twitter:site", content: "" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        // { hid: "canonical", rel: "canonical", href: process.env.BASE_URL },
      ],



    script: [
      { defer: true, async: true, crossorigin: 'anonymous', src:"https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js", type: "module"},

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


  plugins: [
    // '~plugins/kwesforms.js'
    // {src: '~plugins/gtm.js',  mode: 'client'},
    '~plugins/lottie.js',
    // '~plugins/marquee-text-component.js',
  ],
   
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@/modules/sitemapRouteGenerator',
    '@nuxtjs/pwa',
  ],
  
  modules: [
    '@nuxtjs/gtm',
    '@nuxt/content',
    '@nuxt/http',
    '@nuxtjs/sitemap',
    'vue-social-sharing/nuxt',
    'nuxt-cookie-control',

    
  ],
  // gtm: {
  //   id: 'GTM-PM4DL28'
  // },

// // DISABLED omdat er een script is in de Plugins folder. 
// gtm: { enabled: true, autoInit: false },

   gtm: {
    enabled: true, /* see below */
    autoInit: false,
    debug: true,
    id: 'GTM-PM4DL28',
    layer: 'dataLayer',
    pageTracking: true,
    pageViewEventName: 'nuxtRoute',
    respectDoNotTrack: true,
    scriptId: 'gtm-script',
    scriptDefer: false,
    scriptURL: 'https://www.googletagmanager.com/gtm.js',
    // variables: {},
    // crossOrigin: false,
    // noscript: false,
    // noscriptId: 'gtm-noscript',
    // noscriptURL: 'https://www.googletagmanager.com/ns.html'
  },
  


  cookies: {
    barPosition: 'top-full',
    text: {
      barTitle: 'Koekjes',
      barDescription: 'We use our own cookies and third-party cookies so that we can show you this website and better understand how you use it, with a view to improving the services we offer. If you continue browsing, we consider that you have accepted the cookies.',
      acceptAll: 'Toestaan',
      declineAll: 'Blokkeer',
      manageCookies: 'Cookieinstellingen',
      unsaved: 'Je hebt niet opgeslagen instellingen',
      close: 'Sluit',
      save: 'Opslaan',
      necessary: 'Noodzakelijke cookies',
      optional: 'Optionele cookies',
      functional: 'Functionele cookies',
      blockedIframe: 'Om dit te zien moet je functionele cookies accepteren.',
      here: 'hier'
    },
    colors: {
      barTextColor: '#fff',
      barButtonBackground: '#fff',
      barBackground: '#000',
      barButtonColor: '#000',
      barButtonHoverColor: '#fff',
      barButtonHoverBackground: '#333',
      // barPosition: center,

      modalOverlay: '#000',
      modalTextColor: '#000',
      modalBackground: '#fff',
      modalOverlayOpacity: 0.8,
      modalButtonColor: '#fff',
      modalUnsavedColor: '#fff',
      modalButtonHoverColor: '#fff',
      modalButtonBackground: '#000',
      modalButtonHoverBackground: '#333',
     
      controlButtonBackground: "#12957b",
      controlButtonHoverBackground: "#2e495e",
      controlButtonIconHoverColor: "#fff",
      controlButtonIconColor: "#fff",
     
      checkboxActiveBackground: "#2e495e",
      checkboxInactiveBackground: "#ede1e1",
      checkboxActiveCircleBackground: "#00c58e",
      checkboxInactiveCircleBackground: "#f44336",
      checkboxDisabledBackground: "#ddd",
      checkboxDisabledCircleBackground: "#fff"
    },


    necessary: [
      {
        name:  'Noodzakelijke cookies',
        description:  'Gebruikt om de cookiepermissie te onthouden.',
        cookies: ['cookie_control_consent', 'cookie_control_enabled_cookies']
      }
    ],
    optional: [
      {
        name:  'Google Tagmanager',
        identifier: 'ga',
        description:  'Met Google Tagmanager beheren wij onze verschillende meetpixels. Waaronder Google Analytics en Clarity van Microsoft.',
        initialState: true,
        src:  'https://www.googletagmanager.com/gtm.js?id=GTM-PM4DL28',
        async:  true,
        cookies: ['_ga', '_gat', '_gid'],
       

        // AANGEPAST : https://gitlab.com/broj42/nuxt-cookie-control/-/issues/39
        accepted: () => window.$nuxt.$gtm.init('GTM-PM4DL28'),
       
        // orgineel. uit docs:  
        // accepted: () =>{
        //   window.dataLayer = window.dataLayer || [];
        //   window.dataLayer.push({
        //     'gtm.start': new Date().getTime(),
        //     event: 'gtm.js'
        //   });
        // },

        // accepted: () => {
        //   window.dataLayer = window.dataLayer || [];
        //   function gtag() {
        //     dataLayer.push(arguments);
        //   }
        //   gtag("js", new Date());
        //   gtag("config", "GTM-PM4DL28");
        // },




      declined: () =>{
// decline start - om aantal gedeclined mensen te meten

window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}

gtag("consent", "default", {
    ad_storage: "denied",
    analytics_storage: "denied",
    wait_for_update: 500,
});
gtag("set", "ads_data_redaction", true);

// decline end
        }
      }
    ]
  },
  




  
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

      
    
  // Sitemap : werkt mogelijk niet op localhost bij NPM RUN DEV. Wel bij NPM RUN BUILD en NPM RUN START

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



 