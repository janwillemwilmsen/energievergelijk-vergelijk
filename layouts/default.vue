<template>
  <div>
     <TheHeader />
    <nuxt />
     <TheFooter />

     <!-- <CookieControl class="print:hidden"/> -->

<div  style="bottom:150px!important;width:50%!important;margin:auto!important;">

<CookieControl>
      <template v-slot:modal>
          <h3>Modal title</h3>
          <p>Modal description</p>
      </template>
</CookieControl>
</div>


      <!-- <client-only> -->
        <!-- <Cookie /> -->
      <!-- </client-only> -->


  </div>
</template>



<script>
// import Cookie from "@/components/Cookie.vue";
export default {
  data() {
    return {
      cookies: this.$cookies,   
    };
  }

 
  // components: {
  //   Cookie
  // }
};

  
</script>

 