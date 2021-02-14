 


 


<template>

  <article class="mx-auto bg-gray-200">

    <a name="top"></a>
   <prev-next :prev="prev" :next="next" />

    <div class="container px-5 py-24 m-auto bg-gray-200 text-grey-darkest">
      <h1 class="mt-4 mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 break-words">


    <!-- Article Created at werkt niet goed. Wordt overschreven na deploy. Dan wordt het LAATS opgeslagen datum. 
    
    // CREATED AT werkt niet. Dat wordt vertaald als DATUM VAN LAATST OPGESLAGEN MOMENT.
    // OOK OPLETTEN BIJ AANPASSEN VAN DE .MD Files. Die datum in de titel wordt daarna geupdate.
    -->


       {{ article.title }}.
      </h1>

      <div class="flex mx-auto mb-4">
        <div class="w-8/12 p-2 md:w-9/12 lg:w-6/12">
          <main class="w-full max-w-full prose">
           
           <div>
                <img :src="article.logo" :alt="article.title" class="float-left mb-1 mr-4" />
                  {{ article.introtekst }}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis non esse consectetur dolores debitis! 
                Atque fugit, repellat, optio delectus beatae obcaecati veritatis neque eligendi ratione reprehenderit 
                voluptatem perspiciatis magnam labore?
<h2>
{{ article.freefield1 }}
</h2>
<p>
{{ article.freefield2 }}
</p>

<h2>
{{ article.freefield3 }} 
</h2>
<p>
{{ article.freefield4 }}
</p>

 

  
 



           </div>


                            <!-- <div class="text-sm text-white bg-gray-700 small">
                                        <nuxt-content :document="article" />
                            </div> -->
          </main>
        </div>
        <div class="w-4/12 mt-10 md:w-3/12 lg:w-3/12 xl:w-2/12 2xl:w-2/12">
          <aside
            class="sticky top-0 p-2 border-4 border-gray-300 md:p-4 rounded-xl bg-gradient-to-b from-red-500 to-blue-400">
           
 
 
  



 <!-- https://laracasts.com/discuss/channels/vue/how-to-replace-a-dot-with-a-comma-for-a-number-in-vuejs 
 komma punt
 -->

            <ul class="text-sm truncate md:text-base">
              <li class="mb-2" v-if="article.ervaringenklantenvertellen">     
                        <div class="relative">
                            <div class="w-24 h-24 rounded-full opacity-75 bg-circle">
                                <div class="absolute p-2 ml-8 pin-t">
                                    <div class="text-3xl ">
                                      {{ article.ervaringenklantenvertellen }}

                                      <!-- {{ article.ervaringenklantenvertellen(num).toLocaleString() }} -->

                                    </div>
                                    <div class="text-sm opacity-75 text-md"> Gem. waardering <br>op Klantenvertellen   </div>
                                </div>
                            </div>
                        </div>


              </li>              
              
              <li class="mb-2">        
                        <div class="relative">
                            <div class="w-24 h-24 rounded-full opacity-75 bg-circle">
                                <div class="absolute p-2 ml-8 pin-t">
                                    <div class="text-3xl ">{{ article.fansfacebook }}</div>
                                    <div class="text-sm opacity-75 text-md"> Fans  op Facebook   </div>
                                </div>
                            </div>
                        </div>
                  
                  
                  
              </li>
            
               <li class="mb-2">       
                        <div class="relative">
                            <div class="w-24 h-24 rounded-full opacity-75 bg-circle">
                                <div class="absolute p-2 ml-8 pin-t">
                                    <div class="text-3xl ">{{ article.volgersinstragram }}</div>
                                    <div class="text-sm opacity-75 text-md"> Volgers  op Instragram   </div>
                                </div>
                            </div>
                        </div>
                   
                    
              </li>
        
               <li class="mb-2">         
                       <div class="relative">
                            <div class="w-24 h-24 rounded-full opacity-75 bg-circle">
                                <div class="absolute p-2 ml-8 pin-t">
                                    <div class="text-3xl ">{{ article.volgerstwitter }}</div>
                                    <div class="text-sm opacity-75 text-md"> Volgers op Twitter   </div>
                                </div>
                            </div>
                        </div>
                   
                 
              </li>

              <li class="mb-2">
                   <div class="relative">
                            <div class="w-24 h-24 rounded-full opacity-75 bg-circle">
                                <div class="absolute p-2 ml-8 pin-t">
                                    <div class="text-3xl ">{{ article.volgersyoutube }}</div>
                                    <div class="text-sm opacity-75 text-md"> Volgers  op Youtube   </div>
                                </div>
                            </div>
                        </div>            
              </li>

              <li class="mb-2">       
                        <div class="relative">
                            <div class="w-24 h-24 rounded-full opacity-75 bg-circle">
                                <div class="absolute p-2 ml-8 pin-t">
                                    <div class="text-3xl ">{{ article.rankalexa }}</div>
                                    <div class="text-sm opacity-75 text-md"> Wereldwijde website rank    </div>
                                </div>
                            </div>
                        </div>   
              </li>

              <li class="mb-2">        
                   <div class="relative">
                            <div class="w-24 h-24 rounded-full opacity-75 bg-circle">
                                <div class="absolute p-2 ml-8 pin-t">
                                    <div class="text-3xl ">{{ article.paginagoogle }}</div>
                                    <div class="text-sm opacity-75 text-md"> Aantal pagina's in Google   </div>
                                </div>
                            </div>
                        </div> 
              </li>
              
              <li>        
              </li>

              <li>        
              </li>
                                          
            </ul>


           <!-- <pre class="text-sm bg-gray-700 small"> {{ article }} </pre> -->
           
            <div class="mt-4">
              <a href="#top" class="inline-block text-sm opacity-50">
                <img
                  src="~assets/svg/icon-arrow-up.svg"
                  width="10"
                  class="inline"
                />
                Naar boven
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </article>
</template>






<script>
import getSiteMeta from "/plugins/getSiteMeta";
const meta = getSiteMeta();

 export default {
    async asyncData({ $content, params }) {
      const article = await $content('gids', params.slug).fetch()

      const [prev, next] = await $content('gids')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

      return { 
            article,
            prev,
            next 
            }
    },


    
 head() {
    return {
      title: this.article.title,
      meta: [
        { hid: 'description', name: 'description', content: this.article.description },
        // Open Graph
        { hid: 'og:url', property: 'og:url', content: `https://ikvergelijk.nl` + this.$route.fullPath },
        // { hid: 'og:url', property: 'og:url', content: this.$nuxt.$route.fullPath },
        { hid: 'og:title', property: 'og:title', content: this.article.title },
        { hid: 'og:description', property: 'og:description', content: this.article.description },
        // Twitter Card
        { hid: 'twitter:url', property: 'twitter:url', content: `https://ikvergelijk.nl` + this.$route.fullPath },
        { hid: 'twitter:title', name: 'twitter:title', content: this.article.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.article.description }
      ]
    }
  }

    
  }
</script>

<style>
.bg-circle {
  background: linear-gradient(
    45deg,
    white 0%,
    transparent 80%
  );
}
</style>