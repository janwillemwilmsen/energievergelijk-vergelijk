<template>
  <section class="">

<div class="flex p-6 text-center bg-opacity-50 border border-white rounded-full shadow-2xl fade justify-evenly">


              <div class="">
                    <h2 class="text-xl tracking-tighter text-gray-200 ">Ook zo'n overzicht in je email?</h2>
                    <!-- <p>Meld je aan</p> -->
              </div>


                  <nuxt-link :to="{ path: '/', hash:'aanmelden'}" class="z-10">
                      <button  class="inline-flex items-center px-3 py-1 mt-4 text-xl text-gray-800 uppercase bg-yellow-400 border-0 rounded-full focus:outline-none hover:bg-yellow-500 md:mt-0">
                              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h24M12 5l7 7-7 7"></path>
                              </svg>
                            &nbsp; Persoonlijk overzicht
                      </button>
                  </nuxt-link>





</div>

  </section>


</template>

<script>
export default {

}
</script>

<style>
.fade {
  background: url('~assets/bg-fade.png');
  background-size: cover;
}

</style>