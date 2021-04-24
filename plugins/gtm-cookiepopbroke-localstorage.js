import Vue from 'vue'
// import vueAnalytics from 'vue-analytics'
// import VueGtm from 'vue-gtm';

//  MISSCHIEN DEES?
// https://github.com/grrr-amsterdam/cookie-consent


// https://www.youtube.com/watch?v=yFSSgHj9C-0 
// COMMENT  :The page-reload after 'accepting cookies' is strange. Who is going to reload the page/website after accepting/declining cookies?  Is there a way to create this consent functionality without 'reload'?


const getGDPR = localStorage.getItem('GDPR:accepted')

export default function({ $gtm, route }) {
if (typeof getGDPR !== 'undefined' && getGDPR === 'true') {
// Vue.use(vueAnalytics, {
  //   id: 'UA-91239129-1',
  //   disabled: false,
  //   debug: {
  //     enabled: true,
  //     trace: true,
  //     sendHitTask: true
  //   }
  // })

//   Vue.use(VueGtm, {
//     id: 'GTM-PM4DL28'
// });

// Vue.use(gtm, {
//   enabled: true, /* see below */
//   autoInit: true,
//   debug: true,

//   id: 'GTM-PM4DL28',
//   layer: 'dataLayer',
//   // variables: {},

//   pageTracking: true,
//   pageViewEventName: 'nuxtRoute',
//   respectDoNotTrack: true,

//   scriptId: 'gtm-script',
//   scriptDefer: false,
//   scriptURL: 'https://www.googletagmanager.com/gtm.js',
//   // crossOrigin: false,

//   // noscript: false,
//   // noscriptId: 'gtm-noscript',
//   // noscriptURL: 'https://www.googletagmanager.com/ns.html'
// })


  $gtm.init('GTM-PM4DL28')


} else if (typeof getGDPR !== 'undefined' && getGDPR === 'false') {
  // Vue.use(vueAnalytics, {
  //   id: 'UA-91239129-1',
  //   disabled: true,
  //   debug: {
  //     enabled: true,
  //     trace: true,
  //     sendHitTask: true
  //   }
  // })

//   Vue.use(VueGtm, {
//     id: 'GTM-PM4DL28'
// });

// Vue.use(gtm, {
//   enabled: true, /* see below */
//   autoInit: true,
//   debug: true,

//   id: 'GTM-PM4DL28',
//   layer: 'dataLayer',
//   // variables: {},

//   pageTracking: true,
//   pageViewEventName: 'nuxtRoute',
//   respectDoNotTrack: true,

//   scriptId: 'gtm-script',
//   scriptDefer: false,
//   scriptURL: 'https://www.googletagmanager.com/gtm.js',
//   // crossOrigin: false,

//   // noscript: false,
//   // noscriptId: 'gtm-noscript',
//   // noscriptURL: 'https://www.googletagmanager.com/ns.html'
// })

console.log("not initing...");

}

}