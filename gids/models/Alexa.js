class AlexaPage {
    constructor(page) {
      this.page = page;
    //   this.bingUrl1 = bingUrl1;
    }
    // async navigate() {
    //   await this.page.goto(bingUrl1);
    // }
    async scrapeAlexa() {
      // console.log('intern');
      
      await this.page.waitForTimeout(1000);
      const AlexXpath = ('//p[@class="big data"]');
      const Alexvalue = await this.page.$eval(AlexXpath, (el) => el.innerText);
      const AlexvalueClean = Alexvalue.replace(/#/, '').trim();
      const AlexaCleanerValue =  await AlexvalueClean.replace(/,/g, '.');
      
      // console.log(AlexUrl1);
      console.log(AlexaCleanerValue);

      
    }
  }
  module.exports = { AlexaPage };