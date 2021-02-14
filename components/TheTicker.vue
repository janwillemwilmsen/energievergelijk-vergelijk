<template>

<section class="bg-gray-200">

<div class="container content-center mx-auto h-60 md:h-40">
  <!-- <client-only>
<marquee-text>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.
</marquee-text>
  </client-only> -->
  <div class="flex flex-wrap content-center h-40 ">

       <div v-for="bed of bedrijven" :key="bed.slug" class="self-center w-40 mx-auto align-middle transition duration-500 ease-in-out">
        <NuxtLink :to="{ name: 'gids-slug', params: { slug: bed.slug } }">
          <img :src="bed.logo" width="100" alt="img"  class="mx-auto duration-200 ease-in-out transform grayimg hover:scale-110"/>
          <!-- <div> -->
            <!-- <h2>{{ bed.title }}</h2> -->
            <!-- <p>{{ bed.introtekst }}</p> -->
          <!-- </div> -->
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
      bedrijven: []
    }
  },

  async fetch() {
    this.bedrijven = await this.$content("gids").fetch();
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
.grayimg { filter: grayscale(100%) opacity(30%);}
</style>