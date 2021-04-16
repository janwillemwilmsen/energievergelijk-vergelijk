<template>
  <div>
     <TheHeader />
    <nuxt />
     <TheFooter />

     <!-- <CookieControl class="print:hidden"/> -->


      <client-only>
        <Cookie />
      </client-only>


  </div>
</template>



<script>
import Cookie from "@/components/Cookie.vue";
export default {
  // data() {
  //   return {
  //     cookies: this.$cookies,   
  //   };
  // }

 
  components: {
    Cookie
  }
};

  
</script>

 