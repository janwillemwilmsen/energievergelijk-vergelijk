 

  <!-- <h1 class="">Hello {{ name }}!</h1> -->
 <template>
 <div>





 <section class="bg-gray-200">
  <div class="container px-5 py-24 mx-auto">





    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 break-words md:text-5xl lg:text-6xl">Vergelijk de energievergelijkers.</h1>
         

                <p class="mt-8 text-2xl font-semibold">
                Wij maken het je makkelijk. We helpen je bij het vergelijken van energiecontracten.<br>
                Elke week scannen wij vijf energievergelijkers en vijf energieleveranciers. 

         
                <!-- Kies een van de scenario's die het meest lijkt op jouw thuissituatie:  -->
                </p>

<div class="container">

 <p class="mt-8 text-2xl font-semibold text-gray-900 ">Waar scoor jij het beste energiecontract?</p>
<button class="relative flex items-center px-4 py-3 mt-8 space-x-2 font-semibold text-gray-900 shadow-sm rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 "> 
<nuxt-link to="/energie/actueel">
                         
                         <div class="absolute inset-0 z-0 w-full h-full rounded-xl ring-4 ring-yellow-600 animate-pulse ring-opacity-50 ">
                         </div>
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="z-10 inline w-4 h4 bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                  </svg>
                                
                                  <span class="z-10 ">
                                      Bekijk en vergelijk actuele energietarieven nu.
                                  </span>

</nuxt-link>
</button>
 
</div>
<hr style="color:black;"> 
    <p class="w-full mx-auto mt-20 text-center ">
          

            <img src="~assets/svg/check-gray.svg" class="inline-block w-20 h-20 mr-4 border-0 opacity-100 ">
             <span class="text-5xl font-extrabold tracking-tighter text-gray-800 opacity-10">
             100% onafhankelijk en eerlijk.
             </span>
    </p>
<!-- 
 <div class="container flex flex-col flex-wrap p-2 ml-8 md:flex-row">
    
    <nav class="flex flex-wrap text-base ">
    
      
       
    </nav>
   
  </div> -->


                  <!-- <ul class="max-w-4xl mt-8">
                        <li v-for="article of articles" :key="article.slug" class="py-4 pl-4 my-4 bg-white border border-gray-500 border-opacity-25 shadow-md rounded-xl">
                            <NuxtLink :to="{ name: 'energie-slug', params: { slug: article.slug } }">
                                <p>{{ article.title }}</p>
                            </NuxtLink>
                        </li>
                  </ul> -->
 




  </div>
  </section>
  


<a  id="aanmelden"></a>
<leadForm4 />

<TheTicker/>

<TheBlogTicker/>
<TheFaqsHomepage/>
<!-- <TheFaqs/> -->

<!-- http://localhost:3000/_content/articles?only=slug&only=createdAt -->



<TheCTA/>


</div>
</template>
 

<script>
import TheFaqsHomepage from '../components/TheFaqs/TheFaqsHomepage.vue'

// CREATED AT werkt niet. Dat wordt vertaald als DATUM VAN LAATST OPGESLAGEN MOMENT.  --> werkt niet  .sortBy('createdAt', 'desc').fetch()
// OOK OPLETTEN BIJ AANPASSEN VAN DE .MD Files. Die datum in de titel wordt daarna geupdate.
// Of en dat kan ook. Na aanpassen van de MD's, heb intro met Title toegevoed is de Created at datum weggevallen.

  export default {
  components: { TheFaqsHomepage },
    async asyncData({ $content, params }) {
      const articles = await $content('articles', params.slug)
        .only(['title', 'description', 'img', 'slug', 'author']).limit(4)
        .sortBy('slug', 'desc')
        .fetch()
        // .sortBy('date', 'desc').fetch()

  
      return {
        articles,
      
      }
    }


    
  }
</script>

<style>
  
</style>