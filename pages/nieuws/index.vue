<template>
 <article class="mx-auto bg-gray-200">
    <a name="top"></a>

    <div class="container px-5 py-24 m-auto bg-gray-200 text-grey-darkest">
      <h1 class="mt-4 mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 break-words">Energieke blog.</h1>
      <p class="mt-8 text-2xl">
        Random rants, gedachten en opmerkelijke constateringen.
      </p>

 <ul class="max-w-4xl mt-8">
                       
                       
                        <li v-for="item of items" :key="item.slug" class="py-4 pl-4 my-4 bg-white border border-gray-500 border-opacity-25 shadow-md rounded-xl">
                             <!-- <NuxtLink :to="{ name: 'blog-slug', params: { slug: blog.slug } }"> 
                                <p>{{ blog.title }}</p>
                            </NuxtLink>  -->

                            <a :href="item.url">{{ item.title }}</a>
                        </li>
                        
                  </ul>
<!-- <the-blog-all/> -->

</div>
  </article>

<!--
GEEN INHOUD??    http://localhost:3000/gids/google-api-blog-output.json 
Wel inhoud:      http://localhost:3000/blog.json
-->

</template>

<script>

  export default {
 async asyncData({ $content, params }) {
    // fetch our article here
    const items = await $content("newsscraper", params.brand)
    .limit(5)
    .where({
    // brand: 'books'
    brand: 'essent'
    }).fetch();
   
    return { items };
  }
  }

 
</script>

<style>

</style>