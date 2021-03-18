<template>
 <article class="mx-auto bg-gray-200">  
 
<div class="container py-24 m-auto bg-gray-200 text-grey-darkest">
   
   <div class="p-5 content bg-gray-50 rounded-xl">  



<h1 class="pt-8 mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 break-words">
         {{ blog.heading1 }}
      </h1>
      <div> Geschreven door:  {{ blog.auteur }} op {{ blog.mooiedatum }} <br></div>
            <section class="mt-8 text-3xl mycontent" v-html="blog.paragraaf1">
            </section>
            <img v-if="blog.afbeelding1" :src="blog.afbeelding1" alt="" class="my-4 border border-gray-200">
 
 <h2  class="mt-8 mb-4 text-5xl" v-html="blog.heading2">  </h2>  
          <section  class="text-3xl mycontent"  v-html="blog.paragraaf2">
          </section>
          <img v-if="blog.afbeelding2" :src="blog.afbeelding2" alt="" class="my-4 border border-gray-200">


 <h2 class="mt-8 mb-4 text-5xl" v-html="blog.heading11">  </h2>  
          <section  class="text-3xl mycontent"  v-html="blog.paragraaf11">
          </section>
          <img v-if="blog.afbeelding11" :src="blog.afbeelding11" alt="" class="my-4 border border-gray-200">


 <h2 class="mt-8 mb-4 text-5xl" v-html="blog.heading22">  </h2>  
          <section  class="text-3xl mycontent"  v-html="blog.paragraaf22">
          </section>
          <img v-if="blog.afbeelding22" :src="blog.afbeelding22" alt="" class="my-4 border border-gray-200">



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

 <!-- <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": "{{ blog.title }}",
      "image": [
        "https://example.com/photos/1x1/photo.jpg",
        "https://example.com/photos/4x3/photo.jpg",
        "https://example.com/photos/16x9/photo.jpg"
       ],
      "datePublished": "{{createdAt}}",
      "dateModified": "{{updatedAt}}"
    }
    </script> -->

   </div>  <!----end Content--->

 
   
<div class="flex flex-col justify-around w-full p-0 mx-auto my-20 md:flex-row">

            <NuxtLink v-if="prev" :to="{ name: 'blog-slug', params: { slug: prev.slug } }" class="m-2 bg-gray-100 border-2 border-gray-300 md:w-5/12 left rounded-xl">
              <div class="p-4 text-xl text-center ">
              <p class="mb-2 text-sm font-bold align-middle">👈 Vorig artikel</p> 
                    {{ prev.title }}
              </div>
             </NuxtLink>
         
              <NuxtLink v-if="next" :to="{ name: 'blog-slug', params: { slug: next.slug } }" class="m-2 bg-gray-100 border-2 border-gray-300 md:w-5/12 right rounded-xl">
               <div class="p-4 text-xl text-center ">
                <p class="mb-2 text-sm font-bold align-middle">Volgend artikel 👉</p> 
                     {{ next.title }}
              </div>
              </NuxtLink>
</div>
 
 
  </div>  <!----end Container--->



    
     
    <!-- <button @click="goBack">Back</button>{{ blog.slug }} <br> -->
  </article>
</template>


<script>
export default {

 async asyncData({ $content, params }) {
    // fetch our article here
    const blog = await $content("blogs", params.slug).fetch();
   


 const [prev, next] = await $content('blogs')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch();

    return {
      blog,
      prev,
      next
    }

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
 p.mycontent > h2{font-size: 2rem !important;margin-top: 0.5rem;margin-bottom: 0.5rem;}  

 

 
div.container section.mycontent > h2{ font-size: 3rem !important; margin-top: 3rem;margin-bottom: 2rem;  line-height: 3rem;}
div.container  > img {margin-top: 2rem;margin-bottom: 2rem;}

.nuxt-content h2 {font-size:2em;}  

section.mycontent > ul {
  list-style: disc;
  margin-left: 50px;
  padding: 10px;
}
</style>
