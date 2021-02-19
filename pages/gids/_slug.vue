 


 


<template>

  <article class="mx-auto bg-gray-200">

<div class="absolute z-0 w-full h-64"  v-bind:style="{ backgroundImage: 'url(' + article.logo + ')'}" style="margin-top:-150px; background-size: 600px; background-repeat:repeat;background-position: center top;filter: grayscale(100%) opacity(5%); transform: rotate(0deg); z-index:100;">
</div>

    <a name="top"></a>

    <!-- <div class="container px-5 py-24 m-auto bg-gray-200 text-grey-darkest" :style='background-image: url(`article.logo`);'> -->
    <!-- <div class="container px-5 py-24 m-auto bg-gray-200 text-grey-darkest"  v-bind:style="{ backgroundImage: 'url(' + article.logo + ')' }" style="background-repeat:no-repeat; height: 100px;background-size: cover;"> -->
    <div class="container px-5 py-24 m-auto bg-gray-200 text-grey-darkest">



      <h1 class="mt-4 mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 break-words">
       {{ article.title }}.
      </h1>

      <div class="flex mx-auto mb-4" >
        <div class="w-8/12 p-2 md:w-9/12 lg:w-6/12">
          <main class="w-full max-w-full p-8 prose bg-gray-100 rounded-md">
           
           <div class="">
                <img :src="article.logo" :alt="article.title" class="inline float-right w-40 mb-1 mr-8 border-black" />
                <p v-html="article.introtekst" class="text-2xl">   
                </p> 
<h2>
{{ article.freefield1 }}
</h2>
<p v-html="article.freefield2"  class="text-2xl"> </p>

<h2>
{{ article.freefield3 }} 
</h2>
<p v-html="article.freefield4"  class="text-2xl"> </p>

<h2>
{{ article.freefield5 }} 
</h2>
<p v-html="article.freefield6"  class="text-2xl">  </p>

 

<!-- <p v-html="article.bedrijfsytintro">  </p> -->
  
 
 
<p v-html="article.youtubeintro"  class="text-2xl"></p>

<div class="aspect-w-16 aspect-h-9">
<iframe :src="article.youtubevid" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
 



           </div>


                            <!-- <div class="text-sm text-white bg-gray-700 small">
                                        <nuxt-content :document="article" />
                            </div> -->
          </main>
        </div>
        <div class="w-4/12 md:w-3/12 lg:w-3/12 xl:w-2/12 2xl:w-2/12">
          <aside class="sticky top-0 p-2 border-4 border-gray-300 md:p-8 rounded-xl bg-gradient-to-b from-red-500 to-blue-400">
           
 
 
  



 <!-- https://laracasts.com/discuss/channels/vue/how-to-replace-a-dot-with-a-comma-for-a-number-in-vuejs 
 komma punt
 -->

            <ul class="text-sm truncate md:text-base">
              <li class="" v-if="article.ervaringenklantenvertellen">     
                        <div class="relative">
                            <div class="w-24 h-24 text-gray-200">
                                <div class="absolute p-1 md:p-2 lg:p-3 pin-t">
                                    <div class="text-3xl ">
                                      {{ article.ervaringenklantenvertellen }}

                                      <!-- {{ article.ervaringenklantenvertellen(num).toLocaleString() }} -->

                                    </div>
                                    <div class="text-sm opacity-75 text-md"> Gem. waardering <br>op Klantenvertellen   </div>
                                </div>
                            </div>
                        </div>


              </li>              
              
              <li class="">        
                        <div class="relative">
                            <div class="w-24 h-24 text-gray-200">
                                <div class="absolute p-1 pin-t">
                                    <div class="text-3xl ">{{ article.fansfacebook }}</div>
                                    <div class="text-sm opacity-75 text-md"> Fans  op Facebook   </div>
                                </div>
                            </div>
                        </div>
                  
                  
                  
              </li>
            
               <li class="">       
                        <div class="relative">
                            <div class="w-24 h-24 text-gray-200">
                                <div class="absolute p-1 pin-t">
                                    <div class="text-3xl ">{{ article.volgersinstragram }}</div>
                                    <div class="text-sm opacity-75 text-md"> Volgers  op Instragram   </div>
                                </div>
                            </div>
                        </div>
                   
                    
              </li>
        
               <li class="">         
                       <div class="relative">
                            <div class="w-24 h-24 text-gray-200">
                                <div class="absolute p-1 pin-t">
                                    <div class="text-3xl ">{{ article.volgerstwitter }}</div>
                                    <div class="text-sm opacity-75 text-md"> Volgers op Twitter   </div>
                                </div>
                            </div>
                        </div>
                   
                 
              </li>

              <li class="">
                   <div class="relative">
                            <div class="w-24 h-24 text-gray-200">
                                <div class="absolute p-1 pin-t">
                                    <div class="text-3xl ">{{ article.volgersyoutube }}</div>
                                    <div class="text-sm opacity-75 text-md"> Volgers  op Youtube   </div>
                                </div>
                            </div>
                        </div>            
              </li>

              <li class="">       
                        <div class="relative">
                            <div class="w-24 h-24 text-gray-200">
                                <div class="absolute p-1 pin-t">
                                    <div class="text-3xl ">{{ article.rankalexa }}</div>
                                    <div class="text-sm opacity-75 text-md"> Wereldwijde website rank    </div>
                                </div>
                            </div>
                        </div>   
              </li>

              <li class="">        
                   <div class="relative">
                            <div class="w-24 h-24 text-gray-200">
                                <div class="absolute p-1 pin-t">
                                    <div class="text-3xl ">{{ article.paginagoogle }}</div>
                                    <div class="text-sm opacity-75 text-md"> Pagina's in Google   </div>
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
       <prev-next :prev="prev" :next="next" class="relative z-10 "/>
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