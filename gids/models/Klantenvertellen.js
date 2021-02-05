class KlantenvertellenPage {
    constructor(page) {
      this.page = page;
    //   this.bingUrl1 = bingUrl1;
    }
    // async navigate() {
    //   await this.page.goto(bingUrl1);
    // }
    async scrapeKlantenvertellen() {
      const KVxpath1 = ('//div[@class="overall-rating"]//span[@class="rating"]');
      const KVbeoordeling1 = await this.page.$eval(KVxpath1, (el) => el.innerText);
      console.log(KVbeoordeling1);
      // await page3.waitForTimeout(1000);
      
      
      
      // console.log(AlexUrl1);
      // console.log(AlexaCleanerValue);
      
      
      // await page.waitForTimeout(1000);
    }
  }
  module.exports = { KlantenvertellenPage };


 
  // const AlexXpath = ('//p[@class="big data"]');
  // const Alexvalue = await this.page.$eval(AlexXpath, (el) => el.innerText);
  // const AlexvalueClean = Alexvalue.replace(/#/, '').trim();
  // const AlexaCleanerValue =  await AlexvalueClean.replace(/,/g, '.');