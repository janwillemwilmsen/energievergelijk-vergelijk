<template>
  <div id="animatie" class="block w-64 md:w-60 "  >
    <lottie-animation
      ref="anim"
      :animationData="require('@/assets/lottie-error.json')"
      :loop="true"
      :autoPlay="true"

    />
  </div>

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