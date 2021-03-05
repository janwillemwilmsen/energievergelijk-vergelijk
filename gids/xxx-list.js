// const { chromium } = require("playwright");

// (async () => {
//   const browser = await chromium.launch();
//   const page = await browser.newPage();
//   await page.goto("");
//   const categories = await page.$$eval(" a", (nodes) =>
//     nodes.map((n) => n.innerText)
//   );
//   console.log(categories);
//   await browser.close();
// })();




const { chromium } = require("playwright");
const fs = require("fs");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();



  //////ESSENT 
  await page.goto("https://www.essent.nl/content/overessent/actueel/index.html");
  const contentessent = await page.evaluate(() => {
    let data = [];

    let books = document.querySelectorAll(".headlinesets");
    books.forEach((book) => {
    //   let title = book.querySelector("a");
    //   let author = book.querySelector("[a=title]").innerText;
      let author = book.querySelector('h3').innerText;
      let price = book.querySelector('a').getAttribute("href");
      data.push({
        // title,
        author,
        price,
      });
    });
    return data;
  });

console.log(contentessent);

  const jsonData = JSON.stringify(content);
  fs.writeFileSync("booksessent.json", jsonData);



  
  await browser.close();
})();