

<template>
     <!-- <div class="block " > -->
 <section class="bg-gray-900 ">

 

       <div class="container px-5 py-24 mx-auto ">
   
         <div class="p-4 border border-gray-500 border-opacity-25 rounded-xl">


            <h2 class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 break-words sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Veelgestelde vragen</h2>


         <div  class="text-gray-600 faqs" itemscope  itemtype="https://schema.org/FAQPage">

                              <div  class="faq" v-for="accordion in accordions" :key="accordion.title">
                                <BaseAccordion>
                                
                                  <template v-slot:title class="">
                                        {{ accordion.title }}
                                  </template>

                                    <template v-slot:content>
                                      <div>   <div v-html="accordion.text"></div> </div>
                                  </template>

                                </BaseAccordion>
                              </div>
        </div>
         </div>  <!---end mini container om H2 en faqs---->
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