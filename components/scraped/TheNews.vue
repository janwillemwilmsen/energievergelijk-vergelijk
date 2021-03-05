<template>
  <div>

      <h1>laatste news</h1>
      <ul>
                      <li v-for="item of items" :key="item.brand" class="py-4 pl-4 my-4 bg-white border border-gray-500 border-opacity-25 shadow-md rounded-xl">
                             <!-- <NuxtLink :to="{ name: 'blog-slug', params: { slug: blog.slug } }"> 
                                <p>{{ blog.title }}</p>
                            </NuxtLink>  -->

                            <a :href="item.url">{{ item.title }}</a>
                        </li>

      </ul>
  </div>
</template>

<script>
export default {
 async asyncData({ $content, params }) {
   // fetch only BRAND
   const brands = await $content('slug')
      .where({ slug: { $contains: params.brand } })
      .limit(1)
      .fetch()
    const brand = brand.length > 0 ? brand[0] : {}
    // fetch our article here
    const items = await $content("newsscraper", params.slug)
        .where({ brand: { $contains: brand.name } })
    // .limit(5)
    // .where({
    // brand: 'books'
    // brand: 'essent'
    // })
    .fetch();
    console.log(items);
   
    return { items, brands };
  }
  }
</script>

<style>

</style>