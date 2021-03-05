 

  <!-- <h1 class="">Hello {{ name }}!</h1> -->
 <template>
 <div>

<header class="sticky top-0 text-gray-600 bg-gray-100 body-font">
  <div class="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
    
    <nav class="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
      <a href="#ons" class="mr-5 hover:text-gray-900">Over ons</a>
      <a href="#team" class="mr-5 hover:text-gray-900">Team</a>
      <a href="#vacatures" class="mr-5 hover:text-gray-900">Vacatures</a>
      <a href="#stats" class="mr-5 hover:text-gray-900">Statistieken</a>
      <!-- <a href="" class="mr-5 hover:text-gray-900">Fourth Link</a> -->
    </nav>
     
  </div>
</header>



<a name="ons"></a>
 <section class="bg-gray-200">
  <div class="container px-5 py-24 mx-auto">
    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 break-words md:text-5xl lg:text-6xl">Over us.</h1>
         
                <p class="mt-8 text-2xl">
                #Coronaproject
                </p>
 
  </div>
  </section>


<!----VACATURES----------->
<a name="vacatures"></a>
<section class="relative bg-yellow-400 bg-opacity-80">
 <div class="custom-shape-divider-top-1614706233">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" class="shape-fill"></path>
    </svg>
</div>

  <div class="container px-5 py-24 mx-auto">
                <h2 class="mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-600 ">Vacatures.</h2>

           <ul class="max-w-4xl mt-8">
                        <li v-for="vacature of vacatures" :key="vacature.slug" class="py-4 pl-4 my-4 bg-white border border-gray-500 border-opacity-25 shadow-md rounded-xl">
                            
                             <!-- <NuxtLink :to="{ name: 'vacatures-slug', params: { slug: vacature.slug } }">    -->
                             <NuxtLink :to="`/over/vacatures/${vacature.slug}`">   
                                <p>{{ vacature.titel }}</p>
                            </NuxtLink> 
                        </li>
                    </ul>
      
  </div>
</section>



<!----TEAM---------->
<section>
<a name="team"></a>
  <div class="container px-5 py-24 mx-auto">
                <h2 class="mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-600 ">Team:</h2>

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
</section> <!----end team----->

<!-- The dog -->
<section class="bg-gray-200">
<div class="container py-24 mx-auto ">
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
</section>



<!-- The Stats -->
<section>
<a name="stats"></a>
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
</section> <!----end stats----->




<!-- <a  id="aanmelden"></a> -->
<!-- <leadForm4 /> -->


<TheFaqs/>


</div>
</template>
 



<script>
export default {
    async asyncData({ $content, params }) {
    // fetch our article here
    const vacatures = await $content("vacatures", params.slug).fetch();
    //  const vacatures = await $content('vacatures', { deep: true }).fetch();

    return { vacatures };
  }

}
</script>

<style>
 .custom-shape-divider-top-1614706233 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1614706233 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 50px;
}

.custom-shape-divider-top-1614706233 .shape-fill {
    fill: #EF4444;
}
</style>