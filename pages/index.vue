 

  <!-- <h1 class="">Hello {{ name }}!</h1> -->
 <template>
 <div>
 <section class="bg-gray-200">
  <div class="container px-5 py-24 mx-auto">





    <h1 class="mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 ">Vergelijk de energievergelijkers.</h1>
         

                <p>
                Wij maken het je makkelijk. Ahh nou, we helpen je een beetje bij het vergelijken van energiecontracten.<br>
                Elke week scannen wij vijf energievergelijkers en vijf energieleveranciers. 
                </p>

         
                  <ul class="max-w-4xl mt-4">
                        <li v-for="article of articles" :key="article.slug" class="py-4 pl-4 my-4 bg-white border border-gray-500 border-opacity-25 shadow-md rounded-xl">
                            <NuxtLink :to="{ name: 'energie-slug', params: { slug: article.slug } }">
                                <p>{{ article.slug }}</p>
                            </NuxtLink>
                        </li>
                  </ul>
 
  </div>
  </section>
  



<TheFaqs/>

<leadForm/>

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