
      const { chromium } = require('playwright');

      (async () => {
      const browser = await chromium.launch({ headless: true, slowMo: 250 });
      const context = await browser.newContext();

// // COOKIES accept
// console.log('Ga naar Google.nl en klik op AKKOORD');
// const page = await browser.newPage();
// await page.goto('https://google.nl');
// await page.waitForTimeout(1000);
// await page.keyboard.press('Tab');
// await page.keyboard.press('Tab');
// console.log('7c - 2x TAB op toetsenbord');
// await page.keyboard.press('Enter');
// console.log('Akkoord gelukt');

// //  GOOGLE1
//  const GoogleUrl1= 'https://www.google.nl/search?q=site%3Aessent.nl';
//  const GoogleCount1 = '//div[@id="result-stats"]';
//  await page.goto(GoogleUrl1);
//  const paginaAantal1 = await page.$eval(GoogleCount1, (el) => el.innerText);
//  const paginaAantal1Clean = paginaAantal1.split(" ")[1];
//  console.log(GoogleUrl1);
//  console.log(paginaAantal1Clean);
//  await page.waitForTimeout(1000);


// // COOKIES ACCEPT FB

//  const page2 = await browser.newPage();
//  await page2.goto("https://www.facebook.com/");
//  await page2.click("text=Alles accepteren"); 
//  const FBUrl1 = 'https://www.facebook.com/Essent/';
//  const FBxpath1 = ('//div[contains(text(),"personen")]');
 
//  await page2.goto(FBUrl1);
//  const FBtext1 = await page2.$eval(FBxpath1, (el) => el.innerText);
//  const FB1Clean = FBtext1.split(" ")[0];
//  console.log(FBUrl1);
//  console.log(FB1Clean);
//  await page2.waitForTimeout(1000);


// // Twitter via Foller

// const page3 = await browser.newPage();

//  // FOLLER 1
//  const FOLLERUrl1 = 'https://foller.me/nike';
//  const FOLLERxpath1 = ("//td[contains(text(),'Followers')]  /following-sibling::td");
 
//  await page3.goto(FOLLERUrl1);
//  await page3.waitForTimeout(5000);
//  await page3.waitForSelector('(//div[@class="container"])[3]');
//  const FOLLERtext1 = await page3.$eval(FOLLERxpath1, (el) => el.innerText);
// //  const FOLLER1Clean = FOLLERtext1.split(" ")[0];
//  console.log(FOLLERUrl1);
//  console.log(FOLLERtext1);
//  await page3.waitForTimeout(1000);




// YOUTUBE

// // nee niet inloggen
// const page4 = await browser.newPage();
// await page4.goto("https://www.youtube.com/");
// await page4.click("text=Nee, bedankt"); 



// // YT 1 
// const YTurl1 = 'https://www.youtube.com/user/Gaslichtcom';
// const YTxpath1 = ('  //yt-formatted-string [@id="subscriber-count"]   ');

// await page4.goto(YTurl1);
// const YTtext1 = await page4.$eval(YTxpath1, (el) => el.innerText);
// console.log(YTurl1);
// console.log(YTtext1);
//  await page3.waitForTimeout(1000);






// // INTSTA 2 
// const page6 = await browser.newPage();
// const InstaUrlAgain1 = ('https://socialstats.info/report/essentenergie/instagram');
// const InstaXpathAgain1 = ('(//p[@class="report-header-number"])[1]'); 

// await page6.goto(InstaUrlAgain1, {waitUntil: 'networkidle'});
// const InstaFollowAgain1 = await page6.$eval(InstaXpathAgain1, (el) => el.innerText);
// let NewInstaFollowAgain1 = await InstaFollowAgain1.replace(/,/g, '.');
// console.log(InstaUrlAgain1);
// console.log(NewInstaFollowAgain1);
//  await page3.waitForTimeout(1000);


// KLANTENVERTELLEN
// const page7 = await browser.newPage();

// const KVurl1 = ('https://www.klantenvertellen.nl/reviews/1038383/essent');
// const KVxpath1 = ('//div[@class="overall-rating"]//span[@class="rating"]  ');

// await page7.goto(KVurl1, {waitUntil: 'networkidle'});
// const KVbeoordeling1 = await page7.$eval(KVxpath1, (el) => el.innerText);
// console.log(KVurl1);
// console.log(KVbeoordeling1);
// await page3.waitForTimeout(1000);


// Alexa 
const page8 = await browser.newPage();

// Alexa Traffic Worldwide
const AlexUrl1 = 'https://www.alexa.com/siteinfo/essent.nl';
const AlexXpath1 = ('//p[@class="big data"]');

await page8.goto(AlexUrl1, {waitUntil: 'networkidle'});
const Alexvalue1 = await page8.$eval(AlexXpath1, (el) => el.innerText);
const Alexvalue1clean = Alexvalue1.replace(/#/, '').trim();

console.log(AlexUrl1);
console.log(Alexvalue1clean);
await page8.waitForTimeout(1000);




 await browser.close()
})()


