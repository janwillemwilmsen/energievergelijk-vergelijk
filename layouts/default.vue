<template>
  <div>
     <TheHeader />
    <nuxt />
     <TheFooter />

     <CookieControl/>

  </div>
</template>



<script>
export default {
  data() {
    return {
      cookies: this.$cookies,   
    };
  }



  
};
</script>
