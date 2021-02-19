class InstagramPage {
    constructor(page) {
      this.page = page;
    
    }
    async scrapeInstagram() {

      await this.page.waitForTimeout(1000);
      let InstaFollowAgain1 = null

      const InstaXpathAgain1 = ('//p[@class="report-header-number"]'); 
      const InstaFollowAgain1Dirty = await this.page.$eval(InstaXpathAgain1, (el) => el.innerText);
      // console.log(InstaFollowAgain1);

      InstaFollowAgain1 = InstaFollowAgain1Dirty.replace(/,/g, '.') 

      return InstaFollowAgain1;




      
      // https://instastatistics.com/#!/ford    ===== KUT SPANS
//       await this.page.waitForTimeout(6000);

//       // await this.page.route('https://googleads.g.doubleclick.net/*.*', route => route.abort());
//       // await this.page.route('https://pagead2.googlesyndication.com/*.*', route => route.abort());
//       // await this.page.route('https://www.facebook.com/*.*', route => route.abort());
//       // await this.page.route('https://pagead2.googlesyndication.com*.*', route => route.abort());

 
// //  const InstaXpathAgain1 = ('(//p[@class="report-header-number"])[1]'); 
// //  const InstaXpathAgain1 = ('  (//div[@class="odometer-inside"])[1]  '); 
// //  const InstaXpathAgain1 = ('//div[@id="follower-count"]//span'); 
//  const InstaXpathAgain1 = ('//span[@class="odometer-value"]'); 



//  const InstaFollowAgain1 = await this.page.$$eval(InstaXpathAgain1, (el) => el.innerText);
// //  let NewInstaFollowAgain1 = await InstaFollowAgain1.replace(/,/g, '.');
// //  console.log(NewInstaFollowAgain1);
// console.log(InstaFollowAgain1);
// return InstaFollowAgain1;
 


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
  module.exports = { InstagramPage };


 
  // const AlexXpath = ('//p[@class="big data"]');
  // const Alexvalue = await this.page.$eval(AlexXpath, (el) => el.innerText);
  // const AlexvalueClean = Alexvalue.replace(/#/, '').trim();
  // const AlexaCleanerValue =  await AlexvalueClean.replace(/,/g, '.');