<template>
  <div class="flex justify-between">
    <NuxtLink
      v-if="prev"
      :to="{ name: 'gids-slug', params: { slug: prev.slug } }"
      class="font-bold text-primary hover:underline"
    ><div
						class="p-6 bg-white border-b-4 border-red-500 rounded shadow-md dark:bg-gray-800 hover:shadow-xl">
						<h3 class="flex mb-3 text-2xl font-semibold">
							<svg class="mr-2" width="24" height="30" viewBox="0 0 24 24" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M1.02698 11.9929L5.26242 16.2426L6.67902 14.8308L4.85766 13.0033L22.9731 13.0012L22.9728 11.0012L4.85309 11.0033L6.6886 9.17398L5.27677 7.75739L1.02698 11.9929Z"
									fill="currentColor" /></svg>
						 Vorige
						</h3>
      {{ prev.title }}
      </div>
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="next"
      :to="{ name: 'gids-slug', params: { slug: next.slug } }"
      class="font-bold hover:underline"
    >

<div
						class="p-6 text-right bg-white border-b-4 border-red-500 rounded shadow-md dark:bg-gray-800 hover:shadow-xl">
						<h3 class="flex mb-3 text-2xl font-semibold ">
							Volgende
							<svg class="ml-2" width="24" height="30" viewBox="0 0 24 24" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
									fill="currentColor" /></svg>
			
      			</h3>


      {{ next.title }}
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



