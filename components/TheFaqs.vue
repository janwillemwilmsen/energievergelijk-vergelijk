

<template>
     <!-- <div class="block " > -->
 <section class="bg-blue-600">

       <div class="container px-5 py-24 mx-auto ">
            <h2 class="mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 ">Veelgestelde vragen.</h2>


         <div  class="faqs " itemscope  itemtype="https://schema.org/FAQPage">

                              <div  class="faq" v-for="accordion in accordions" :key="accordion.title">
                                <BaseAccordion>
                                
                                  <template v-slot:title>
                                        {{ accordion.title }}
                                  </template>

                                    <template v-slot:content>
                                      <div>   <div v-html="accordion.text"></div> </div>
                                  </template>

                                </BaseAccordion>
                              </div>
        </div>
        </div>
        <!-- </div> -->
 </section>
</template>

<script>
import BaseAccordion from '@/components/global/BaseAccordion'

export default {
  components: {
    BaseAccordion
  },
  data() {
    return {
      accordions: [
        {
          title: "Wat is ?",
          text: "All about <br><br> Vue"
        },
        {
          title: "Wat is dat ?",
          text: "All about Nuxt"
        },

        {
          title: "Wat kost dat?",
          text: "All about Nuxt"
        },


        {
          title: "Waar ?",
          text: "All about Nuxt"
        },


        {
          title: "Hoe weten ?",
          text: "All about Nuxt"
        },


      
      ]
    };
  }
};
</script>

<style>



</style>