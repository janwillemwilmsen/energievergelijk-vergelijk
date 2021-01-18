<template>
  <div>


  
  <!-- <lottie :options="defaultOptions" :height="400" :width="400" v-on:animCreated="handleAnimation"/> -->

   <lottie
      :width="400"
      :height="400"
      :options="lottieOptions"
      @animCreated="handleAnimation"
    />

  </div>
 
</template>

<script>
// import lottie from 'lottie-web/build/player/lottie';
// import * as animationData from "~/assets/lottie-atom.json";

import lottie from "vue-lottie/src/lottie.vue";
import * as animationData from "@/assets/lottie-atom.json";
 
export default {
  components: {
    lottie,
  },
  data() {
    return {
      // loading: false,
      anim: null, // for saving the reference to the animation
      lottieOptions: { animationData: animationData.default,
            // loop: 2,
         loop: true
      },
        animationSpeed: 100,
    };
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
    },
   
    
  },
};

// export default {

//      components: {
//       name: 'lottie'
//     },
//   data() {
//     return {
//       anim: null, // for saving the reference to the animation
//       lottieOptions: { animationData: animationData.default }
//     };
//   },
//   methods: {
//     handleAnimation: function (anim) {
//       this.anim = anim;
//     }
//   }
// }
</script>

<style>

</style>