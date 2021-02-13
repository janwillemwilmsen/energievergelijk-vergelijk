<template>
  <div>
    <p v-if="$fetchState.pending">
      <span class="loading"></span>
    </p>
    <p v-else-if="$fetchState.error">Error while fetching mountains 🤬</p>
    <ul v-else>
      <li v-for="mountain in mountains" :key="mountain.title">
        <NuxtLink
          :to="{ name: 'blog-slug', params: { slug: mountain.slug } }"
        >
          {{ mountain.title }}
        </NuxtLink>
      </li>
    </ul>
    <button @click="$fetch">Refresh Data</button>
  </div>
          <!-- :to="{ name: 'blogurl', params: { slug: mountain.blogurl } }" -->
</template>
<script>
export default {
  data() {
    return {
      mountains: []
    }
  },
  activated() {
    if (this.$fetchState.timestamp <= Date.now() - 30000) {
      this.$fetch()
    }
  },

  async fetch() {
    // this.mountains = await this.$http.$get('http://localhost:3000/blog.json')
    // https://stackoverflow.com/questions/66187173/create-blog-with-static-json-file-with-fetch-in-nuxt-how-to-use-slug-to-get-con
    this.mountains = await this.$http.$get('https://script.googleusercontent.com/macros/echo?user_content_key=iJLLGWy2XR3sBUCgLGyOkMvMEtQyBtDX432ju76TaihrsAWR3cGyLpJKIuY6jm6C-mqVEylQlWywuJOpMs7XlCJK27Nw5KP_m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnEgKUSEKZAbo5b7L4PwFjGqt_woMYrb75_GzgQmLwUbGQbjOPl8Wh2pVXHVJwPC6Bbc5Yu1BFlTCGGaU2pP6Ntk&lib=MUx4MpC2NIHY9zDpjxHlJlBlfZc1fPD1m')
  }
}
</script>
<style scoped>
li {
  margin-bottom: 0.5rem;
}
li:first-letter {
  text-transform: uppercase;
}
.loading {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border: 4px solid rgba(9, 133, 81, 0.705);
  border-radius: 50%;
  border-top-color: #158876;
  animation: spin 1s ease-in-out infinite;
}
@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>
