<template>
  
<div>




 <section class="bg-gray-200">
  <div class="container px-5 py-24 mx-auto">
    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 break-words md:text-5xl lg:text-6xl">Over us.</h1>
         



<div data-v-f58a9f50="" class="p-2 rounded-md tarievenblok bg-gray-50">



<h2 data-v-f58a9f50="" id="energievergelijknl" class="text-xl ">    energievergelijk.nl</h2>


<!---START TableRow--->
<div class="table w-full rounded-xl ">
  <div class="table-row-group">
    <div class="table-row text-purple-100 bg-purple-900 hover:opacity-95">
      <div class="table-cell p-2 uppercase">                          Leverancier   </div>
      <div class="table-cell uppercase">                              Product       </div>
      <div class="table-cell uppercase">                              Prijs         </div>
    </div>
    <div class="table-row result-one hover:bg-gray-100 ">
      <div class="table-cell py-1 pl-2 border-b border-gray-200">   <!--- LEVERANCIER 1 --->              </div>
      <div class="table-cell border-b border-gray-200">             <!---- PRODUCT 1  ----->              </div>
      <div class="table-cell border-b border-gray-200">             <!------PRIJS 1 ------->              </div>
    </div>
   <div class="table-row result-two hover:bg-gray-100">
      <div class="table-cell p-1 pl-2 border-b border-gray-200 ">   <!-----LEVERANCIER 2 ----->           </div>
      <div class="table-cell border-b border-gray-200">             <!---- PRODUCT 2  ----->              </div>
      <div class="table-cell border-b border-gray-200">             <!------PRIJS 2 ------->              </div>
    </div>
  <div class="table-row result-three hover:bg-gray-100">
      <div class="table-cell p-1 pl-2 border-b border-gray-200 ">   <!-----LEVERANCIER 3 ----->           </div>
      <div class="table-cell border-b border-gray-200">             <!---- PRODUCT 1  ----->              </div>
      <div class="table-cell border-b border-gray-200">             <!------PRIJS 3 ------->              </div>
    </div>
  </div>    <!---End TableRow--->
</div>      <!---End Table w-fill---->
 
 <!---Open Close Schermprint-START--->
<div data-v-f58a9f50="" x-data="{show:false}" class="mt-2 ">
    <a data-v-f58a9f50="" x-on:click.prevent="show=!show" x-text="show ? ' > Verberg schermprint' : ' > Toon schermprint'" class="pl-2 text-sm text-gray-400 cursor-pointer rounded-xl focus:outline-none">
     <div>   > Toon schermprint </div>
    </a>
  <div data-v-f58a9f50="" x-show="show" class="tarievenimg" style="display: none;">
      <div class="mt-4 bg-gray-100 rounded-xl ">
          <div class="w-full p-2 text-sm text-center text-gray-400"> om te zien of tarieven correct verwerkt zijn.....</div>
          <img class="p-2 mx-auto rounded-xl" data-v-f58a9f50="" alt="alt text" src="/img/el/energievergelijk-2999kwh-999M3-verbruik-1-jaar-week7.png" title="Vergelijk energietarieven energievergelijk.nl">
      </div>
  </div>
</div>
 <!---Open Close Schermprint-END--->
<!-----MEER OVER BEDRIJF LINK----->
<div class="pl-2 text-sm text-gray-400">
  <a href="/gids/.." title="">> Meer over ....</a>
</div>






</div>
 
  </div>
  </section>




<!-- WERKT direct inline -->

  <!-- <div v-for="bed of bedrijven" :key="bed.slug" class="p-2 m-2 transition duration-500 ease-in-out border-2 border-gray-400 border-opacity-25 border-dashed hover:bg-opacity-10 hover:shadow-xl rounded-xl hover:bg-red-100">
        <NuxtLink :to="{ name: 'gids-slug', params: { slug: bed.slug } }">
          <img :src="bed.logo"  class="m-4 duration-200 ease-in-out transform hover:scale-110"/>
          <div>
            <h2>{{ bed.title }}</h2>
            <p>{{ bed.introtekst }}</p>
          </div>
        </NuxtLink>
      </div>
 -->

<TheTicker/>


</div>

</template>

<script>


  export default {
    // async asyncData({ $content, params }) {
    //   const bedrijven = await $content('gids', params.slug)
    //     .only(['title', 'introtekst', 'logo', 'slug', 'author'])
    //     .sortBy('createdAt', 'asc')
    //     .fetch()

    //   return {
    //     bedrijven
    //   }
    // }
  }
</script>

<style>
.essent {background: violet;}

</style>