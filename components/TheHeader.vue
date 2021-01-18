 <template>
<header class="text-gray-400 body-font header h-96">
  <div class="container flex flex-col flex-wrap items-center p-5 mx-auto head md:flex-row">
    <a class="flex items-center mb-4 font-medium text-white title-font md:mb-0" href="/">
      
      <div class="flex flex-col ">
        <div class="z-50 items-center mx-auto">
              <img src="/logo.png" style="width:130px;" class="z-50 -mb-2">
        </div>
        <div class="z-0 mx-auto mark">
          <span class="z-0 mb-2 font-sans text-2xl antialiased font-bold tracking-tighter text-white shadow-2xl opacity-75 ">
              
                    ikvergelijk.nl
              
            </span>
            </div>
         
      </div>
      
      
      
       
     
    </a>
   
   
   
   
    <nav class="flex flex-wrap items-center justify-center text-base md:ml-auto">
      <a class="mr-5 text-gray-800 hover:text-white">Archief</a>
      <a class="mr-5 text-gray-800 hover:text-white">Over ons</a>
      <!-- <a class="mr-5 hover:text-white">Third Link</a>
      <a class="mr-5 hover:text-white">Fourth Link</a> -->
    </nav>
    <button class="inline-flex items-center px-3 py-1 mt-4 text-base bg-gray-800 border-0 rounded focus:outline-none hover:bg-gray-700 md:mt-0">
      
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>

     &nbsp; Persoonlijk overzicht

    </button>
  </div>
</header>
 </template>
 
 <script>
 export default {
 
 }
 </script>
 
 <style>
 header{
    background: url('~assets/header-bg.jpg');
  background-size: cover;
 }

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