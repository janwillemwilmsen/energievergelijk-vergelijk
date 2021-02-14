<template>
 <article class="mx-auto bg-gray-200">  
 
<div class="container px-5 py-24 m-auto bg-gray-200 text-grey-darkest">
      <h1 class="mt-4 mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 break-words">
         {{ blog.heading1 }}.
      </h1>


<p class="text-2xl ">
  {{ blog.paragraaf1 }} <br>
  {{ blog.afbeelding1 }} <br>

</p>

 <h2  class="text-3xl ">{{ blog.heading2 }}  </h2>  
<p class="text-2xl ">
 
  {{ blog.paragraaf2 }} 
  {{ blog.afbeelding2 }} <br>
  
</p>

<br><br><br><br>
ID :   {{ blog.ID }} <br>
Mooiedatum:   {{ blog.mooiedatum }} <br>
Slug  {{ blog.slug }} <br> 
Auteur:  {{ blog.auteur }} <br>
MetaDescription:  {{ blog.description }} <br>
 seotitle: {{ blog.title }} <br>
  <br>


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




<style scoped>

</style>
