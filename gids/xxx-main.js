// Bron. Maar heb andere doorgekopieerd. 

const { chromium } = require('playwright');
const { SearchPage } = require('./models/Search');
const { AlexaPage } = require('./models/Alexa');
const { KlantenvertellenPage } = require('./models/klantenvertellen');
const { YoutubePage } = require('./models/Youtube');
const { InstagramPage } = require('./models/Instagram');
const { TwitterPage } = require('./models/Twitter');
const { FacebookPage } = require('./models/Facebook');
const { GooglePage } = require('./models/Google');




(async () => {
    const browser = await chromium.launch({ headless: true, slowMo: 250 });
    const context = await browser.newContext();
    
    const AlexUrl20 = 'https://www.alexa.com/siteinfo/ns.nl';
    const klantenvertellenUrl30 = 'https://www.klantenvertellen.nl/reviews/1038383/essent';
    const youtubeUrl40 = 'https://www.youtube.com/user/Gaslichtcom';
    const instagramUrl50 = 'https://socialstats.info/report/essentenergie/instagram';
    const twitterUrl60 = 'https://foller.me/nike';
    const facebookUrl70 = 'https://www.facebook.com/Essent/';
    const GoogleUrl80= 'https://www.google.nl/search?q=site%3Aessent.nl';
    





// BING SEARCH
console.log('BING START');
const page10 = await browser.newPage();
const bingUrl10 = 'https://bing.com';
await page10.goto(bingUrl10, {waitUntil: 'networkidle'});
const searchPage = new SearchPage(page10);
await searchPage.search('ns');
// await searchPage.navigate();
console.log('BING END');


// ALEXA 
console.log('ALEXA START');
const page20 = await browser.newPage();
await page20.goto(AlexUrl20, {waitUntil: 'networkidle'});
const AlexaPage10 = new AlexaPage(page20);
await AlexaPage10.scrapeAlexa();
console.log('ALEXA END');

//  KlantenvertellenPage
console.log('KLANTENVERTELLEN START');
const page30 = await browser.newPage();
await page30.goto(klantenvertellenUrl30, {waitUntil: 'networkidle'});
const KlantenvertellenPage30 = new KlantenvertellenPage(page30);
await KlantenvertellenPage30.scrapeKlantenvertellen();
console.log('KLANTENVERTELLEN END');


// YoutubePage
console.log('YOUTUBE START');

// nee niet inloggen
const page40 = await browser.newPage();

await page40.goto("https://www.youtube.com/");
await page40.click("text=Nee, bedankt"); 

await page40.goto(youtubeUrl40, {waitUntil: 'networkidle'});
const youtubePage40 = new YoutubePage(page40);
await youtubePage40.scrapeYoutube();
console.log('YOUTUBE END');



console.log('INSTAGRAM START');
const page50 = await browser.newPage();
await page50.goto(instagramUrl50, {waitUntil: 'networkidle'});
const instagramPage50 = new InstagramPage(page50);
await instagramPage50.scrapeInstagram();
console.log('INSTAGRAM END');




console.log('TWITTER START');

const page60 = await browser.newPage();
await page60.goto(twitterUrl60, {waitUntil: 'networkidle'});
const twitterPage60 = new TwitterPage(page60);
await twitterPage60.scrapeTwitter();

console.log('TWITTER END');




console.log('FACEBOOK START');
const page70 = await browser.newPage();
await page70.goto("https://www.facebook.com/");
await page70.click("text=Alles accepteren"); 
await page70.goto(facebookUrl70, {waitUntil: 'networkidle'});
const facebookPage70 = new FacebookPage(page70);
await facebookPage70.scrapeFacebook();
console.log('FACEBOOK END');



console.log('GOOGLE START');

console.log('Ga naar Google.nl en klik op AKKOORD');
const page80 = await browser.newPage();
await page80.goto('https://google.nl');
await page80.waitForTimeout(1000);
await page80.keyboard.press('Tab');
await page80.keyboard.press('Tab');
console.log('7c - 2x TAB op toetsenbord');
await page80.keyboard.press('Enter');
console.log('Akkoord gelukt');

//  GOOGLE1
await page80.goto(GoogleUrl80, {waitUntil: 'networkidle'});
const googlePage80 = new GooglePage(page80);
await googlePage80.scrapeGoogle();

console.log('GOOGLE END');







await browser.close()
})()


