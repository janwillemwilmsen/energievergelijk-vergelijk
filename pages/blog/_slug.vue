<template>
  <article>
    <h1>{{ mountain.title }}</h1>
    <p v-if="$fetchState.pending">
      <span class="loading"></span>
    </p>
    <p v-else-if="$fetchState.error">Error while fetching mountains 🤬</p>
    <section>
      <!-- <img :src="mountain.image" :alt="mountain.title" /> -->
      <p>{{ mountain.description }}
<!-- {{description}} -->

      </p>
    </section>
    <button @click="goBack">Back</button>
  </article>
</template>


<script>
export default {
    watch: {
    '$route.query': '$fetch'
  },
  data() {
    return {
    //   mountain: this.$route.params.slug,
       mountain: {}
    }
  },
  async fetch() {
    this.mountain = await this.$http.$get(
    //   `http://localhost:3000/blog.json?this.$route.params.slug`
    //   `http://localhost:3000/blog.json?${this.$route.params.slug}`
      `https://script.googleusercontent.com/macros/echo?user_content_key=iJLLGWy2XR3sBUCgLGyOkMvMEtQyBtDX432ju76TaihrsAWR3cGyLpJKIuY6jm6C-mqVEylQlWywuJOpMs7XlCJK27Nw5KP_m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnEgKUSEKZAbo5b7L4PwFjGqt_woMYrb75_GzgQmLwUbGQbjOPl8Wh2pVXHVJwPC6Bbc5Yu1BFlTCGGaU2pP6Ntk&lib=MUx4MpC2NIHY9zDpjxHlJlBlfZc1fPD1m`
    )
  },
  methods: {
    goBack() {
      return this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
article {
  max-width: 600px;
  margin: 0 auto;
}
img {
  height: 200px;
}
p {
  text-align: left;
}
</style>
