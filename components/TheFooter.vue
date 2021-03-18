 <template>
 
 
 <footer class="text-gray-400 bg-gray-900 body-font print:hidden pt-14"> 

  <div class="container flex flex-col items-center content-center w-full mx-auto sm:items-start sm:flex-row">
   
    <div class="w-1/12 m-2 text-center">
          <a href="/" title="Vergelijk energievergelijkers" class="text-center text-white">
                <TheAnimationAtom  style="width:70%;height:70%;" class="ml-2 text-center" />
          </a>
   </div>
<div class="w-2/12 p-2 m-2 border-t border-white border-opacity-30">
          <div class="inline-block mx-auto bg-red-500 place-self-center place-content-center ">

          <a href="/over" title="Vergelijk energievergelijkers" class="text-center text-white ">
                MENU:<br>
                Over ons<br>
                Over ons sdsdsd<br>
                Over ons
          </a>
          </div>
   </div>

   <div class="w-4/12 p-2 m-2 border-t border-white border-opacity-30 ">
                  <div class="flex flex-col items-center self-center mx-auto text-center md:flex-row md:flex-wrap">
                          <p class="mx-auto text-center ">Share:</p>
                          <TheSocialButtons/> 
                  </div>
    </div>
     <div class="w-2/12 p-2 m-2 text-center border-t border-white border-opacity-30 ">
           Instaleer:<br>
            <!-- <ThePWA/>  -->
    </div>


   <div class="w-2/12 p-2 m-2 text-center border-t border-white border-opacity-30 ">Volg:<br>
            <div class="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
              <a rel="nofollow noopener" target="_blank" aria-label="Social network Share button" href="https://fb.me/ikvergelijk" class="text-gray-400">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a rel="nofollow noopener" target="_blank" aria-label="Social network Share button" href="https://twitter.com/ikvergelijknl" class="ml-3 text-gray-400">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
            </div>
  </div>
  </div>
  <p class="pt-8 text-sm text-center text-gray-600 ">
      ©2021  
      
     

    </p>

</footer>

<!-- import lottie from './TheAnimation.vue'                    -->
<!-- import TheAnimation from './TheAnimation.vue'   TheAnimation -->

 </template>
 
 <script>
import TheAnimationAtom from './TheAnimationAtom.vue' 
import ThePWA from './ThePWA.vue'
import TheSocialButtons from './TheSocialButtons.vue'

 export default {
  components: {ThePWA, TheAnimationAtom, TheSocialButtons}, 
 
 }
 </script>
 
 <style>
 
 </style>