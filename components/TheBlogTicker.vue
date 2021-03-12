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
                <h4 class="text-3xl ">{{ blog.title }}</h4>


               <p class="text-lg line-clamp-1 ">  {{blog.paragraaf1}}</p>
                <div class="font-bold tracking-tighter text-gray-600 underline">Lees meer</div>

              </NuxtLink>
      </div>

      <div class="px-4 py-2 mx-auto mt-8 underline bg-yellow-300 rounded-xl">
        <nuxt-link to="/blog">
                Lees meer in de blog
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