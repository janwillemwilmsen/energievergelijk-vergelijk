<template>
 <article class="mx-auto bg-gray-200">
    <a name="top"></a>

    <div class="container px-5 py-24 m-auto bg-gray-200 text-grey-darkest">
      <h1 class="mt-4 mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 break-words">Vacatures.</h1>
      <p class="mt-8 text-2xl">
       Check em out.
      </p>

                    <ul class="max-w-4xl mt-8">
                        <li v-for="vacature of vacatures" :key="vacature.slug" class="py-4 pl-4 my-4 bg-white border border-gray-500 border-opacity-25 shadow-md rounded-xl">
                            
                             <!-- <NuxtLink :to="{ name: 'vacatures-slug', params: { slug: vacature.slug } }">    -->
                             <NuxtLink :to="`/over/vacatures/${vacature.slug}`">   
                                <p>{{ vacature.titel }}</p>
                            </NuxtLink> 
                        </li>
                    </ul>


<!-- <the-blog-all/> -->

</div>
  </article>
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

</style>