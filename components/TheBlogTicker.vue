<template>

<section class="bg-gray-200 bg-cover h-96" style="background-image: url(/mac.jpg)">

<div class="container content-center px-5 py-8 mx-auto">
 
  <div class="flex flex-wrap content-center w-full mx-auto lg:w-10/12 xl:w-7/12 ">

       <div v-for="blog of blogs" :key="blog.slug" class="self-center p-2 m-2 mx-auto text-black align-middle transition duration-500 ease-in-out bg-white bg-opacity-50 rounded-xl">
        
          <span class="text-sm ">
              {{blog.mooiedatum}}  
          </span>
              <NuxtLink :to="{ name: 'blog-slug', params: { slug: blog.slug } }">
                    <!-- <img :src="bed.logo" width="150" alt="img"  class="mx-auto duration-200 ease-in-out transform grayimg hover:scale-110"/> -->
                <h4 class="text-xl ">{{ blog.title }}</h4>


               <p class="line-clamp-1 ">  {{blog.paragraaf1}}</p>
                <div>Lees meer</div>

              </NuxtLink>
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
    this.blogs = await this.$content("blogs").fetch();
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