<template>

  <article class="mx-auto ">
      <h1 class="text-5xl ">Energietarieven vergelijken: {{ formatDate(article.createdAt) }}</h1>



<div class="flex w-4/5 mx-auto">
 
    <main  class="prose">
        
        <nuxt-content :document="article" />
    </main>
   
   
    <aside class="sticky top-0 w-1/5 h-screen bg-red-500">
        
        <ul>
          <li v-for="link of article.toc" :key="link.id" :class="{ 'p-0': link.depth === 2, 'hidden': link.depth === 3 }">
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
          </li>
        </ul>
    </aside>

</div>



    

 


    
  </article>
</template>

<script>


 export default {
  
  "toc": [{
    "id": "welcome",
    "depth": 1,
    "text": "Welcome!"
  }],
 

methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('nl', options)
    }
 },

 

    async asyncData({ $content, params }) {
      // fetch our article here
        const article = await $content('articles', params.slug).fetch()

      return { article }
    }
  }
</script>

<style>


h2 .icon.icon-link  {
  background-image: url('~assets/svg/icon-hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}

</style>