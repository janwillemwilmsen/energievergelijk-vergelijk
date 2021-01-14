<template>

  <article class="mx-auto ">
    <a name="top"></a>

<div class="container p-8 m-auto text-grey-darkest">
      <h1 class="text-5xl ">Energietarieven vergelijken: {{ formatDate(article.createdAt) }}</h1>

              <div class="flex mx-auto mb-4">
                  
                   <div class="w-2/4"> 
                          <main  class="prose">
                                <nuxt-content :document="article" />
                        </main>
                  </div>
                <div class="w-1/4 mt-10">

                        <aside class="sticky top-0 p-4 border-4 border-gray-300 rounded-xl bg-gradient-to-b from-red-500 to-blue-400">
                      
                                            <ul class="text-lg ">
                                            <li v-for="link of article.toc" :key="link.id"  class="toc-list" :class="{'p-0': link.depth === 2, 'hidden': link.depth === 3 }">
                                                 <!-- <li v-for="link of article.toc" :key="link.id" :class="{'pl-4': link.depth === 3 }" class="toc-list"  > -->
                                            <NuxtLink 
                                                :to="`#${link.id}`"  
                                                :class="{'text-white hover:text-gray-600'
                                                : link.id === currentlyActiveToc, 'text-blue hover:gray-900'
                                                : link.id !== currentlyActiveToc
                                                      }">
                                                      {{ link.text }}
                                            </NuxtLink>
                                            </li>
                                          </ul>
                             <div class="mt-4"> 
                               <a href="#top" class="inline-block text-sm opacity-50 ">
                                        <img src="~assets/svg/icon-arrow-up.svg" width="10" class="inline ">
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


 export default {
   
  "toc": [{
    "id": "welcome",
    "depth": 1,
    "text": "Welcome!"
  }],

  
   // ActiveTOC
   data() {
    return {
      currentlyActiveToc: "",
      observer: null,
      observerOptions: {
        root: this.$refs.nuxtContent,
        threshold: 0
      }
    };
  }, 

  
 // ActiveTOC
mounted() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        if (entry.isIntersecting) {
          this.currentlyActiveToc = id;
        }
      });
    }, this.observerOptions);

    // Track all sections that have an `id` applied
    document
      .querySelectorAll(".nuxt-content h2[id]")
      .forEach(section => {
        this.observer.observe(section);
      });
  },
  beforeDestroy() {
    this.observer.disconnect();
  },






 

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
body{
  scroll-behavior: smooth;
}

h2 .icon.icon-link  {
  background-image: url('~assets/svg/icon-hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}

</style>