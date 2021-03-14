 


 


<template>

  <article class="mx-auto bg-gray-200">
<!----BACGROUND IMAGE----------->
<div class="absolute w-full h-64"  v-bind:style="{ backgroundImage: 'url(' + article.logo + ')'}" style="margin-top:-100px; background-size: 600px; background-repeat:repeat;background-position: center top;filter: grayscale(100%) opacity(5%); transform: rotate(0deg); ">
</div>

    <a name="top"></a>

    <!-- <div class="container px-5 py-24 m-auto bg-gray-200 text-grey-darkest" :style='background-image: url(`article.logo`);'> -->
    <!-- <div class="container px-5 py-24 m-auto bg-gray-200 text-grey-darkest"  v-bind:style="{ backgroundImage: 'url(' + article.logo + ')' }" style="background-repeat:no-repeat; height: 100px;background-size: cover;"> -->
    <div class="container px-5 py-24 m-auto bg-gray-200 text-grey-darkest">



      <h1 class="mt-4 mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 break-words">
       {{ article.title }}.
      </h1>

      <!-- <div class="flex mx-auto mb-4" > -->



<!----LEFT COL----->
        <!-- <div class="w-8/12 p-2 md:w-9/12 lg:w-6/12"> -->
        <div class="grid grid-cols-1 gap-2 md:grid-cols-12 lg:w-9/12">
            <div class=" md:col-span-8">

            

<!----INNER MAIN---->
          <!-- <main class="w-full max-w-full p-8 prose bg-gray-100 rounded-md"> -->
          <main class="p-8 bg-gray-100 rounded-md">
           
           <div class="energieleverancier energievergelijker beschrijving details">

 
                <img :src="article.logo" :alt="article.title" class="inline float-right w-32 md:w-40 " />
              
              
                <p v-html="article.introtekst" class="text-2xl">  </p>
     
    
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
  
 
 
<h2 v-html="article.youtubetitle" ></h2>
<p v-html="article.youtubeintro"  class="pb-8 text-2xl"></p>

<div class="aspect-w-16 aspect-h-9">
<iframe :src="article.youtubevid" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
 
 <h2>Laatste {{ article.title }} nieuws</h2>
 
<nuxt-content :document="article" class="nieuws" />
 


<!-- <TheNews/> -->

           </div>


                            <!-- <div class="text-sm text-white bg-gray-700 small">
                                        <nuxt-content :document="article" />
                            </div> -->
          </main>
        
       </div>
    





<!----RIGHT COL----->
        <!-- <div class="w-full md:w-3/12 lg:w-3/12 xl:w-2/12 2xl:w-2/12"> -->
        <div class="col-span-1 md:col-span-4 max-w-prose">
         



 <div  class="sticky top-0">
         
