// scrape en schrijf naar Markdown. Frontmatter ontbreekt. 
// https://stackoverflow.com/questions/66359453/scrape-headlines-with-playwright-how-to-write-output-into-markdown-file-consol

// DEZE alles


const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();

// BOOKS

  const page90 = await browser.newPage();
  await page90.goto("https://books.toscrape.com/");
  const listcontentbooks = await page90.evaluate(() => {
  const databooks = [];
  const booksss = document.querySelectorAll(".product_pod");
  booksss.forEach((book) => {
  let title = book.querySelector('.thumbnail').getAttribute("alt");
  let url = book.querySelector('a').getAttribute("href");
     databooks.push({
     title,
     url,
      });
      });
  return databooks;
  });

  let string = '';
  for (const {title: n, url: f} of listcontentbooks) {
    string += '- [' + n + '](' + f + ')\n';
  }
  console.log("books saved.");
  fs.appendFileSync('nieuwsscraper.md', string);

  /*fs.writeFile('books.md', string, function(err) {
    if(err) throw err;
    console.log("File was saved.");
    browser.close();
  });*/



  // ESSENT NEWSSCRAPE START
  const page709 = await browser.newPage();
  await page709.goto("https://www.essent.nl/content/overessent/actueel/index.html");
  const listcontentessent = await page709.evaluate(() => {
  const dataessent = [];
  const booksessent = document.querySelectorAll("#headlineset_1_1 a");
  booksessent.forEach((book) => {
  let title = book.querySelector('h3').innerText;
  let slug = book.getAttribute("href")
  let datumlong = book.querySelector('.pp_publishdate').innerText;
  let datumdirty = datumlong.replace(/(\r\n|\n|\r)/gm,"");
  let datumstill = datumdirty.replace('/\s+/g, " "').trim();
  let datumone = datumstill.replace(/ /g, "");
let datumcomma = datumone.match(/[a-z]+|[^a-z]+/gi);  
// Maakt er json comma geschreide objecten van
var datum = datumcomma.join(" ");

  // let datumcom = datumone.match(/[a-zA-Z]+|[0-9]+/g);
  // let datum = datumcom.replace(',', ' ');
  // let datum = datumlong.split(' ').slice(0,3).join(' ');
  
  let baseurl = 'https:'
  let url = baseurl + slug
     dataessent.push({
     title,
     url,
     datum
      });
      });
  return dataessent;
  });

  let stringessent = '';
  for (const {title: n, url: f, datum: d} of listcontentessent) {
    stringessent += '- Op ' + d + ' [' +  n + '](' + f + ')\n';
  }
  console.log("essent saved.");
  
  fs.appendFileSync('nieuwsscraper.md', stringessent);
  // ESSENT NIEUWSSCRAPE end



// VATTENFALL NEWSSCRAPE START

const page700 = await browser.newPage();
await page700.goto("https://group.vattenfall.com/nl/newsroom");
const listcontentvattenfall = await page700.evaluate(() => {
const datavattenfall = [];
const booksvattenfall = document.querySelectorAll(".newsitem");
booksvattenfall.forEach((book) => {
let title = book.querySelector('.newsitem h3.heading').innerText;
let slug = book.querySelector('.newsitem h3.heading a').getAttribute("href");
let datumdirty = book.querySelector('.newsitem .date').innerText;
let datumbig = datumdirty.split(' ').slice(0,3).join(' ');
let datum  = datumbig.toLowerCase();
let baseurl = 'https://group.vattenfall.com'
let url = baseurl + slug
   datavattenfall.push({
   title,
   url,
   datum
    });
    });
return datavattenfall;
});

let stringvattenfall = '';
for (const {title: n, url: f, datum: d} of listcontentvattenfall) {
  stringvattenfall += '- Op ' + d + ' [' +  n + '](' + f + ')\n';
}
console.log("vattenfall saved.");
fs.appendFileSync('nieuwsscraper.md', stringvattenfall);
// VATTENFALL NEWSSCRAPE END

