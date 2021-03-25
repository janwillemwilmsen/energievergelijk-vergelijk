<template>
    <div class="mt-4">
                       <nuxt-link :to="{ path: '/', hash:'aanmelden'}" class="z-10 pt-2">
                      <button class="inline-flex items-center px-1 py-1 text-sm text-gray-800 uppercase bg-yellow-400 border-0 rounded focus:outline-none hover:bg-yellow-500 md:mt-0">
                           <!-- <img src="~assets/svg/chevron-right.svg" width="10"  class="inline"/> -->
                           
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                                    
                            
                            Persoonlijk overzicht
                      </button>
                       </nuxt-link>
            </div>
</template>

<script>
export default {

}
</script>

<style>

</style>