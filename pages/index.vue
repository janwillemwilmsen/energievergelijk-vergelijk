<template>
<div>

  <!-- <h1 class="">Hello {{ name }}!</h1> -->
 <template>
  <div class="container p-8 m-auto text-grey-darkest">

    <h1 class="text-5xl ">ik vergelijk energievergelijkers en energieleveranciers</h1>
         

                <p>
                  Elke week scannen wij vijf energievergelijkers en vijf energieleveranciers. 
                </p>

         
                  <ul class="mt-4">
                        <li v-for="article of articles" :key="article.slug">
                            <NuxtLink :to="{ name: 'energie-slug', params: { slug: article.slug } }">
                                <p>{{ article.slug }}</p>
                            </NuxtLink>
                        </li>
                  </ul>
 
  </div>
</template>

</div>
  
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const articles = await $content('articles', params.slug)
        .only(['title', 'description', 'img', 'slug', 'author'])
        .sortBy('createdAt', 'desc')
        .fetch()

      return {
        articles
      }
    }
  }
</script>

<style>
  
</style>