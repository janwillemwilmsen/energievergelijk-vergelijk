 <template>
<header class="relative flex px-4 overflow-hidden md:bg-green-400 lg:bg-blue-600 h-96 cover">

<div class="absolute top-0 left-0 z-0 h-full"  >

        <!-- 
        <picture>
          <source type="image/webp" srcset="/header-bg2.webp"    class="object-cover bg-center bg-contain opacity-80">
          <source type="image/jpeg" srcset="/header-bg2.jpg" class="object-cover bg-center bg-contain opacity-80"> 
          <img src="/header-bg-3.jpg"     class="object-cover h-full opacity-80 md:object-fill"  alt=" Vergelijk energie ">
        </picture>
        -->


         <picture class="bg-auto opacity-80">
                <source media="(max-width: 640px)"   type="image/jpeg" srcset="/site/bg-640.jpg">
                <source media="(max-width: 640px)"   type="image/webp" srcset="/site/bg-640.webp">
                <source media="(max-width: 768px)"   type="image/jpeg" srcset="/site/bg-768.jpg">
                <source media="(max-width: 768px)"   type="image/webp" srcset="/site/bg-768.webp">
                <source media="(max-width: 1024px)"  type="image/jpeg" srcset="/site/bg-1024.jpg">
                <source media="(max-width: 1024px)"  type="image/webp" srcset="/site/bg-1024.webp">
                <source media="(max-width: 1280px)"  type="image/jpeg" srcset="/site/bg-1280.jpg">
                <source media="(max-width: 1280px)"  type="image/webp" srcset="/site/bg-1280.webp">
                <source media="(min-width: 1281px)"  type="image/jpeg" srcset="/site/bg-2560.jpg">
                <source media="(min-width: 1281px)"  type="image/webp" srcset="/site/bg-2560.webp">
                    <img  type="image/jpeg" src="/bg-2560.jpg">  
              </picture>

</div>

<!-- bg-center bg-contain -->

  <div class="container flex flex-col items-center p-5 mx-auto head md:flex-row">
    
    
    
            <a class="mb-4 font-medium text-white title-font md:mb-0" href="/">
                  
                  <div class="flex flex-col">
                    <div class="z-50 items-center mx-auto">

                          <div class="logo">
                          <picture>
                            <source type="image/webp" srcset="/logo.webp" width="160" height="78"   class="z-10 -mb-3">
                            <source type="image/jpeg" srcset="/logo.png"  width="160" height="78"   class="z-10 -mb-3">
                                                    <img src="/logo.png"  width="160" height="78"   class="z-10 -mb-3" alt="Vergelijk vergelijkers">
                          </picture>
                          </div>


                          
                    </div>
                    <!-- <div class="z-0 mx-auto text-center mark">
                      <span class="z-0 mb-2 font-sans text-2xl antialiased font-bold tracking-tighter text-white shadow-2xl opacity-75 ">
                          
                                ikvergelijk.nl
                          
                        </span>
                        </div> -->


                        <div class="z-0 pt-4 pb-2 pl-4 pr-4 mx-auto -mt-3 text-center border-4 border-gray-300 bg-gradient-to-r from-gray-400 to-gray-500 rounded-2xl">
                            <span class="z-0 font-sans text-2xl subpixel-antialiased tracking-tighter text-gray-100 shadow-2xl ">
                          
                                ikvergelijk.nl
                          
                            </span>
                        </div> 
                    
                  </div>
  
            </a>
   
   
   <div class="z-10 mx-auto mt-20 md:mr-2 md:mt-0 print:hidden">


   
        <nav class="flex flex-wrap items-center justify-center text-base md:ml-auto" >
          <nuxt-link to="/energie/actueel"  class="pt-3 pr-5 font-sans text-xl subpixel-antialiased text-gray-200 uppercase hover:text-gray-300 bold">Actuele energietarieven</nuxt-link>
          <!-- <a href="/gids"     class="pt-3 pr-5 font-sans text-xl subpixel-antialiased text-gray-200 uppercase hover:text-gray-300 bold">Bedrijfsgids</a> -->
          <!-- <a href="/blog"     class="pt-3 pr-5 font-sans text-xl subpixel-antialiased text-gray-200 uppercase hover:text-gray-300 bold">Blog</a> -->
          <!-- <a href="/over"         class="pt-3 pr-5 font-sans text-xl subpixel-antialiased text-gray-200 uppercase hover:text-gray-300 bold">Over</a> -->
      
                  <nuxt-link :to="{ path: '/', hash:'aanmelden'}" class="z-10 pt-2">
                      <button  class="inline-flex items-center px-3 py-1 mt-4 text-xl text-gray-800 uppercase bg-yellow-400 border-0 rounded focus:outline-none hover:bg-yellow-500 md:mt-0">
                               
                                
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="z-10 w-4 h4 bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                </svg>

                              Persoonlijk overzicht
                      </button>
                  </nuxt-link>


