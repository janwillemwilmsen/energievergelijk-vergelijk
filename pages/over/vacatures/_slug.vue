<template>
<article class="mx-auto bg-gray-200">
    <!-- <a name="top"></a> -->

<div class="container px-5 py-24 m-auto bg-gray-200 text-grey-darkest">
    
    
    
      <h1 class="mt-4 mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 break-words">
            Vacature:   {{vacature.vacaturenaam}}.
      </h1>
     
      <p class="my-8 text-2xl">
                {{ vacature.titel }}
      </p>
  
  
      <div>
          <p class="mb-4 text-xl">
                {{ vacature.intro   }}
          </p>

          <p class="mb-4 text-xl">
               {{ vacature.about   }}
          </p>

          <p class="mb-4 text-xl">
               {{ vacature.salaris }}
          </p>

          <p class="mb-4 text-xl">
               {{ vacature.procedure }}
          </p>
  

 
<br>
 <p class="my-8 text-2xl">
Interesse? <nuxt-link :to="{ path:'/over', hash:'#contact'}"  @click.native="scroll" class="underline ">Neem contact op!</nuxt-link><br><br>
</p>
 




 <script type="application/ld+json">
    {
      "@context" : "{{ vacature.context }}",
      "@type" : "{{ vacature.type }}",
      "title" : "{{ vacature.title }}",
      "description" : "{{ vacature.description }}",
      "identifier": {
        "@type": "{{ vacature.identifiertype }}",
        "name": "{{ vacature.identifiername }}",
        "value": "{{ vacature.identifiervalue }}"
      },
      "datePosted" : "{{ vacature.datePosted }}",
      "validThrough" : "{{ vacature.validThrough }}",
      "applicantLocationRequirements": {
        "@type": "{{ vacature.applicantLocationRequirementstype }}",
        "name": "{{ vacature.applicantLocationRequirementsname }}"
      },
      "jobLocationType": "{{ vacature.jobLocationType }}",
      "employmentType": "{{ vacature.employmentType }}",
      "hiringOrganization" : {
        "@type" : "{{ vacature.hiringOrganizationtype }}",
        "name" : "{{ vacature.hiringOrganizationname }}",
        "sameAs" : "{{ vacature.hiringOrganizationsameAs }}",
        "logo" : "{{ vacature.hiringOrganizationlogo }}"
      },
     "baseSalary": {
        "@type": "{{ vacature.baseSalary }}",
        "currency": "{{ vacature.currency}}",
        "value": {
          "@type": "{{ vacature.valuetype }}",
          "value": {{ vacature.valuevalue }},
          "unitText": "{{ vacature.valueunitText }}"
        }
      }
    }
    </script>
  </div>


  </div>
  </article>
</template>

<script>
import getSiteMeta from "/plugins/getSiteMeta";
const meta = getSiteMeta();


export default {

    async asyncData({ $content, params }) {
    // fetch our article here
    const vacature = await $content("vacatures", params.slug).fetch();

    return { vacature };
  },

  head() {
    return {
      title: this.vacature.seotitle,
      meta: [
        { hid: 'description', name: 'description', content: this.vacature.metadescription },
        // Open Graph
        { hid: 'og:url', property: 'og:url', content: `https://ikvergelijk.nl` + this.$route.fullPath },
        // { hid: 'og:url', property: 'og:url', content: this.$nuxt.$route.fullPath },
        { hid: 'og:title', property: 'og:title', content: this.vacature.seotitle },
        { hid: 'og:description', property: 'og:description', content: this.vacature.metadescription },
        // Twitter Card
        { hid: 'twitter:url', property: 'twitter:url', content: `https://ikvergelijk.nl` + this.$route.fullPath },
        { hid: 'twitter:title', name: 'twitter:title', content: this.vacature.seotitle },
        { hid: 'twitter:description', name: 'twitter:description', content: this.vacature.metadescription }
      ]
    }
  },


  methods: {
    scroll() {
      // your scroll function, probably reading document.documentElement.scrollTop or similar
    // if necessary check this.$route if the hash is already present, if so only do it in that case...
    }
    }

}
</script>

<style>

</style>

 