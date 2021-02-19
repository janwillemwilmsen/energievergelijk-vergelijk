class YoutubePage {
    constructor(page) {
      this.page = page;
    //   this.bingUrl1 = bingUrl1;
    }
    // async navigate() {
    //   await this.page.goto(bingUrl1);
    // }
    async scrapeYoutube() {




const YTxpath1 = ('//yt-formatted-string [@id="subscriber-count"]');
const YTtext1Dirty = await this.page.$eval(YTxpath1, (el) => el.innerText);

var YTtext1 = YTtext1Dirty.replace(/\D+/g, '');


return YTtext1;
// console.log(YTurl1);
// console.log(YTtext1);
// await page3.waitForTimeout(1000);


      // const KVxpath1 = ('//div[@class="overall-rating"]//span[@class="rating"]');
      // const KVbeoordeling1 = await this.page.$eval(KVxpath1, (el) => el.innerText);
      // console.log(KVbeoordeling1);
      // // await page3.waitForTimeout(1000);
      
      // console.log(AlexUrl1);
      // console.log(AlexaCleanerValue);
      
      // await page.waitForTimeout(1000);
    }
  }
  module.exports = { YoutubePage };


 
  // const AlexXpath = ('//p[@class="big data"]');
  // const Alexvalue = await this.page.$eval(AlexXpath, (el) => el.innerText);
  // const AlexvalueClean = Alexvalue.replace(/#/, '').trim();
  // const AlexaCleanerValue =  await AlexvalueClean.replace(/,/g, '.');