<template>
<section>
 <!-- <div class="w-full bg-center bg-cover" style="height:32rem; background: url(~assets/);"> -->
 <div class="w-full mx-auto greenbg" >
 
  
  
  <!-- // undo autofocus -->
  <!-- <input type="text"/> -->

 
           




   <div class="flex flex-col items-center justify-center px-5 py-24 mx-auto text-center container-form">

       <h2 class="z-30 mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 break-words sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                Vergelijk mijn energieverbruik.
        </h2>

  <div><p class="w-3/4 p-4 mx-auto text-base font-semibold tracking-tight md:text-1xl lg:text-3xl ">  
  Bespaar jezelf de irritatie. Bespaar jezelf tijd. Wij vergelijken voor je.
   
    
  </p></div>


    <div id="progress" :style="{width: progress}"></div>
    <div class="text-3xl fin md:text-4xl lg:text-5xl" :class="{'show-final': showFinal}">Bedankt voor je aanvraag  {{ registerSteps[5].value }}!

      <TheAnimationThumbs />

    </div>
    <!-- <div :class="{'show-final': showFinal}">We gaan zo binnenkort met je aanvraag aan de slag. 

    </div> -->
  
    <div id="register" class="pt-4 ">
     
      
      <div v-if="position === 0" class="previousButton"></div>
      <div v-else class="previousButton" @click="previousStep">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
        </svg>


      </div>
      <div   class="forwardButton" @click="checkStep">
        
        <div class="relative transition duration-100 ease-in-out transform hover:scale-105">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
      </div>
      
      </div>






      <div id="inputContainer" :class="{'showContainer': showContainer}">
        <form @submit.prevent="checkStep" id="contactform"   >
          
        <!-- <form @submit.prevent="checkStep" id="contactform" class="kwes-form"  action="https://kwes.io/api/foreign/forms/mNPut6yGVcm9O1toGGEK" method="POST"> -->
          <input id="inputField" :type="inputType" :name="inputName" v-model="inputValue" ref="registerinput" required tabindex="0" aria-invalid="false" class="border-4 focus:outline-none rounded-xl "/>
          <label id="inputLabel">{{ inputLabel }}</label>
          <input type="submit" name="submit" class="invisible">
          <!-- 
          
          ON FORM: data-kw-multistep -->
        </form>
        <div id="inputProgress" class="rounded-xl"></div>
      </div>
    </div>
  </div>


  </div>
</section>
</template>

<script>
const FORMSPARK_ACTION_URL = "https://submit-form.com/6MBFOqku";

import TheAnimationThumbs from '/components/TheAnimationThumbs.vue' 



  export default {

components: {TheAnimationThumbs}, 

    data: () => {
      return {
        position: 0,
        inputLabel: 'null',
        inputType: 'text',
        inputValue: 'null',
        
        inputName:'null',
        showContainer: false,
        showFinal: false,
        progress: '0%',
        registerSteps: [
          {
            label: "Wat is je postcode?",
            type: "text",
            name: "",
            value: "",
            pattern: /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i
          },
          {
            label: "Wat is je huisnummer?",
            type: "text",
            name:"",
            value: "",
            pattern: /.+/
          },
              {
            label: "Stroomverbruik(kWh)p.m.?",
            type: "text",
            name:"",
            value: "",
            pattern: /^[0-9]+$/
          },
               {
            label: "Gasverbruik(m3) p.m.?",
            type: "text",
            name:"",
            value: "",
            pattern: /^[0-9]+$/
          },
          {
            label: "Wat is je emailadres?",
            type: "text",
            name:"",
            value: "",
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          },
          {
            label: "Wat is je voornaam?",
            type: "text",
            name:"",
            value: "",
            pattern: /^([^0-9]*)$/
          }
        ]
      }
    },
    methods: {
      setStep() {
        this.inputLabel = this.registerSteps[this.position].label;
        this.inputName = this.registerSteps[this.position].name;
        this.inputType = this.registerSteps[this.position].type;
        this.inputValue = this.registerSteps[this.position].value;
        // this.$refs.registerinput.focus();
        this.showStep();
      },
      showStep() {
        setTimeout(() => {
          this.showContainer = true;
        }, 100)
      },
      hideStep(callback) {
        this.showContainer = false;
        setTimeout(callback, 100);
      },
      previousStep() {
        this.position -= 1;
        register.className = '';
        this.hideStep(this.setStep);
        this.setProgress();
      },
      checkStep() {
        if(!this.registerSteps[this.position].pattern.test(this.inputValue)) {
          register.classList.add('wrong');
          register.classList.add('wronganimation');
          setTimeout(() => {
            register.classList.remove('wronganimation');
          }, 500);
          this.$refs.registerinput.focus();
        }
        else {
          register.className = '';
          register.classList.add('okanimation');
          setTimeout(() => {
            register.classList.remove('okanimation');
          }, 200);
          this.registerSteps[this.position].value = this.inputValue;
          this.position += 1;
          if(this.registerSteps[this.position]) {
            this.hideStep(this.setStep);
          }
          else {
            this.hideStep(() => {
              register.className = 'close';
              setTimeout(() => {
                this.showFinal = true;
                console.log('done')
                
// Code van From

 
       fetch(FORMSPARK_ACTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          postcode: this.registerSteps[0].value,
          huisnummer: this.registerSteps[1].value,
          elek: this.registerSteps[2].value,
          gas: this.registerSteps[3].value,
          emailadres: this.registerSteps[4].value,
          Naam: this.registerSteps[5].value,
          // message: this.registerSteps,
        }),
      }).then(() => {
        alert("Form submitted");
      });
  

// Code van Form




              }, 1000);
            });
          }
        }
        this.setProgress();
      },
      setProgress() {
        this.progress = (this.position / this.registerSteps.length * 100) + '%';
      }
    },
    mounted() {
      // kwesforms.init();
      
      let register = document.getElementById('register');
      this.setStep();
    }
  }
 
