<template>
  <div>
     <TheHeader />
    <nuxt />
     <TheFooter />

     <CookieControl class="print:hidden"/>

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

 