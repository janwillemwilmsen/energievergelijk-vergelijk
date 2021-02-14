<template>
 <article class="mx-auto bg-gray-200">
    <a name="top"></a>

    <div class="container px-5 py-24 m-auto bg-gray-200 text-grey-darkest">
      <h1 class="mt-4 mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 break-words">Energieke blog.</h1>
      <p class="mt-8 text-2xl">
        Random rants, gedachten en opmerkelijke constateringen.
      </p>

 <ul class="max-w-4xl mt-8">
                        <li v-for="blog of blogs" :key="blog.slug" class="py-4 pl-4 my-4 bg-white border border-gray-500 border-opacity-25 shadow-md rounded-xl">
                             <NuxtLink :to="{ name: 'blog-slug', params: { slug: blog.slug } }"> 
                              
                                <p>{{ blog.title }}</p>
                            </NuxtLink> 
                        </li>
                  </ul>
<!-- <the-blog-all/> -->

</div>
  </article>

<!--
  GEEN INHOUD??
   http://localhost:3000/gids/google-api-blog-output.json 
   
 Wel inhoud:

   http://localhost:3000/blog.json
   
   -->



</template>

<script>

  export default {
 async asyncData({ $content, params }) {
    // fetch our article here
    const blogs = await $content("blogs", params.slug).fetch();

    return { blogs };
  }
  }

// import TheBlogAll from '../../components/TheBlogAll.vue'
//   export default {
//   components: { TheBlogAll },
//     data() {
//       return {
//         mountains: []
//       }
//     },
//     async fetch() {
//       this.mountains = await fetch(
//         // 'https://script.googleusercontent.com/macros/echo?user_content_key=iJLLGWy2XR3sBUCgLGyOkMvMEtQyBtDX432ju76TaihrsAWR3cGyLpJKIuY6jm6C-mqVEylQlWywuJOpMs7XlCJK27Nw5KP_m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnEgKUSEKZAbo5b7L4PwFjGqt_woMYrb75_GzgQmLwUbGQbjOPl8Wh2pVXHVJwPC6Bbc5Yu1BFlTCGGaU2pP6Ntk&lib=MUx4MpC2NIHY9zDpjxHlJlBlfZc1fPD1m'
//         'https://script.googleusercontent.com/macros/echo?user_content_key=iJLLGWy2XR3sBUCgLGyOkMvMEtQyBtDX432ju76TaihrsAWR3cGyLpJKIuY6jm6C-mqVEylQlWywuJOpMs7XlCJK27Nw5KP_m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnEgKUSEKZAbo5b7L4PwFjGqt_woMYrb75_GzgQmLwUbGQbjOPl8Wh2pVXHVJwPC6Bbc5Yu1BFlTCGGaU2pP6Ntk&lib=MUx4MpC2NIHY9zDpjxHlJlBlfZc1fPD1m'
//       ).then(res => res.json())
//     }
//   }
</script>

<style>

</style>