<template>
 <article class="mx-auto bg-gray-200">  
 
<div class="container px-5 py-24 m-auto bg-gray-200 text-grey-darkest">
      <h1 class="mt-4 mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 break-words">
         <!-- {{ blog.heading1 }}. -->
      </h1>
      <div>
 
   <li v-for="item of items" :key="item.brand" class="py-4 pl-4 my-4 bg-white border border-gray-500 border-opacity-25 shadow-md rounded-xl">
                             <!-- <NuxtLink :to="{ name: 'blog-slug', params: { slug: blog.slug } }"> 
                                <p>{{ blog.title }}</p>
                            </NuxtLink>  -->

                            <a :href="item.url">{{ item.title }}</a>
                        </li>


      </div>



  <!-- http://localhost:3000/_content/newsscraper?brand=essent -->
 


  </div>
    
     
    <!-- <button @click="goBack">Back</button>{{ blog.slug }} <br> -->
  </article>
</template>


<script>
export default {
 async asyncData({ $content, params }) {
    // fetch our article here
    const items = await $content("newsscraper", params.brand)
    // .limit(5)
    // .where({
    // brand: 'books'
    // brand: 'essent'
    // })
    .fetch();
    console.log(items);
   
    return { items };
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


section.mycontent > ul {
  list-style: disc;
  margin-left: 50px;
  padding: 10px;
}
</style>
