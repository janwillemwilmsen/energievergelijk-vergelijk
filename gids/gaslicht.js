// haal array op uit :  google-api-output.json
// plak main.js script en schrijf alles weg naar essent.md in de 'content/gids' folder.

config = require('./google-api-output.json');
var appRoot = require('app-root-path');
const fs = require('fs');
const { chromium } = require('playwright');
const { SearchPage } = require('./models/Search');
const { AlexaPage, AlexaCleanerValue } = require('./models/Alexa');
// const { KlantenvertellenPage } = require('./models/klantenvertellen');
const { YoutubePage } = require('./models/Youtube');
const { InstagramPage } = require('./models/Instagram');
const { TwitterPage } = require('./models/Twitter');
const { FacebookPage } = require('./models/Facebook');
const { GooglePage } = require('./models/Google');



// const Product = (0.config);
const bedrijf                   = config[1];
const bedrijfsnaam              = config[1].naam;    
const bedrijfswebsite           = config[1].www;    
const bedrijfstitle             = config[1].title;    
const bedrijfsafbeelding        = config[1].image;    
const bedrijfsparagraaf1        = config[1].paragraaf;    
const bedrijfsveld1             = config[1].freeformat1;    
const bedrijfsveld2             = config[1].freeformat2;    
const bedrijfsveld3             = config[1].freeformat3;    
const bedrijfsveld4             = config[1].freeformat4;    
const bedrijfsgoogle            = config[1].google;    
const bedrijfsfacebook          = config[1].facebook;    
const bedrijfstwitter           = config[1].twitter;    
const bedrijfsyoutube           = config[1].youtube;    
const bedrijfsinstagram         = config[1].instagram;    
const bedrijfstrustpilot        = config[1].trustpilot;    
const bedrijfsklachtnl          = config[1].klachtnl;    
const bedrijfsalexa             = config[1].alexa;    
const bedrijfsklantenvertellen  = config[1].klantenvertellen;    
const bedrijfsinsta2            = config[1].instragram2;    
const bedrijfsyout2             = config[1].youtube2;    
const bedrijfsface2             = config[1].facebook2;    
const bedrijfstwit2             = config[1].twitter2;    


console.log(bedrijf);
console.log(bedrijfsnaam);
console.log(bedrijfswebsite);
console.log(bedrijfstitle);
console.log(bedrijfsafbeelding);
console.log(bedrijfsparagraaf1);
console.log(bedrijfsveld1);
console.log(bedrijfsveld2);
console.log(bedrijfsveld3);
console.log(bedrijfsveld4);
console.log(bedrijfsgoogle);
console.log(bedrijfsfacebook);
console.log(bedrijfstwitter);
console.log(bedrijfsyoutube);
console.log(bedrijfsinstagram);
console.log(bedrijfstrustpilot);
console.log(bedrijfsklachtnl);
console.log(bedrijfsalexa);
console.log(bedrijfsklantenvertellen);
console.log(bedrijfsinsta2);
console.log(bedrijfsyout2);
console.log(bedrijfsface2);
console.log(bedrijfstwit2);


