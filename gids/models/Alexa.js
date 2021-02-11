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
      
      await this.page.waitForTimeout(2000);
      const AlexXpath = ('//p[@class="big data"]');
      const Alexvalue = await this.page.$eval(AlexXpath, (el) => el.innerText);
      const AlexvalueClean = Alexvalue.replace(/#/, '').trim();
      const AlexaCleanerValue =  await AlexvalueClean.replace(/,/g, '.');
      
      // export AlexaCleanerValue;
      // console.log(AlexUrl1);
      // console.log(AlexaCleanerValue);
      // console.log(module.exports);
      return AlexaCleanerValue;
      // module.exports.AlexaCleanerValue = AlexaCleanerValue;
    }
    
  }

  module.exports = { AlexaPage };