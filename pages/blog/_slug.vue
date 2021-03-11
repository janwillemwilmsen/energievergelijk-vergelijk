<template>
 <article class="mx-auto bg-gray-200">  
 
<div class="container px-5 py-24 m-auto bg-gray-200 text-grey-darkest">
      <h1 class="mt-4 mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 break-words">
         {{ blog.heading1 }}
      </h1>
      <div>
 
Geschreven door:  {{ blog.auteur }} op {{ blog.mooiedatum }} <br>
      </div>


<section class="mt-8 text-3xl mycontent" v-html="blog.paragraaf1">
  

</section>
  
  <img :src="blog.afbeelding1" alt="">
 
 <h2  class="mb-8 text-5xl" v-html="blog.heading2">  </h2>  
<section  class="text-3xl mycontent"  v-html="blog.paragraaf2">
 
   
  
</section>
<img :src="blog.afbeelding2" alt="">


 <h2  class="mb-8 text-5xl" v-html="blog.heading11">  </h2>  
<section  class="text-3xl mycontent"  v-html="blog.paragraaf11">
 </section>
<img :src="blog.afbeelding11" alt="">


 <h2  class="mb-8 text-5xl" v-html="blog.heading22">  </h2>  
<section  class="text-3xl mycontent"  v-html="blog.paragraaf22">
 </section>
<img :src="blog.afbeelding22" alt="">



<div style="display:none;">

MetaDescription:  {{ blog.description }} <br>
seotitle: {{ blog.title }} <br>
ID :   {{ blog.ID }} <br>
Slug  {{ blog.slug }} <br> 

  {{ blog.heading11 }} <br>
  {{ blog.paragraaf11 }} <br>
  {{ blog.afbeelding11 }} <br>
  {{ blog.heading22 }} <br>
  {{ blog.afbeelding22 }} <br>
  {{ blog.paragraaf22 }} <br>
  {{ blog.veld11 }} <br>
  {{ blog.veld55 }} <br>
  {{ blog.veld44 }} <br>
</div>

  </div>
    
     
    <!-- <button @click="goBack">Back</button>{{ blog.slug }} <br> -->
  </article>
</template>


<script>
export default {

 async asyncData({ $content, params }) {
    // fetch our article here
    const blog = await $content("blogs", params.slug).fetch();

    return { blog };
  },

   head() {
    return {
      title: this.blog.title,
      meta: [
        { hid: 'description', name: 'description', content: this.blog.description },
        // Open Graph
        { hid: 'og:url', property: 'og:url', content: `https://ikvergelijk.nl` + this.$route.fullPath },
        // { hid: 'og:url', property: 'og:url', content: this.$nuxt.$route.fullPath },
        { hid: 'og:title', property: 'og:title', content: this.blog.title },
        { hid: 'og:description', property: 'og:description', content: this.blog.description },
        // Twitter Card
        { hid: 'twitter:url', property: 'twitter:url', content: `https://ikvergelijk.nl` + this.$route.fullPath },
        { hid: 'twitter:title', name: 'twitter:title', content: this.blog.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.blog.description }
      ]
    }
  }


}



// export default {
//     watch: {
//     '$slug.query': '$fetch'
//   },
//   data() {
//     return {
//     //   mountain: this.$route.params.slug,
//        blog: {}
//     }
//   },
//   async fetch() {
//     this.blog = await this.$http.$get(
//     //   `http://localhost:3000/blog.json?this.$route.params.slug`
//     //   `http://localhost:3000/blog.json?${this.$route.params.slug}`
//     //   `https://script.googleusercontent.com/macros/echo?user_content_key=iJLLGWy2XR3sBUCgLGyOkMvMEtQyBtDX432ju76TaihrsAWR3cGyLpJKIuY6jm6C-mqVEylQlWywuJOpMs7XlCJK27Nw5KP_m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnEgKUSEKZAbo5b7L4PwFjGqt_woMYrb75_GzgQmLwUbGQbjOPl8Wh2pVXHVJwPC6Bbc5Yu1BFlTCGGaU2pP6Ntk&lib=MUx4MpC2NIHY9zDpjxHlJlBlfZc1fPD1m&${this.$route.params.slug}`  
//     `https://script.googleusercontent.com/macros/echo?user_content_key=iJLLGWy2XR3sBUCgLGyOkMvMEtQyBtDX432ju76TaihrsAWR3cGyLpJKIuY6jm6C-mqVEylQlWywuJOpMs7XlCJK27Nw5KP_m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnEgKUSEKZAbo5b7L4PwFjGqt_woMYrb75_GzgQmLwUbGQbjOPl8Wh2pVXHVJwPC6Bbc5Yu1BFlTCGGaU2pP6Ntk&lib=MUx4MpC2NIHY9zDpjxHlJlBlfZc1fPD1m`
//     )
//   },
//   methods: {
//     goBack() {
//       return this.$router.go(-1)
//     }
//   }
// }
</script>

<style>
/* p.mycontent > h2{font-size: 2rem !important;margin-top: 0.5rem;margin-bottom: 0.5rem;} */
div.container section.mycontent > h2{ font-size: 3rem !important; margin-top: 3rem;margin-bottom: 2rem;}
div.container  > img {margin-top: 2rem;margin-bottom: 2rem;}

.nuxt-content h2 {font-size:2em !important;}

section.mycontent > ul {
  list-style: disc;
  margin-left: 50px;
  padding: 10px;
}
</style>
