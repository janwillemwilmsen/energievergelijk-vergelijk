class SearchPage {
    constructor(page) {
      this.page = page;
    //   this.bingUrl1 = bingUrl1;
    }
    // async navigate() {
    //   await this.page.goto(bingUrl1);
    // }
    async search(text) {
      const bingXpath = ('//div[@id="b_content"] //h2');
      await this.page.fill('[aria-label="Enter your search term"]', text);
      await this.page.press('[aria-label="Enter your search term"]', 'Enter');
      await this.page.waitForLoadState('load');
      const BingValue1 = await this.page.$eval(bingXpath, (el) => el.innerText);
    //   const Alexvalue1clean = Alexvalue1.replace(/#/, '').trim();
      
    //   console.log(AlexUrl1);
      console.log(BingValue1);


    }
  }
  module.exports = { SearchPage };