// eneco start newsscraper
const page122 = await browser.newPage();
// await page122.goto("https://www.eneco.nl/over-ons/");
await page122.goto("https://nieuws.eneco.nl/");
const listcontenteneco = await page122.evaluate(() => {
const dataeneco = [];

// const bookseneco = document.querySelectorAll("div.o-layout.c-text-image__layout");
// bookseneco.forEach((book) => {
// let title = book.querySelector('h2.c-text-image__title').innerText;
// let url = book.querySelector('a.c-link').href;

const bookseneco = document.querySelectorAll(".mm_listitem");
bookseneco.forEach((book) => {
let title = book.querySelector('h3').innerText;
let url = book.querySelector('a').href;
let datumdirty = book.querySelector('.pp_bigheadlines_date').innerText;
let datum = datumdirty.replace(/\n/g, " ");
// let baseurl = 'https:'
// let url = baseurl + slug
   dataeneco.push({
   title,
   url,
   datum
    });
    });
return dataeneco;
});

let stringeneco = '';
for (const {title: n, url: f, datum: d} of listcontenteneco) {
  stringeneco += '- Op ' + d + ' [' +  n + '](' + f + ')\n';
}
console.log("eneco NIEUWS saved.");
fs.appendFileSync('nieuwsscraper.md', stringeneco);
// ENECO END newsscraper



// VANDEBRON START  vandebron - via Google.nl
const page882 = await browser.newPage();
await page882.goto("https://www.google.nl/search?q=site:vandebron.nl/blog&source=lnt&tbs=qdr:y");
const listcontentvandebron = await page882.evaluate(() => {
const datavandebron = [];
const booksvandebron = document.querySelectorAll("div.g");
booksvandebron.forEach((book) => {
let title = book.querySelector('h3').innerText;
let url = book.querySelector('a').href;
let datum = book.querySelector('span.f').innerText
// let baseurl = 'https:'
// let url = baseurl + slug
   datavandebron.push({
   title,
   url,
   datum
    });
    });
return datavandebron;
});

let stringvandebron = '';
for (const {title: n, url: f, datum: d} of listcontentvandebron) {
  stringvandebron += '- Op ' + d + ' [' +  n + '](' + f + ')\n';
}
console.log("vandebron NIEUWS saved.");
fs.appendFileSync('nieuwsscraper.md', stringvandebron);
// vandebron END



// energiedirect START   
const page652 = await browser.newPage();
await page652.goto("https://www.energiedirect.nl/blog?page=1");
await page652.waitForTimeout(3000);
const listcontentenergiedirect = await page652.evaluate(() => {
const dataenergiedirect = [];
const booksenergiedirect = document.querySelectorAll("div.articles-list-item");
booksenergiedirect.forEach((book) => {
let title = book.querySelector('h3').innerText;
let url = book.querySelector('a.ng-binding').href;
let datumdirty = book.querySelector('span.item-info').innerText;
let datum = datumdirty.split(' ').slice(0,3).join(' ');

// let baseurl = 'https:'
// let url = baseurl + slug
dataenergiedirect.push({
   title,
   url,
   datum
    });
    });
return dataenergiedirect;
});

let stringenergiedirect = '';
for (const {title: n, url: f, datum: d} of listcontentenergiedirect) {
  stringenergiedirect += '- Op ' + d + ' [' +  n + '](' + f + ')\n';
}
console.log("energiedirect blog saved.");
fs.appendFileSync('nieuwsscraper.md', stringenergiedirect);
// energiedirect END




// independer START  
const page2282 = await browser.newPage();
await page2282.goto("https://weblog.independer.nl/persbericht/");
const listcontentindepender = await page2282.evaluate(() => {
const dataindepender = [];
const booksindepender = document.querySelectorAll("div.default-article");
booksindepender.forEach((book) => {
let title = book.querySelector('h3.entry-title').innerText;
let url = book.querySelector('a').href;
let datum = book.querySelector('.published').innerText;
// let baseurl = 'https:'
// let url = baseurl + slug
   dataindepender.push({
   title,
   url,
   datum
    });
    });
return dataindepender;
});

let stringindepender = '';
for (const {title: n, url: f, datum: d} of listcontentindepender) {
  stringindepender += '- Op ' + d + ' [' +  n + '](' + f + ')\n';
}
console.log("independer NIEUWS saved.");
fs.appendFileSync('nieuwsscraper.md', stringindepender);
// independer END





