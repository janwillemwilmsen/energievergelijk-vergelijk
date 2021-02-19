 

  <!-- <h1 class="">Hello {{ name }}!</h1> -->
 <template>
 <div>
 <section class="bg-gray-200">
  <div class="container px-5 py-24 mx-auto">





    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 break-words md:text-5xl lg:text-6xl">Over us.</h1>
         

                <p class="mt-8 text-2xl">
                #Coronaproject
                </p>

         
            
 
  </div>
  </section>
  

  <div class="container px-5 py-24 mx-auto">
  <div class="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
    <div>
      <img class="object-cover w-24 h-24 rounded-full shadow" src="https://images.generated.photos/UdQvJ58gaxybWZn6BpEFDR0DxCjcreUtQNfZMzxVbN8/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzA0MTIyMDkuanBn.jpg" alt="Person" />
      <div class="flex flex-col justify-center mt-2">
        <p class="text-lg font-bold">De Koning</p>
        <p class="mb-4 text-xs text-gray-800">CEO</p>
        <p class="text-sm tracking-wide text-gray-800">
          Pommy ipsum bent as a nine bob note naff off biscuits nowt, a cuppa unhand me sir hadn't done it in donkey's years sod's law.
        </p>
      </div>
    </div>
    <div>
      <img class="object-cover w-24 h-24 rounded-full shadow" src="https://images.generated.photos/8iH6up3-Hjd8FLesGHQVfM2N6X9V-suPhVe12Yl040w/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzA3NjMxODkuanBn.jpg" alt="Person" />
      <div class="flex flex-col justify-center mt-2">
        <p class="text-lg font-bold">Verzandvoort</p>
        <p class="mb-4 text-xs text-gray-800">CMO</p>
        <p class="text-sm tracking-wide text-gray-800">
          Secondary fermentation degrees plato units of bitterness, cask conditioned ale ibu real ale pint glass craft beer. krausen goblet grainy ibu.
        </p>
      </div>
    </div>
    <div>
      <img class="object-cover w-24 h-24 rounded-full shadow" src="https://images.generated.photos/laQK2nzFJwWJ4PA850ztdA4R_WHmoeLfYY6BCrgG4LI/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzA1MTQwODUuanBn.jpg" alt="Person" />
      <div class="flex flex-col justify-center mt-2">
        <p class="text-lg font-bold">Jansens</p>
        <p class="mb-4 text-xs text-gray-800">CIO</p>
        <p class="text-sm tracking-wide text-gray-800">
          I just closed my eyes and in a nanosecond I cured myself from this ridiculous model of disease, addiction and obsession.
        </p>
      </div>
    </div>
 
  </div>
</div>
<!-- The dog -->

 
<div class="container px-5 py-24 mx-auto bg-gray-200 ">
    <div class="mb-4 text-center opacity-90">
        <a href="#" class="relative block">
            <img alt="profil" src="https://placedog.net/540/320" class="object-cover w-40 h-40 mx-auto rounded-full "/>
        </a>
    </div>
    <div class="text-center">
        <p class="text-2xl text-gray-800 dark:text-white">
            Wolf
        </p>
        <p class="text-xl font-light text-gray-500 dark:text-gray-200">
            De office waakhond ;-)
        </p>
        <p class="font-light text-center text-gray-500 text-md dark:text-gray-400">
            knauwen als de beste, blaffen als een baas, piesen als een malle.
        </p>
    </div>
   
</div>



<!-- The Stats -->
<div class="px-8 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div class="grid grid-cols-2 row-gap-8 md:grid-cols-4">
    <div class="text-center md:border-r">
      <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">6543</h6>
      <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
        Regels code
      </p>
    </div>
    <div class="text-center md:border-r">
      <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">129</h6>
      <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
        Koppen koffie per week
      </p>
    </div>
    <div class="text-center md:border-r">
      <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">48.3K</h6>
      <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
        Bezoekers per maand
      </p>
    </div>
    <div class="text-center">
      <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">58</h6>
      <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
        Cookies
      </p>
    </div>
  </div>
</div>

<!-- <a  id="aanmelden"></a> -->
<!-- <leadForm4 /> -->


<TheFaqs/>


</div>
</template>
 



<script>

// CREATED AT werkt niet. Dat wordt vertaald als DATUM VAN LAATST OPGESLAGEN MOMENT.
// OOK OPLETTEN BIJ AANPASSEN VAN DE .MD Files. Die datum in de titel wordt daarna geupdate.

export default {
    async asyncData({ $content, params }) {
      const articles = await $content('articles', params.slug)
        .only(['title', 'createdAt', 'slug', 'author']).sortBy('slug', 'desc').fetch()

      return {
        articles
      }
    }
  }
</script>

<style>
  
</style>