</script>

<style   scoped>
.greenbg {
  background: url('~assets/bg-green.png');
  background-size: cover;
}

 .container-form {
	 position: relative;
	 font-family: 'Noto Sans', sans-serif;
	 font-size: 1rem;
	 color: #333;
	 width: 100%;
	 min-height: 50vh;
	 display: flex;
	 justify-content: center;
	 align-items: center;
	 /* background: radial-gradient(#009345, #106b4e); */
}
 .container-form #progress {
	 position: absolute;
	 top: 0;
	 left: 0;
	 width: 0%;
	 height:100%;
	 background-color: #106b4e;
   transition: width 0.8s ease-in-out;
   opacity: 0.5;
}
 .fin   {
   height:0;
	 /* position: absolute; */
	 /* width: max-content; */
	 /* font-size: 2rem; */
   color: #fff;
   z-index: 0;
	 opacity: 0;
	 transition: 0.8s ease-in-out;
}
 div.show-final {
   opacity: 1;
   height: 200px !important;
}
 #register {
   position: relative;
   border-radius: 15px;
	 /* width: 480px; */
	 height: 120px;
	 padding: 10px;
	 background-color: #fff;
   box-shadow: 0 15px 30px rgba(0, 0, 0, .2), 0 10px 10px rgba(0, 0, 0, .2);
   
background: rgba( 255, 255, 255, 0.10 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 10.0px );
-webkit-backdrop-filter: blur( 10.0px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );


}
 #register.close {
   width: 0;
   height: 0;   /*added voor weghalen verticale streep na submit*/
	 padding: 10px 0;
   overflow: hidden;
   border: none;
	 transition: 0.8s ease-in-out;
	 box-shadow: 0 16px 24px 2px rgba(0, 0, 0, .2);
}
 .previousButton {
   position: absolute;
   width: 30px;
   height: 30px;
	 left: 30px;
	 top: 6px;
	 font-size: 1rem;
	 color: #616060;
	 cursor: pointer;
	 z-index: 20;
}
 .previousButton:hover {
	 color: #009345;
}
 .forwardButton {
   width: 50px;
   height: 50px;
   /* background-color: red; */
	 position: absolute;
	 top: 30px;
	 right: 20px;
	 font-size: 3rem;
	 color: #106b4e;
	 cursor: pointer;
   z-index: 20;
 /* -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  transition: all 0.2s; */
}
 .forwardButton:hover {
   /* top: 28px;
	 right: 18px; */
   color: #016831;
   /* width: 52px;
   height: 52px; */

    /* -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  transition: all 0.2s; */
}
 .wrong .forwardButton {
	 color: #d93f38;
}
 .close .forwardButton, .close .previousButton {
	 color: #fff;
}
 #inputContainer {
	 position: relative;
	 padding: 30px 20px 20px 20px;
	 margin-right: 60px;
	 opacity: 0;
	 transition: opacity 0.3s ease-in-out;
}
 #inputContainer input {
	 position: relative;
	 width: 100%;
	 font-size: 1.35rem;
	 font-weight: bold;
	 /* outline: 0;
	 background: yellow;
	 box-shadow: none;
	 border: none; */
}
 #inputContainer input:valid + #inputLabel {
	 top: -5px;
	 left: 60px;
	 font-size: 0.7rem;
	 font-weight: normal;
	 color: #444;
}
 #inputLabel {
   position: absolute;
   margin-left: 7px;
   margin-top: 10px;
	 top: 32px;
	 left: 20px;
	 font-size: 0.9rem;
	 font-weight: bold;
	 pointer-events: none;
	 transition: 0.2s ease-in-out;
}
 #inputProgress {
	 width: 0%;
	 border-bottom: 4px solid #106b4e;
   transition: width 0.6s ease-in-out;
   margin-top: -20px;
   opacity: 0.9;
}
 .wrong #inputProgress {
	 border-color: #d93f38;
}
 .showContainer {
	 opacity: 1 !important;
}
 .showContainer #inputProgress {
	 width: 100%;
}
 .wronganimation {
	 animation: 0.5s linear 0s 1 wrong-animation;
}
 .okanimation {
	 animation: 0.2s linear 0s 1 ok-animation;
}
 @keyframes wrong-animation {
	 0% {
		 transform: translateX(0);
	}
	 20% {
		 transform: translateX(-20px);
	}
	 40% {
		 transform: translateX(20px);
	}
	 60% {
		 transform: translateX(-20px);
	}
	 80% {
		 transform: translateX(20px);
	}
	 100% {
		 transform: translateX(0);
	}
}
 @keyframes ok-animation {
	 0% {
		 transform: translateY(0);
	}
	 50% {
		 transform: translateY(10px);
	}
	 100% {
		 transform: translateY(0);
	}
}
</style>