<!----ASIDE MAIN---->
          <aside class="p-2 border-4 border-gray-300 md:p-8 rounded-xl bg-gradient-to-b from-red-500 to-blue-400">
           
 
  



 <!-- https://laracasts.com/discuss/channels/vue/how-to-replace-a-dot-with-a-comma-for-a-number-in-vuejs 
 komma punt
 -->

            <ul class="flex flex-row flex-wrap text-sm md:flex-col md:text-base">
              <li class="flex-1 m-3 md:m-0" v-if="article.ervaringenklantenvertellen">     
                        <div class="relative">
                            <div class="w-32 h-24 text-gray-200">
                                <div class="absolute p-1">
                                    <div class="text-3xl ">
                                      {{ article.ervaringenklantenvertellen }}

                                      <!-- {{ article.ervaringenklantenvertellen(num).toLocaleString() }} -->

                                    </div>
                                    <div class="text-sm opacity-75 "> Gem. waardering op Klantenvertellen   </div>
                                </div>
                            </div>
                        </div>


              </li>              
              
              <li class="flex-1 m-3 md:m-0"  v-if="article.fansfacebook">        
                        <div class="relative">
                            <div class="w-32 h-24 text-gray-200">
                                <div class="absolute p-1">
                                    <div class="text-3xl ">{{ article.fansfacebook }}</div>
                                    <div class="text-sm opacity-75 "> Fans  op Facebook   </div>
                                </div>
                            </div>
                        </div>
                  
                  
                  
              </li>
            
               <li class="flex-1 m-3 md:m-0"  v-if="article.volgersinstragram">       
                        <div class="relative">
                            <div class="w-32 h-24 text-gray-200">
                                <div class="absolute p-1">
                                    <div class="text-3xl ">{{ article.volgersinstragram }}</div>
                                    <div class="text-sm opacity-75 "> Volgers  op Instragram   </div>
                                </div>
                            </div>
                        </div>
                   
                    
              </li>
        
               <li class="flex-1 m-3 md:m-0"  v-if="article.volgerstwitter">         
                       <div class="relative">
                            <div class="w-32 h-24 text-gray-200">
                                <div class="absolute p-1">
                                    <div class="text-3xl ">{{ article.volgerstwitter }}</div>
                                    <div class="text-sm opacity-75 "> Volgers op Twitter   </div>
                                </div>
                            </div>
                        </div>
                   
                 
              </li>

              <li class="flex-1 m-3 md:m-0" v-if="article.volgersyoutube">
                   <div class="relative">
                            <div class="w-32 h-24 text-gray-200">
                                <div class="absolute p-1">
                                    <div class="text-3xl ">{{ article.volgersyoutube }}</div>
                                    <div class="text-sm opacity-75 "> Volgers  op Youtube   </div>
                                </div>
                            </div>
                        </div>            
              </li>

              <li class="flex-1 m-3 md:m-0">       
                        <div class="relative">
                            <div class="w-32 h-24 text-gray-200">
                                <div class="absolute p-1">
                                    <div class="text-3xl ">{{ article.rankalexa }}</div>
                                    <div class="text-sm opacity-75 "> Wereldwijde website rank    </div>
                                </div>
                            </div>
                        </div>   
              </li>

              <li class="flex-1 m-3 md:m-0">        
                   <div class="relative">
                            <div class="w-32 h-24 text-gray-200">
                                <div class="absolute p-1">
                                    <div class="text-3xl ">{{ article.paginagoogle }}</div>
                                    <div class="text-sm opacity-75 "> Pagina's in Google   </div>
                                </div>
                            </div>
                        </div> 
              </li>
              
              <li>        
              </li>

              <li>        
              </li>
                                          
            </ul>

        <hr class=" opacity-30">
           <!-- <pre class="text-sm bg-gray-700 small"> {{ article }} </pre> -->
           <prev-next :prev="prev" :next="next" class="z-10 w-full mt-4"/> 
           
            <div class="p-2 mt-4 text-center">
              <a href="#top" class="inline-block text-sm opacity-50">
                <img src="~assets/svg/chevron-up.svg" width="10" class="inline"/>
                Naar boven
              </a>
            </div>


          </aside>  

          <div class="block pt-1 pb-0 mb-0 mr-4 text-sm text-right text-gray-400 ">
                Voor het laatst bijgewerkt op: {{ formatDate(article.updatedAt) }}
          </div>
          </div>
       <!-- -ml-7 -->
        
      </div>

      </div>  <!---end GRID----->
      <!-- </div> -->  <!---END div onder h1---->
    </div>  <!---END CONTAINER---->

  </article>
</template>






<script>
import TheNews from '../../components/scraped/TheNews.vue';
import getSiteMeta from "/plugins/getSiteMeta";
const meta = getSiteMeta();

 export default {
  components: { TheNews },


  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("nl", options);
    },
  },



    async asyncData({ $content, params }) {
      const article = await $content('gids', params.slug).fetch()

      const [prev, next] = await $content('gids')
      .only(['title', 'slug', 'logo'])
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

 h2 {color: #111827;
    font-weight: 700;
    font-size: 1.5em;
    margin-top: 2em;
    margin-bottom: 1em;
    line-height: 1.3333333;
}
.nuxt-content ul li::before {width:0px;} 
.nuxt-content ul {list-style: none !important; list-style-type: none !important; margin: 0; padding: 0; font-size:12px; }
.nuxt-content ul li:nth-child(odd)  { list-style-type: none !important; background-color:lightgray;padding:10px; }
.nuxt-content ul li:nth-child(even)  {list-style-type: none !important; background-color: white; z-index: 999; padding:10px; }

 .nuxt-content ul li a  {display: block; font-size:1rem; }
 
</style>