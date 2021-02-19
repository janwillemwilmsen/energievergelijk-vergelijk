 <template>
<header class="relative flex px-4 overflow-hidden bg-blue-600 h-96 cover">

<div class="absolute top-0 left-0 z-0 h-full"  >


        <picture>
          <source type="image/webp" srcset="/header-bg2.webp" style="width:100%;"  class="object-cover w-full h-full opacity-80">
          <source type="image/jpeg" srcset="/header-bg2.jpg" class="object-cover w-full h-full opacity-80">
          <img src="/header-bg2.jpg"  class="object-cover w-full h-full opacity-80"  alt=" Vergelijk energie ">
        </picture>

</div>

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
   
   
   <div class="z-10 mx-auto mt-20 md:mr-2 md:mt-0">


   
        <nav class="flex flex-wrap items-center justify-center text-base md:ml-auto" >
          <a href="/archief"  class="pt-3 pr-5 font-sans text-xl subpixel-antialiased text-gray-200 uppercase hover:text-gray-300 bold">Archief</a>
          <a href="/gids"     class="pt-3 pr-5 font-sans text-xl subpixel-antialiased text-gray-200 uppercase hover:text-gray-300 bold">Bedrijfsgids</a>
          <a href="/blog"     class="pt-3 pr-5 font-sans text-xl subpixel-antialiased text-gray-200 uppercase hover:text-gray-300 bold">Blog</a>
          <a href="/over"         class="pt-3 pr-5 font-sans text-xl subpixel-antialiased text-gray-200 uppercase hover:text-gray-300 bold">Over</a>
      
                  <nuxt-link :to="{ path: '/', hash:'aanmelden'}" class="z-10 pt-2">
                      <button  class="inline-flex items-center px-3 py-1 mt-4 text-xl text-gray-800 uppercase bg-yellow-400 border-0 rounded focus:outline-none hover:bg-yellow-500 md:mt-0">
                              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                              </svg>
                            &nbsp; Persoonlijk overzicht
                      </button>
                  </nuxt-link>
        </nav>

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