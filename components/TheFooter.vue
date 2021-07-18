 <template>
 <div>

<footer class="w-full mx-auto text-gray-400 bg-gray-900 body-font print:hidden pt-14">


 
  
 


<div class="container mx-auto">

<div class="flex flex-col items-center content-center justify-center divide-y-2 divide-gray-300 xl:-ml-32 divide-opacity-30 divide-dashed sm:items-start sm:divide-y-0 sm:divide-x-2 sm:flex-row">
    <div class="p-5">
      <p class="mx-auto font-sans text-xl subpixel-antialiased text-center text-gray-200 uppercase hover:text-gray-300 bold">MENU </p>
        <div class="p-5 font-bold tracking-tighter text-center text-gray-600 ">
              <nuxt-link to="/archief">Energiescans</nuxt-link><br>
              <nuxt-link to="/gids">Leveranciers en vergelijkers</nuxt-link><br>
              <nuxt-link to="/over#contact">Contact</nuxt-link><br>
              <nuxt-link to="/over">Over ons</nuxt-link><br>
              <nuxt-link to="/blog">Blog</nuxt-link><br>
              <nuxt-link :to="{ path: '/', hash:'aanmelden'}" class="text-yellow-300 ">Persoonlijk overzicht</nuxt-link><br>

        </div>
    </div>
    <div class="p-5 " >
        <div class="items-center self-center mx-auto text-center">
                             <p class="mx-auto font-sans text-xl subpixel-antialiased text-center text-gray-200 uppercase hover:text-gray-300 bold">DEEL </p><br>
               
                          <div class="flex flex-col items-center self-center mx-auto text-center md:flex-row md:flex-wrap">
                          <TheSocialButtons/> 


                          
                        </div>
        </div>
    </div>
    <div class="p-5">
        <div class="">
                        <p class="mx-auto font-sans text-xl subpixel-antialiased text-center text-gray-200 uppercase hover:text-gray-300 bold">INSTALLEER </p><br>
                          <ThePWA/> 
        </div>
    </div>
    <div class="p-5">
        <div class="">
                        <p class="mx-auto font-sans text-xl subpixel-antialiased text-center text-gray-200 uppercase hover:text-gray-300 bold">VOLG </p><br>




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
</div>


</div>

 

<div class="container mx-auto copy">

 <div class="w-32 mx-auto text-center icon"> 
          <a href="/" title="Vergelijk energievergelijkers" class="text-center text-white ">
                <!-- <TheAnimationAtom  style="width:70%;height:70%;" class="ml-4 text-center sm:-ml-5" /> -->
                <TheAnimationAtom  style="width:50px;height:50px;" class="ml-10 text-center" />
          </a>
  </div>


  <p class="pb-4 text-sm text-center text-gray-600">
       <!-- <span class=" sm:-ml-20"> -->
       <span class="">
         ©2021
      </span>   
  </p></div>
</footer>



<!-- import lottie from './TheAnimation.vue'                    -->
<!-- import TheAnimation from './TheAnimation.vue'   TheAnimation -->

 </div>
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
 .arrow {  background: url('~assets/arrow.png'); background-size: cover ; background-repeat: no-repeat;  background-size: 50% 30%; background-position: center bottom;}
 </style>