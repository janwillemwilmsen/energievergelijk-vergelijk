 

  <!-- <h1 class="">Hello {{ name }}!</h1> -->
 <template>
 <div>
 <section class="bg-gray-200">
  <div class="container px-5 py-24 mx-auto">





    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 break-words md:text-5xl lg:text-6xl">Archief</h1>
         

                <p class="mt-8 text-2xl">
                Historisch overzicht van de scans.
                </p>

         
                  <ul class="max-w-4xl mt-8">
                        <li v-for="article of articles" :key="article.slug" class="py-4 pl-4 my-4 bg-white border border-gray-500 border-opacity-25 shadow-md rounded-xl">
                            <NuxtLink :to="{ name: 'energie-slug', params: { slug: article.slug } }">
                                <p>{{ article.title }} - {{ formatDate(article.createdAt) }}</p>
                            </NuxtLink>
                        </li>
                  </ul>
 
  </div>
  </section>
  


<!-- <a  id="aanmelden"></a> -->
<!-- <leadForm4 /> -->


<TheFaqs/>


</div>
</template>
 



<script>

// CREATED AT werkt niet. Dat wordt vertaald als DATUM VAN LAATST OPGESLAGEN MOMENT.
// OOK OPLETTEN BIJ AANPASSEN VAN DE .MD Files. Die datum in de titel wordt daarna geupdate.

export default {
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("nl", options);
    },
  },

    async asyncData({ $content, params }) {
      const articles = await $content('articles', params.slug)
        .only(['title', 'createdAt', 'slug', 'author']).sortBy('slug', 'desc').fetch()

      return {
        articles
      }
    },

  head() {
    return {
      title: 'Archief van energievergelijk scans in verschillende energievergelijkers',
      meta: [
        { hid: 'description', name: 'description', content: 'Bekijk de ontwikkeling van energieprijzen voor consumenten in vijf verschillende energievergelijkers' },
        // Open Graph
        { hid: 'og:url', property: 'og:url', content: `https://ikvergelijk.nl` + this.$route.fullPath },
        // { hid: 'og:url', property: 'og:url', content: this.$nuxt.$route.fullPath },
        { hid: 'og:title', property: 'og:title', content: 'Archief van energievergelijk scans in verschillende energievergelijkers' },
        { hid: 'og:description', property: 'og:description', content:  'Bekijk de ontwikkeling van energieprijzen voor consumenten in vijf verschillende energievergelijkers' },
        // Twitter Card
        { hid: 'twitter:url', property: 'twitter:url', content: `https://ikvergelijk.nl` + this.$route.fullPath },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Archief van energievergelijk scans in verschillende energievergelijkers' },
        { hid: 'twitter:description', name: 'twitter:description', content:  'Bekijk de ontwikkeling van energieprijzen voor consumenten in vijf verschillende energievergelijkers' }
      ]
    }
  }

  }
</script>

<style>
  
</style>