<template>
<div>

<div class="wall" id="wall" style="display: block;"  v-if="isOpen"></div>
  <div v-if="isOpen" class="max-w-lg p-2 bg-gray-500 bg-opacity-75 cookie rounded-xl ">
    <!-- <v-alert prominent type="info" color="#6859de"> -->
      
      
      <div class="flex flex-row items-center justify-center w-full mx-auto bg-white rounded-t-xl">


        <div class="w-9/12 p-3 text-center ">
          <slot name="message" >
            We gebruiken cookies om deze website beter te maken.
            <!-- marketing. To find out more about our use of cookies, please see our
            <nuxt-link class="cookie__link" to="/privacy-policy">Privacy Policy</nuxt-link>.  -->
            <br><br><span class="text-sm ">Klik op <span @click="accept">'Akkoord'</span> om dit toe te staan. </span>
           
          </slot>
        </div>
        <div class="flex items-center justify-center w-5/12 h-24 ">
          <button class="flex items-center justify-center px-3 py-2 font-semibold text-center text-white transition duration-300 ease-out transform rounded shadow bg-gradient-to-tl from-green-500 to-green-300 focus:outline-none hover:transition-colors hover:bg-gradient-to-tr hover:scale-110 hover:shadow-md" @click="accept">{{ buttonTextAccept }}</button>
         
        </div>
 </div>

<div x-data="{show:false}" class="p-4 bg-gray-100 print:hidden rounded-b-xl">
<a x-on:click.prevent="show=!show" x-text="show ? ' > Verberg cookies' : ' > Welke cookies?'" class="p-4 text-sm text-gray-400 cursor-pointer rounded-xl focus:outline-none">
<div>   > Toon cookies </div>
</a>
<div x-show="show" class="tarievenimg" style="display: none;"  x-transition:enter-start="opacity-0 scale-90" x-transition:enter="ease-out transition-slow" x-transition:enter-end="opacity-100 scale-100">
<div class="mt-4 rounded-xl">
<div class="p-2 text-sm text-center text-gray-400 ">  </div>

 

<table class="table-fixed ">
  <thead>
    <tr>
      <th class="w-1/4 px-4 py-2 text-gray-500 ">Cookie</th>
      <th class="w-3/4 px-4 py-2 text-gray-500">Omschrijving</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="px-4 py-2 text-gray-500 border border-gray-500">Google Analytics</td>
      <td class="px-4 py-2 text-gray-500 border border-gray-500">Statistieken over de website. Hoeveel bezoekers we hebben en waar ze vandaan komen.</td>
     
    </tr>
    <tr>
      <td class="px-4 py-2 text-gray-500 border border-gray-500">Microsoft Clarity</td>
      <td class="px-4 py-2 text-gray-500 border border-gray-500">Video recordings van website bezoekers. Om te zien hoe bezoekers onze website echt gebruiken.</td>
   
    </tr>
    <!-- <tr>
      <td>Intro to JavaScript</td>
      <td>Chris</td>
     
    </tr> -->
  </tbody>
</table>


<div class="pt-3 text-sm text-gray-400">
 Als je tegen cookies bent en je data niet wil delen klik dan op  <span text @click="deny">'{{ buttonTextDeny }}'</span>. 
</div>

</div></div></div>


     
  
  
    <!-- </v-alert> -->
  </div>
</div>
</template>

<script>
export default {
  name: "CookieMessage",
  props: {
    buttonTextAccept: {
      type: String,
      default: "Akkoord"
    },
    buttonTextDeny: {
      type: String,
      default: "Niet akkoord"
    },
    message: {
      type: String,
      default:
        "We use cookies to provide our services and for analytics and marketing. To find out more about our use of cookies, please see our Privacy Policy. By continuing to browse our website, you agree to our use of cookies."
    },
    position: {
      type: String,
      default: "top"
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  computed: {
    containerPosition() {
      return `cookie--${this.position}`;
    }
  },
  created() {
    if (!this.getGDPR() === true) {
      this.isOpen = true;
    }
  },
  methods: {
    getGDPR() {
      if (process.browser) {
        return localStorage.getItem("GDPR:accepted", true);
      }
    },
    accept() {
      if (process.browser) {
        this.isOpen = false;
        localStorage.setItem("GDPR:accepted", true);
      }
    },
    deny() {
      if (process.browser) {
        this.isOpen = false;
        localStorage.setItem("GDPR:accepted", false);
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.opacity-0
  opacity: 0

.opacity-100
  opacity: 1

.scale-90
  transform: scale(0.9)

.transition-slow
  transition-duration: 300ms

.scale-100
  transform: scale(1)

.ease-in
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1)

.ease-out
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1)
  
.wall
    display: none;
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7)

.cookie
  z-index: 1001
  position: fixed
  top: 200px
  left: 0px
  transform: translate(calc(50vw - 50%))

  
</style>