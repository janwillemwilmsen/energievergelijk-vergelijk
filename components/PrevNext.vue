<template>
  <!-- <div class="flex flex-col justify-around "> -->

    

  <div class="flex flex-row justify-around ">
    <NuxtLink v-if="prev" :to="{ name: 'gids-slug', params: { slug: prev.slug } }" class=" hover:underline">
      <div class="p-2 truncate bg-white bg-opacity-20 rounded-xl">
    
					 
						<div class="text-sm text-center opacity-50 ">
                  <img src="~assets/svg/chevron-left.svg" width="10" class="inline"/>
						 Vorige
						</div> 
             <img :src="prev.logo" width="100"  class="p-1 graylogo">

      <!-- {{ prev.title }} -->
      </div>
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink v-if="next" :to="{ name: 'gids-slug', params: { slug: next.slug } }" class=" hover:underline">
      <div class="p-2 truncate bg-white bg-opacity-20 rounded-xl">
     
						<div class="text-sm text-center opacity-50 ">
				 
							
			Volgende
						<img src="~assets/svg/chevron-right.svg" width="10" class="inline"/>
      			</div> 

      <img :src="next.logo" width="100" class="p-1 graylogo">
      <!-- {{ next.title }} -->
</div>
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>


<script>
  export default {
    props: {
      prev: {
        type: Object,
        default: () => null
      },
      next: {
        type: Object,
        default: () => null
      }
    }
  }
</script>



<style scoped>
.grayimg {
   background: white;
}
</style>