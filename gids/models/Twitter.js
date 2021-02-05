class TwitterPage {
    constructor(page) {
      this.page = page;
    
    }
    async scrapeTwitter() {

 
 const FOLLERxpath1 = ("(//td[contains(text(),'Followers')]  /following-sibling::td)[1]");
 
 await this.page.waitForTimeout(5000);
 await this.page.waitForSelector('(//div[@class="container"])[3]');
 const FOLLERtext1 = await this.page.$eval(FOLLERxpath1, (el) => el.innerText);
//  const FOLLER1Clean = FOLLERtext1.split(" ")[0];
 console.log(FOLLERtext1);

 
//  const InstaXpathAgain1 = ('(//p[@class="report-header-number"])[1]'); 

//  const InstaFollowAgain1 = await this.page.$eval(InstaXpathAgain1, (el) => el.innerText);
//  let NewInstaFollowAgain1 = await InstaFollowAgain1.replace(/,/g, '.');
//  console.log(NewInstaFollowAgain1);
 


// const YTxpath1 = ('//yt-formatted-string [@id="subscriber-count"]');
// const YTtext1 = await this.page.$eval(YTxpath1, (el) => el.innerText);
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
  module.exports = { TwitterPage };


 
  // const AlexXpath = ('//p[@class="big data"]');
  // const Alexvalue = await this.page.$eval(AlexXpath, (el) => el.innerText);
  // const AlexvalueClean = Alexvalue.replace(/#/, '').trim();
  // const AlexaCleanerValue =  await AlexvalueClean.replace(/,/g, '.');