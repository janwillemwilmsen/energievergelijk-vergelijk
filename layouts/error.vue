<template>
  <div>
    

<section class="w-full text-center bg-blue-600 h-96" >


            <h1 v-if="error.statusCode === 404" class="p-10 text-white text-1xl md:text-3xl lg:text-5xl">...Pagina niet gevonden...</h1>
            <h1 v-else  class="p-10 text-white text-1xl md:text-3xl lg:text-5xl">An error occurred</h1>

     <nuxt-link to="/" class="underline ">Ga naar de homepage</nuxt-link>.


 <TheAnimationError />  



</section>

    




  </div>
</template>

<script>
import TheAnimationError from '/components/TheAnimationError.vue' 
 
  

export default {
     components: {TheAnimationError},
  props: ['error']
}
</script>

<style>

</style>