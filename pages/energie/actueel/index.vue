<template>
  <article class="mx-auto bg-gray-200">
    <a name="top"></a>

    <div class="container px-5 py-24 m-auto bg-gray-200 text-grey-darkest print:py-0">
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tighter text-gray-900 break-words md:text-5xl lg:text-6xl">


    <!-- Article Created at werkt niet goed. Wordt overschreven na deploy. Dan wordt het LAATS opgeslagen datum. 
    
    // CREATED AT werkt niet. Dat wordt vertaald als DATUM VAN LAATST OPGESLAGEN MOMENT.
    // OOK OPLETTEN BIJ AANPASSEN VAN DE .MD Files. Die datum in de titel wordt daarna geupdate.
    -->


        Energietarieven vergelijken: {{ formatDate(article.createdAt) }}
      </h1>

      <div class="flex mx-auto mb-4">
        <div class="p-2 w-12/12 md:w-9/12 lg:w-6/12">
          <main class="w-full max-w-full prose">
            <nuxt-content :document="article"/>
          </main>


          <TheCTAvergelijk class="mt-10 print:hidden"/>



<div class="mt-16 mb-4 print:hidden">

Bekijk meer recente energievergelijk scans:

                  <ul class="max-w-4xl mt-8">
                        <li v-for="article of articles" :key="article.slug" class="py-4 pl-4 my-4 bg-white border border-gray-500 border-opacity-25 shadow-md rounded-xl">
                            <NuxtLink :to="{ name: 'energie-slug', params: { slug: article.slug } }">
                                <p>{{ formatDate(article.createdAt) }}  : {{ article.title }} </p>
                            </NuxtLink>
                        </li>
                  </ul>
</div>




        </div>
        <div class="w-1/12 mt-10 md:w-3/12 lg:w-3/12 xl:w-2/12 2xl:w-2/12">
          <!-- <aside class="sticky top-0 hidden p-2 border-4 border-gray-300 md:inline-block md:p-4 rounded-xl bg-gradient-to-b from-red-500 to-blue-400"> -->
          <aside class="sticky top-0 hidden p-2 bg-purple-900 border-4 border-gray-300 md:inline-block md:p-4 rounded-xl">
            <ul class="text-sm truncate md:text-base">
              <li v-for="link of article.toc" :key="link.id" class="text-gray-300 uppercase toc-list"
                :class="{ 'p-0': link.depth === 2, hidden: link.depth === 3 }">
                <!-- <li v-for="link of article.toc" :key="link.id" :class="{'pl-4': link.depth === 3 }" class="toc-list"  > -->
                <NuxtLink :to="`#${link.id}`" :class="{'text-white hover:text-gray-400'
                :link.id === currentlyActiveToc,'text-blue hover:gray-900': link.id !== currentlyActiveToc,}">
                  {{ link.text }}
                </NuxtLink>
              </li>
            </ul>
            <div class="mt-4">
              <a href="#top" class="inline-block text-sm text-white opacity-50">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16"  class="inline text-white fill-current " height="16" fill="currentColor" viewBox="0 0 16 16">
                     <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                </svg>
                Naar boven
              </a>
            </div>

             <SmallCTA/>

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
  toc: [
    {
      id: "welcome",
      depth: 1,
      text: "Welcome!",
    },
  ],

  // ActiveTOC
  data() {
    return {
      currentlyActiveToc: "",
      observer: null,
      observerOptions: {
        root: this.$refs.nuxtContent,
        threshold: 0,
      },
    }
  },

  // ActiveTOC
  mounted() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        if (entry.isIntersecting) {
          this.currentlyActiveToc = id;
        }
      });
    }, this.observerOptions);

    // Track all sections that have an `id` applied
    document.querySelectorAll(".nuxt-content h2[id]").forEach((section) => {
      this.observer.observe(section);
    });
  },
  beforeDestroy() {
    this.observer.disconnect();
  },

  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("nl", options);
    },
  },

  async asyncData({ $content, params }) {
    // fetch our article here
    const article = await $content("articles2", params.slug || 'index')
    .fetch();


// fetch vier vorige articles. Voor onderaand 'Meer recente scans'
     const articles = await $content('articles', params.slug)
        .only(['title', 'description', 'img', 'slug', 'author', 'createdAt']).limit(4)
        .skip(1)
        .sortBy('slug', 'desc')
        .fetch()

    return { article, articles };
  },


  head() {
    return {
      title: 'Energietarieven vergelijken',
      meta: [
        { hid: 'description', name: 'description', content:'Vergelijk actuele energietarieven in de vijf grootste energievergelijkers' },
        // Open Graph
        { hid: 'og:url', property: 'og:url', content: `https://ikvergelijk.nl` + this.$route.fullPath },
        // { hid: 'og:url', property: 'og:url', content: this.$nuxt.$route.fullPath },
        { hid: 'og:title', property: 'og:title', content: 'Energietarieven vergelijken' },
        { hid: 'og:description', property: 'og:description', content: 'Vergelijk actuele energietarieven in de vijf grootste energievergelijkers' },
        // Twitter Card
        { hid: 'twitter:url', property: 'twitter:url', content: `https://ikvergelijk.nl` + this.$route.fullPath },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Energietarieven vergelijken' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Vergelijk actuele energietarieven in de vijf grootste energievergelijkers' }
      ]
    }
  }
 
// computed: {
//   meta() {
//     const metaData = {
//       type: "article",
//       title: this.article.title,
//       description: this.article.description,
//       url: `${this.$config.baseUrl}/energie/${this.$route.params.slug}`,
//       mainImage: this.article.image,
//     };
//     return getSiteMeta(metaData);
//   }
// },

// head() {
//   return {
//     title: this.article.title,
//     meta: [
//       ...this.meta,
//       { property: "article:published_time", content: this.article.createdAt,},
//       { property: "article:modified_time", content: this.article.updatedAt, },
//       { property: "article:tag", content: this.article.tags ? this.article.tags.toString() : ""},
//       { name: "twitter:label1", content: "Written by" },
//       { name: "twitter:data1", content: "Bob Ross" },
//       { name: "twitter:label2", content: "Filed under" },
//       { name: "twitter:data2", content: this.article.tags ? this.article.tags.toString() : "" },
//     ],
//     link: [
//       { hid: "canonical", rel: "canonical", href: `https://ikvergelijk.nl/${this.$route.params.slug}`},
//     ],
//   };
// }




};
</script>


















  


<style>
body {
  scroll-behavior: smooth;
}

 /* .nuxt-content ul li:nth-child(odd)  { background-color:gray;  }
 .nuxt-content ul li:nth-child(even)  {  }  */
 

   

h2 .icon.icon-link {
  background-image: url("~assets/svg/icon-hashtag.svg");
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}

p > img {
  border-radius: 15px;
  border: solid 1px gray;
  /* filter: sepia(1) saturate(250%) hue-rotate(90deg); */
}
/*  -webkit-filter: grayscale(100%);
   filter: grayscale(100%);  */


</style> 


 