<!-- <div x-data="{show:false}" class="mt-2 print:hidden">
    <a x-on:click.prevent="show=!show" x-text="show ? ' > Verberg schermprint' : ' > Toon schermprint'" ><div>   > Toon schermprint </div>  </a>
          <div x-show="show" class="tarievenimg" style="display: none;">
                <div class="mt-4 bg-gray-100 rounded-xl">
                          <div class="w-full p-2 text-sm text-center text-gray-400"> om te zien of tarieven correct verwerkt zijn.....</div>

        
                </div>
          </div>
</div>


<div class="flex items-center">
  <div class="relative inline-block" x-data="{show:false}">
    <a x-on:click.prevent="show=!show" x-text="show ? ' > Verberg schermprint' : ' > Toon schermprint'" class="flex p-2 pl-3 pr-1 text-gray-700 bg-gray-100 border border-gray-400 rounded shadow cursor-pointer focus:outline-none hover:text-black" >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  class="inline-block w-6 h-6 ml-1 text-gray-500 duration-300 transform fill-current">
      <path fill-rule="evenodd" d="M15.3 10.3a1 1 0 011.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4l3.3 3.29 3.3-3.3z"/></svg>
    </a>

          <ul x-show="show"  style="display: none;" class="absolute left-0 visible w-40 overflow-auto text-indigo-600 origin-top bg-white rounded"
            x-transition:enter="transition ease-out duration-200"
            x-transition:enter-start="opacity-0 transform scale-y-50"
            x-transition:enter-end="opacity-100 transform scale-y-100"
            x-transition:leave="transition ease-in duration-300"
            x-transition:leave-end="opacity-0 transform scale-y-50"
          >
                  <li><a href="#" class="block px-3 py-1 hover:bg-indigo-100">Profile</a></li>
                  <li><a href="#" class="block px-3 py-1 border-b hover:bg-indigo-100">Billing</a></li>
                  <li  class="visible overflow-visible"><a href="#" class="visible block px-3 py-1 overflow-visible hover:bg-indigo-100">Log out</a></li>
          </ul>
  </div>
</div> -->
                  
        </nav>


<!-- Active Breakpoint Indicator -->
<div class="fixed top-0 right-0 flex items-center justify-center w-6 h-6 p-3 m-8 font-mono text-xs text-white bg-gray-700 rounded-full sm:bg-pink-500 md:bg-orange-500 lg:bg-green-500 xl:bg-blue-500">
  <div class="block sm:hidden md:hidden lg:hidden xl:hidden">al</div>
  <div class="hidden sm:block md:hidden lg:hidden xl:hidden">sm</div>
  <div class="hidden sm:hidden md:block lg:hidden xl:hidden">md</div>
  <div class="hidden sm:hidden md:hidden lg:block xl:hidden">lg</div>
  <div class="hidden sm:hidden md:hidden lg:hidden xl:block">xl</div>
</div>
<!-- /Active Breakpoint Indicator -->


   </div>



<!-- </a> -->
    
  </div>








</header>
 </template>
 
 <script>
 export default {
 
 }
 </script>
 
 <!-- header{
    background: url('~assets/header-bg2.jpg');
   
 } -->

 <style>
 .mark {
  
  margin: 0 -0.4em;
  padding: 0.4em 0.4em;
  border-radius: 0.8em 0.3em;
  background: transparent;
  background-image: linear-gradient(
    to right,
    rgba(255, 225, 0, 0.1),
    rgba(255, 225, 0, 0.7) 4%,
    rgba(255, 225, 0, 0.3)
  );
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
}

 

 </style>