<template>
  <div id="animatie">
    <lottie-animation
      ref="anim"
      :animationData="require('@/assets/lottie-thumbs.json')"
      :loop="true"
      :autoPlay="true"
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

 #animatie {
    width: 150px;
    margin: auto;
    margin-top: 20px;
}

</style>