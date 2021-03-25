<template>
 <article class="mx-auto bg-gray-200">
    <a name="top"></a>

    <div class="container px-5 py-24 m-auto bg-gray-200 text-grey-darkest">
      <h1 class="mt-4 mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 break-words">Energieke blog.</h1>
      <p class="my-8 text-2xl">
        Random rants, gedachten en opmerkelijke constateringen.
      </p>

 <div v-for="blog of blogs" :key="blog.slug" class="self-center p-2 m-2 mx-auto text-black align-middle transition duration-500 ease-in-out bg-white border-2 border-gray-800 border-opacity-25 border-dashed shadow-lg bg-opacity-80 rounded-xl h-100 ">
                
                <div class="flex flex-row space-x-4">
                  <div class="w-3/12 lg:w-1/12 left">

                    <img :src="blog.giphy"/> 

                  </div>
                  <div class="w-9/12 lg:w-11/12 rght">






                      <span class="text-sm text-gray-400 ">
                          {{blog.mooiedatum}}  
                      </span>
                          <NuxtLink :to="{ name: 'blog-slug', params: { slug: blog.slug } }">
                                <!-- <img :src="bed.logo" width="150" alt="img"  class="mx-auto duration-200 ease-in-out transform grayimg hover:scale-110"/> -->
                            <h4 class="text-3xl ">{{ blog.title }}</h4>


                          <p class="text-lg line-clamp-1 ">  {{blog.paragraaf1}}</p>
                            <div class="font-bold tracking-tighter text-gray-600 underline">Lees meer</div>

                          </NuxtLink>
                  </div>

                </div>
      </div>
<!-- <the-blog-all/> -->

</div>
  </article>

<!--
GEEN INHOUD??    http://localhost:3000/gids/google-api-blog-output.json 
Wel inhoud:      http://localhost:3000/blog.json
-->

</template>

<script>

  export default {
 head: {
    title: 'Over energievergelijken, en wat ons opvalt bij vergelijken.',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Doe inzicht op. Waar moet jij op letten bij vergelijken?'
      }
    ],
  },


 async asyncData({ $content, params }) {
    // fetch our article here
    const blogs = await $content("blogs", params.slug)
    .sortBy('date', 'desc')
    .fetch();

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