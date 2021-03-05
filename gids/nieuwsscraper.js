// Maak : newsscraper.json

const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
    const browser = await chromium.launch({ headless: true, slowMo: 250 });
    const context = await browser.newContext();

    ///// ESSENT.nl
    const page80 = await browser.newPage();
  await page80.goto("https://www.essent.nl/content/overessent/actueel/index.html");
  const contentessent = await page80.evaluate(() => {
    const essentdata = [];

    const essentItems = document.querySelectorAll(".headlinesets");
    essentItems.forEach((book) => {
      let brand = 'essent';
      let title = book.querySelector('h3').innerText;
      let slug = book.querySelector('a').getAttribute("href");
      let baseurl = 'https://'
      let url = baseurl + slug
      essentdata.push({
        brand,
        title,
        slug,
        baseurl,
        url
      });
    });
    return essentdata;
  });
  // console.log(contentessent);

  // fs.appendFileSync(`file2.json`,JSON.stringify(contentessent));


    // BOOKtoSCRAPE.COM
    const page90 = await browser.newPage();

  await page90.goto("https://books.toscrape.com/");
  const listcontent = await page90.evaluate(() => {
    const data = [];

    const books = document.querySelectorAll(".product_pod");
    books.forEach((book) => {
      let brand = 'books';
      let title = book.querySelector('.thumbnail').getAttribute("alt");
      let slug = book.querySelector('a').getAttribute("href");
      let baseurl = 'https://www.books.nl/'
      let url = baseurl + slug
      data.push({
        brand,
        title,
        slug,
        baseurl,
        url
      });
    });
    return data;
  });

// console.log(listcontent);
// listcontent.forEach(item => console.log(item))
// [listcontent].forEach(console.log, console);
// [listcontent].forEach(console.log.bind(console));
// let list = {};

// alleen intern Console.Log:
// for (const {title: n, url: f} of listcontent) {
//     console.log('[' + n + '](' + f + ')');
//     // return list;
//   }

  //  let firstItem = listcontent[0]
  // lists as json
  // console.log(listcontent)

  // for (const property of listcontent) {
  //   console.log(`${property}: ${url[property]}`);
  // }


  // ${firstItem} 
  // ${list}

  // fs.appendFileSync

  // console.log(formatedUsers);
  // fs.promises.appendFileSync(`file2.json`,JSON.stringify(listcontent));
  // fs.appendFileSync(`file2.json`,JSON.stringify(listcontent, contentessent));


  var finalObj = listcontent.concat(contentessent);
  fs.appendFileSync(`newsscraper.json`,JSON.stringify(finalObj));
// moet nog weggschreven worden naar CONTENT folder.


// Create Markdown with frontmatter part:
// fs.promises.writeFile(`file` + '.md', `---

// ---

// `);

console.log('MD created');
await browser.close()
})()
 


