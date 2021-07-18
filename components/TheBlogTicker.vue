<template>

<section class="bg-gray-200 bg-cover border-b border-white border-opacity-50 " style="background-image: url(/mac.jpg)">

<div class="container content-center px-5 py-24 mx-auto">
 
  <div class="flex flex-wrap content-center w-full mx-auto lg:w-10/12 xl:w-7/12 ">

       <div v-for="blog of blogs" :key="blog.slug" class="self-center p-2 m-2 mx-auto text-black align-middle transition duration-500 ease-in-out bg-white border-2 border-gray-800 border-opacity-25 border-dashed shadow-lg bg-opacity-80 rounded-xl h-100 ">
        
          <span class="text-sm text-gray-400 ">
              {{blog.mooiedatum}}  
          </span>
              <NuxtLink :to="{ name: 'blog-slug', params: { slug: blog.slug } }">
                    <!-- <img :src="bed.logo" width="150" alt="img"  class="mx-auto duration-200 ease-in-out transform grayimg hover:scale-110"/> -->
                <h3 class="text-2xl font-semibold ">{{ blog.title }}</h3>


               <p class="text-lg line-clamp-1 ">  {{blog.paragraaf1}}</p>
                <div class="p-2 font-bold tracking-tighter text-gray-600 ">
                  
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="z-10 inline w-2 h2 bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                  </svg>
                                  <span class="underline">
                                      Lees meer
                                  </span>
                  </div>

              </NuxtLink>
      </div>

      <div class="px-4 py-3 mx-auto mt-8 space-x-2 font-semibold text-black bg-yellow-400 shadow-sm rounded-xl">
        <nuxt-link to="/blog">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline w-4 h4 bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                </svg>     
                                <span class="underline">
                                Lees meer in de blog
                                </span>
        </nuxt-link>
      </div>


  </div>
  </div>
</section>
</template>

<script>



  export default {
  data() {
    return {
      blogs: []
    }
  },

  async fetch() {
    this.blogs = await this.$content("blogs")
    .limit(2)
    .fetch();
  }

    // async asyncData({ $content, params }) {
    //   const bedrijven = await $content('gids', params.slug)
    //     .only(['title', 'introtekst', 'logo', 'slug', 'author'])
    //     .sortBy('createdAt', 'asc')
    //     .fetch()
    //   return {
    //     bedrijven
    //   }
    // }
  }
</script>

<style>
.grayimg { filter: grayscale(100%) opacity(40%);}
</style>