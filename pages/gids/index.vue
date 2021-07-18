<template>
  <article class="mx-auto bg-gray-200">
    <a name="top"></a>

    <div class="container px-5 py-24 m-auto bg-gray-200 text-grey-darkest">
      <h1 class="mt-4 mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 break-words">Bedrijfsgids.</h1>
      <p class="mt-8 text-2xl">
        Met beschrijvingen van zowel energieleveranciers als energievergelijkers.
      </p>






<div class="grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

    <div v-for="article of articles" :key="article.slug"  class="max-w-sm m-4 overflow-hidden transition duration-500 ease-in-out bg-white border-2 border-gray-400 border-opacity-25 border-dashed shadow-lg h-100 hover:bg-opacity-10 hover:shadow-xl rounded-xl hover:bg-red-100">
    <NuxtLink :to="{ name: 'gids-slug', params: { slug: article.slug } }">
      <div class="flex flex-col min-h-full">
       
          <div class="text-xl text-center"> 
                <img   :src="article.logo"    height="10"   class="p-4 duration-200 ease-in-out transform hover:scale-110"/>
            </div>
        
        <div class="flex-grow px-4 pb-4 ">
                       <!-- <h2>{{ article.title }}</h2> -->
                        
                        <p class="line-clamp-3 ">{{ article.introtekst }}</p>
        </div>
        <div class="flex px-5 py-3 bg-gray-100 border-t hover:bg-gray-200">
         
                     <div class="inline w-full py-2 font-bold text-gray-800 rounded ">


                        <div class="flex items-center ">
                          <div class=" een">
                            

                                    <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor"  width="20"  class="inline-block">
                                      <path  stroke-linecap="round" stroke-linejoin="round"  stroke-width="2" d="M9 5l7 7-7 7"/>
                                    </svg>
                                    

                          </div>
                          <div class="ml-2 twee">

                                    <div class="text-sm underline ">
                                        Meer over {{ article.title }}
                                    </div>

                          </div>
                        </div>

                    
                    
                    </div>


        </div>
      </div>
      </NuxtLink>
    </div>
   

</div>



      <!-- <div class="grid grid-cols-1 mt-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
         <div v-for="article of articles" :key="article.slug"  class="flex flex-col transition duration-500 ease-in-out border-2 border-gray-400 border-opacity-25 border-dashed h-100 hover:bg-opacity-10 hover:shadow-xl rounded-xl hover:bg-red-100">
           <NuxtLink :to="{ name: 'gids-slug', params: { slug: article.slug } }">
         
                  <div class="h-20 bg-yellow-400 card-header-img">

                      <img   :src="article.logo"    height="30"   class="m-4 duration-200 ease-in-out transform hover:scale-110"/>

                  </div>
                  <div class="card-text h-60">

                        <h2>{{ article.title }}</h2>
                        
                        <p>{{ article.introtekst }}</p>

                  </div>       
                  <div class="bottom-0 mx-auto card-footer">
            
                      <button class="bottom-0 inline-flex items-center w-full px-4 py-2 font-bold text-gray-800 bg-gray-300 rounded hover:bg-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor"  width="20"  class="inline-block mt-4">
                          <path  stroke-linecap="round" stroke-linejoin="round"  stroke-width="2" d="M9 5l7 7-7 7"/>
                        </svg>
                      <span class="inline-flex underline align-bottom">Lees meer</span>
                      </button>
                    
                    </div>
          
          </NuxtLink>
        </div>
      </div> -->
    </div>
  </article>
</template>

<script>

export default {
head() {
    return {
      title: 'Energiebedrijf en energievergelijkers beschreven',
      meta: [
        { hid: 'description', name: 'description', content: 'Lees meer over de vijf grootste energievergelijkers'},
        // Open Graph
        { hid: 'og:url', property: 'og:url', content: `https://ikvergelijk.nl` + this.$route.fullPath },
        // { hid: 'og:url', property: 'og:url', content: this.$nuxt.$route.fullPath },
        { hid: 'og:title', property: 'og:title', content: 'Energiebedrijf en energievergelijkers beschreven' },
        { hid: 'og:description', property: 'og:description', content:  'Lees meer over de vijf grootste energievergelijkers'},
        // Twitter Card
        { hid: 'twitter:url', property: 'twitter:url', content: `https://ikvergelijk.nl` + this.$route.fullPath },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Energiebedrijf en energievergelijkers beschreven' },
        { hid: 'twitter:description', name: 'twitter:description', content:  'Lees meer over de vijf grootste energievergelijkers'}
      ]
    }
  },

  async asyncData({ $content, params }) {
    const articles = await $content("gids", params.slug)
      .only(["title", "introtekst", "logo", "slug", "bedrijfsnaam"])
      .sortBy("createdAt", "asc")
      .fetch();

    return {
      articles,
    };


    
  },
};
</script>

<style>
</style>