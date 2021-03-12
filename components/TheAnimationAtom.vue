<template>
  <div id="animatie">
    <lottie-animation
      ref="anim"
      :animationData="require('@/assets/lottie-atom.json')"
      :loop="true"
      :autoPlay="true"
       
    />
  </div>
<!-- 
WERKT NIET
:width="256"
:height="256" -->


      <!-- @loopComplete="loopComplete"
      @complete="complete"
      @enterFrame="enterFrame" -->


</template>

<script>
import LottieAnimation from 'lottie-web-vue'

export default {
  components: {
    LottieAnimation
  },
  mounted() {
    this.$refs.anim.play()
  },
  // methods: {
  //   loopComplete() {
  //     console.log('loopComplete')
  //   },
  //   complete() {
  //     console.log('complete')
  //   },
  //   enterFrame() {
  //     console.log('enterFrame')
  //   }
  // }
}
</script>



<style>

 

</style>