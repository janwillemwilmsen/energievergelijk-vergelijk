<template>
  
<div>

<!-- WERKT direct inline -->

  <!-- <div v-for="bed of bedrijven" :key="bed.slug" class="p-2 m-2 transition duration-500 ease-in-out border-2 border-gray-400 border-opacity-25 border-dashed hover:bg-opacity-10 hover:shadow-xl rounded-xl hover:bg-red-100">
        <NuxtLink :to="{ name: 'gids-slug', params: { slug: bed.slug } }">
          <img :src="bed.logo"  class="m-4 duration-200 ease-in-out transform hover:scale-110"/>
          <div>
            <h2>{{ bed.title }}</h2>
            <p>{{ bed.introtekst }}</p>
          </div>
        </NuxtLink>
      </div>
 -->

<TheTicker/>


</div>

</template>

<script>


  export default {
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

</style>