// easyswitch START  
const page145 = await browser.newPage();
await page145.goto("https://www.easyswitch.nl/nieuwsberichten/");
const listcontenteasyswitch = await page145.evaluate(() => {
const dataeasyswitch = [];
const bookseasyswitch = document.querySelectorAll("div[class^='nieuws-item']");
bookseasyswitch.forEach((book) => {
let title = book.querySelector('h2').innerText;
let url = book.querySelector('a').href;
let datum = book.querySelector('.nieuws-item-date').innerText;
// let baseurl = 'https:'
// let url = baseurl + slug
   dataeasyswitch.push({
   title,
   url,
   datum
    });
    });
return dataeasyswitch;
});

let stringeasyswitch = '';
for (const {title: n, url: f, datum: d} of listcontenteasyswitch) {
  stringeasyswitch += '- Op ' + d + ' [' +  n + '](' + f + ')\n';
}
console.log("easyswitch NIEUWS saved.");
fs.appendFileSync('nieuwsscraper.md', stringeasyswitch);
// easyswitch END




// pricewise START  
const page195 = await browser.newPage();
await page195.goto("https://www.pricewise.nl/blog/newsroom/");
const listcontentpricewise = await page195.evaluate(() => {
const datapricewise = [];
const bookspricewise = document.querySelectorAll(".persberichten-item");
bookspricewise.forEach((book) => {
let title = book.querySelector('.the-title').innerText;
let url = book.querySelector('a').href;
let datum = book.querySelector('.the-date').innerText;
// let baseurl = 'https:'
// let url = baseurl + slug
   datapricewise.push({
   title,
   url,
   datum
    });
    });
return datapricewise;
});

let stringpricewise = '';
for (const {title: n, url: f, datum: d} of listcontentpricewise) {
  stringpricewise += '- Op ' + d + ' [' +  n + '](' + f + ')\n';
}
console.log("pricewise NIEUWS saved.");
fs.appendFileSync('nieuwsscraper.md', stringpricewise);
// pricewise END




// gaslicht START  
const page314 = await browser.newPage();
await page314.goto("https://www.gaslicht.com/nieuws");
const listcontentgaslicht = await page314.evaluate(() => {
const datagaslicht = [];
const booksgaslicht = document.querySelectorAll("div.c-site-contentpage__wrapper ul.o-list-base li");
booksgaslicht.forEach((book) => {
let title = book.querySelector('a').innerText;
let url = book.querySelector('a').href;
let datum = book.querySelector('small').innerText;
// let baseurl = 'https:'
// let url = baseurl + slug
   datagaslicht.push({
   title,
   url,
   datum
    });
    });
return datagaslicht;
});

let stringgaslicht = '';
for (const {title: n, url: f, datum: d} of listcontentgaslicht) {
  stringgaslicht += '- Op ' + d + ' [' +  n + '](' + f + ')\n';

// for (const {title: n, url: f} of listcontentgaslicht) {
//   stringgaslicht += '-[' +  n + '](' + f + ')\n';

}
console.log("gaslicht NIEUWS saved.");
fs.appendFileSync('nieuwsscraper.md', stringgaslicht);
// gaslicht END





// energievergelijk START  
const page354 = await browser.newPage();
await page354.goto("https://www.energievergelijk.nl/nieuws");
const listcontentenergievergelijk = await page354.evaluate(() => {
const dataenergievergelijk = [];
const booksenergievergelijk = document.querySelectorAll(".wrapper");
booksenergievergelijk.forEach((book) => {
let title = book.querySelector('h3').innerText;
let url = book.querySelector('a.underline').href;
let datumbig = book.querySelector('.font-size-small').innerText;
let datum  = datumbig.toLowerCase();

// let baseurl = 'https:'
// let url = baseurl + slug
   dataenergievergelijk.push({
   title,
   url,
   datum
    });
    });
return dataenergievergelijk;
});

let stringenergievergelijk = '';
for (const {title: n, url: f, datum: d} of listcontentenergievergelijk) {
  stringenergievergelijk += '- Op ' + d + ' [' +  n + '](' + f + ')\n';
}
console.log("energievergelijk NIEUWS saved.");
fs.appendFileSync('nieuwsscraper.md', stringenergievergelijk);
// energievergelijk END







  browser.close();
})();