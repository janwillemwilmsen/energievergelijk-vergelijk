<template>
  <div class="wrapper"  itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
    

        <div>
                  <div class="accordion" @click="toggleItem">
                   <h2 class="my-6 text-xl md:text-4xl title"  itemprop="name">
                      
                       <div class="block ">
                        

<!-- two col flex -->
      <div class="flex">
                        <div class="one">
                         <transition name="fade-away"    mode="out-in">  
                                  <!---pijl omhoog----->
                                  <svg key="aan" v-if="show" class="inline-block w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
                                  </svg>   
                                  <!---pijl down----->
                                  <svg key="uit" v-if="!show" class="inline-block w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                  </svg>
                         </transition>
                            </div>                                  
                            <div class="ml-2 two opacity-80">
                                  <slot name="title" class=""></slot>
                            </div>
         </div>



                      </div>

                    </h2>
                  </div>

              <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">

                  <transition name="fade-away"    mode="out-in">  
                            <div v-show="show" class="px-4 py-4 mx-4 my-4 bg-gray-200 rounded content"  itemprop="text">
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

.understreep {cursor: pointer;}


.understreep {
  text-decoration: none;
}

.understreep:hover {
  text-decoration: none;
}

.understreep {
  text-decoration: none;
  position: relative;
}

.understreep:after {
  border-radius: 1em;
  border-top: .1em solid #2F56B0;
  content: "";
  position: absolute;
    right: 100%;
    bottom: 0em;
    left: 0;
  transition: right .4s cubic-bezier(0,.5,0,1);
}

.understreep:hover:after {
  right: 0;
}

</style>