(async () => {
    const browser = await chromium.launch({ headless: true, slowMo: 250 });
    const context = await browser.newContext();
    
    const AlexUrl20 = bedrijfsalexa;
    // const klantenvertellenUrl30 = bedrijfsklantenvertellen;
    const youtubeUrl40 = bedrijfsyoutube;
    const instagramUrl50 = bedrijfsinsta2;
    const twitterUrl60 = bedrijfstwitter;
    const facebookUrl70 = bedrijfsfacebook;
    const GoogleUrl80 = bedrijfsgoogle;
    



// BING SEARCH
console.log('BING START');
const page10 = await browser.newPage();
const bingUrl10 = 'https://bing.com';
await page10.goto(bingUrl10, {waitUntil: 'networkidle'});
const searchPage = new SearchPage(page10);
// await searchPage.navigate();
const result10 = await searchPage.search('nike');
console.log(result10);
console.log('BING END');



// ALEXA 
console.log('ALEXA START');
const page20 = await browser.newPage();
await page20.goto(AlexUrl20, {waitUntil: 'networkidle'});
const AlexaPage10 = new AlexaPage(page20);
await AlexaPage10.scrapeAlexa();

const resultAlexa20 = await AlexaPage10.scrapeAlexa();
console.log(resultAlexa20);

console.log('ALEXA END');





// //  KlantenvertellenPage
// console.log('KLANTENVERTELLEN START');
// const page30 = await browser.newPage();
// await page30.goto(klantenvertellenUrl30, {waitUntil: 'networkidle'});
// const KlantenvertellenPage30 = new KlantenvertellenPage(page30);
// // await KlantenvertellenPage30.scrapeKlantenvertellen();

// const resultKlantenvertellen30 = await KlantenvertellenPage30.scrapeKlantenvertellen();
// console.log(resultKlantenvertellen30);

// console.log('KLANTENVERTELLEN END');


// // YoutubePage
console.log('YOUTUBE START');

// nee niet inloggen
const page40 = await browser.newPage();

await page40.goto("https://www.youtube.com/");
await page40.click("text=Nee, bedankt"); 

await page40.goto(youtubeUrl40, {waitUntil: 'networkidle'});
const youtubePage40 = new YoutubePage(page40);
// await youtubePage40.scrapeYoutube();

const resultYoutube40 = await youtubePage40.scrapeYoutube();
console.log(resultYoutube40);

console.log('YOUTUBE END');



console.log('INSTAGRAM START');
const page50 = await browser.newPage();
await page50.goto(instagramUrl50, {waitUntil: 'networkidle'});
await page50.route('https://googleads.g.doubleclick.net/*.*', route => route.abort());
await page50.route('https://pagead2.googlesyndication.com/*.*', route => route.abort());
await page50.route('https://www.facebook.com/*.*', route => route.abort());
await page50.route('https://pagead2.googlesyndication.com*.*', route => route.abort());

const instagramPage50 = new InstagramPage(page50);
// await instagramPage50.scrapeInstagram();

const resultInstagram50 = await instagramPage50.scrapeInstagram();
console.log(resultInstagram50);

console.log('INSTAGRAM END');




console.log('TWITTER START');

const page60 = await browser.newPage();
await page60.goto(twitterUrl60, {waitUntil: 'networkidle'});
const twitterPage60 = new TwitterPage(page60);
// await twitterPage60.scrapeTwitter();

const resultTwitter60 = await twitterPage60.scrapeTwitter();
console.log(resultTwitter60);

console.log('TWITTER END');




console.log('FACEBOOK START');
const page70 = await browser.newPage();
await page70.goto("https://www.facebook.com/");
await page70.click("text=Alles accepteren"); 
await page70.goto(facebookUrl70, {waitUntil: 'networkidle'});
const facebookPage70 = new FacebookPage(page70);
// await facebookPage70.scrapeFacebook();

const resultFacebook70 = await facebookPage70.scrapeFacebook();
console.log(resultFacebook70);

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
const resultGoogle80 = await googlePage80.scrapeGoogle();
console.log(resultGoogle80);



console.log('GOOGLE END');









fs.appendFileSync(`${appRoot}/content/gids/${bedrijfsnaam}` + '.md', `
---
bedrijfsnaam: ${bedrijfsnaam}  
website: ${bedrijfswebsite}   
title: ${bedrijfstitle}  
logo: ${bedrijfsafbeelding}  
introtekst: ${bedrijfsparagraaf1}  
freefield1: ${bedrijfsveld1}  
freefield2: ${bedrijfsveld2}  
freefield3: ${bedrijfsveld3}  
freefield4: ${bedrijfsveld4}  
linknaargoogleserp: ${bedrijfsgoogle}  
linknaarfacebook: ${bedrijfsfacebook}  
linknaartwitter: ${bedrijfstwitter}  
linknaaryoutube: ${bedrijfsyoutube}  
linknaarinstragram: ${bedrijfsinstagram}  
linknaartrustpilot: ${bedrijfstrustpilot}  
linknaarklachtnl: ${bedrijfsklachtnl}  
linknaaralexa: ${bedrijfsalexa}  
linknaarinstragram2: ${bedrijfsinsta2}  
linknaaryoutube2: ${bedrijfsyout2}  
linknaarfacebook2: ${bedrijfsface2}  
linknaartwitter2: ${bedrijfstwit2}  
volgersyoutube: ${resultYoutube40}  
volgersinstragram: ${resultInstagram50}  
volgerstwitter: ${resultTwitter60}  
fansfacebook: ${resultFacebook70}  
rankalexa: ${resultAlexa20}  
paginagoogle: ${resultGoogle80}  
---



`);
// ervaringenklantenvertellen: ${resultKlantenvertellen30}  
// linknaarklantenvertellen: ${bedrijfsklantenvertellen}  

console.log('MD gemaakt');

await browser.close()
})()

// ${result10} 