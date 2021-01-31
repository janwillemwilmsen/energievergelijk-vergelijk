// Test of servericeworker wel werkt:
  console.log('serviceworker werkt 👊');

  // install event
  self.addEventListener('install', evt => {
    console.log('service worker geinstalleerd 😎');
  });
  
  // activate event
  self.addEventListener('activate', evt => {
    console.log('service worker geactiveerd 🥇 🚀 🚀 🚀 🏁🏁🏁🏁');
  });
  
  // fetch event
  self.addEventListener('fetch', evt => {
    // console.log('fetch event', evt);
    console.log("😊 🎁 😊 🅸🅺🆅🅴🆁🅶🅴🅻🅸🅹🅺 🎁 😊 🎁 ");
    // console.log("😊 🎁 😊 🅸🅺🆅🅴🆁🅶🅴🅻🅸🅹🅺 🎁 😊 🎁 ","background-color:#c0282d;text-align:center;font-weight: bold padding:0px;color:#fdf7f7;");

  });



