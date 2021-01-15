<template>
  <div class="wrapper"  itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
    

        <div>
                  <div class="accordion" @click="toggleItem">
                    <h2 class="title my-6 text-4xl"  itemprop="name">
                      
                       <div class=" block"><!---pijl omhoog----->
                        
                         <transition name="fade-away"    mode="out-in">  
                            <svg key="aan" v-if="show" class="  w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
                                </svg>   
                            <!---pijl down----->
                              <svg key="uit" v-if="!show" class="  w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                              </svg>
                         </transition>

                        <slot name="title"></slot>
                      </div>

                    </h2>
                  </div>

              <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                 <transition name="fade-away"    mode="out-in">  
                    <div v-show="show" class="content bg-gray-300 opacity-75 rounded my-6 ml-10 pl-10 py-8"  itemprop="text">
                      <slot name="content"></slot>
                    </div>
                  </transition>
              </div>
        </div>


  </div>
</template>

<script>
export default {
  components: {},
  data: function() {
    return {
      show: false
    };
  },
  methods: {
    toggleItem: function() {
      this.show = !this.show
    }
  }
};
</script>

<style>
.fade-away-enter-active, .fade-away-leave-active {
  transition: opacity .5s;
}
.fade-away-enter, .fade-away-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


/* 
.fade-in-enter-active, .fade-in-leave-active {
  background-color: red;
  transition: opacity 5s;
  transition-delay: 2s;
}
.fade-in-enter, .fade-in-leave-to /  {
  opacity: 0;
}
  */

.content { animation: flash .5s;}
@keyframes flash {
  0% {
    background-color: none;
  }
  
  100% {
    background-color: none;
  }
}
</style>