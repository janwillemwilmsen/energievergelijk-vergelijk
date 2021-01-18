<template>
  <div id="app">
    <lottie-animation
      ref="anim"
      :animationData="require('@/assets/lottie-atom.json')"
      :loop="true"
      :autoPlay="true"
      @loopComplete="loopComplete"
      @complete="complete"
      @enterFrame="enterFrame"
    />
  </div>
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
  methods: {
    loopComplete() {
      console.log('loopComplete')
    },
    complete() {
      console.log('complete')
    },
    enterFrame() {
      console.log('enterFrame')
    }
  }
}
</script>



<style>

svg {width: 50px;}

</style>