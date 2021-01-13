<template>
<div>

  <!-- <h1 class="">Hello {{ name }}!</h1> -->
 <template>
  <div>
    <h1 class="text-5xl ">BOEM</h1>
         <ul>
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
        .sortBy('createdAt', 'asc')
        .fetch()

      return {
        articles
      }
    }
  }
</script>

<style>
  
</style>