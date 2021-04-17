

<template>
     <!-- <div class="block " > -->
 <section class="bg-gray-900 border-b border-white border-opacity-50 ">

 

       <div class="container px-5 py-24 mx-auto ">
   
         <!-- <div class="p-8 border border-gray-500 border-opacity-25 rounded-xl"> -->
         <div class="p-8 ">


            <h2 class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-white break-words sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl opacity-80 ">Veelgestelde vragen.</h2>


         <div  class="text-gray-600 faqs" itemscope  itemtype="https://schema.org/FAQPage">

                              <div  class="faq" v-for="accordion in accordions" :key="accordion.title">
                                <BaseAccordion>
                                
                                  <template v-slot:title class="">
                                        {{ accordion.title }}
                                  </template>

                                    <template v-slot:content>
                                      <div>   <div class="text-xl" v-html="accordion.text"></div> </div>
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
          title: "Wat is de beste energievergelijker?",
          text: "Er is niet sprake van één beste energievergelijker. Dit komt omdat energievergelijkers geld verdienen aan de contracten die ze aanbieden, en elke energievergelijker met andere partijen afspraken heeft. Hierdoor kan het aanbod en ook de keuze per energievergelijker verschillen en is er niet één partij als beste aan te wijzen."
        },
        {
          title: "Hoe vergelijk je energieleveranciers?",
          text: "Het is belangrijk om te kijken naar de prijs. Echter, niet elke energievergelijker biedt contracten aan bij elke energieleverancier. Het is ook belangrijk om te kijken naar hoe <a class='underline' href='/blog/tips-waarop-te-letten-bij-overstappen'>prijzen zijn opgebouwd</a>."
        },

        {
          title: "Waarom vergelijken jullie maar 5 vergelijkers en 5 energieleveranciers?",
          text: "We vergelijken diverse vergelijkers, waar meer dan 5 energievergelijkers naar voren komen. Daarnaast vergelijken we als extra service 5 grote leveranciers, die zelf een andere prijs aan kunnen bieden dan dat er op energievergelijkers geboden wordt."
        },


        {
          title: "Hoe verdienen jullie geld?",
          text: "Wij hebben geen winstoogmerk. We bieden deze service gratis aan, hebben geen prijsafspraken met energieleveranciers of vergelijkers, en verdienen daarmee geen geld met dit initiatief. "
        },


        {
          title: "Zijn jullie onafhankelijk?",
          text: "Wij zijn volledig onafhankelijk en hebben geen (prijs)afspraken met energieleveranciers of vergelijkers."
        },
        {
          title: "Zijn jullie een energievergelijker?",
          text: "Nee niet direct. We vergelijken de energieprijsvergelijkers. We geven inzicht in de prijsverschillen tussen de verschillende energievergelijkers. Daarnaast schrijven we blogs over de energiemarkt en verzamelen en presenteren we informatie over energiebedrijven."
        },

      
      ]
    };
  }
};
</script>

<style>



</style>