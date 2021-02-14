<template>
  
  <div class="container w-full mx-auto h-96">
<!-- 
        <h1 class="pt-10 text-xl">Bedankt!</h1>
        <p>
            Waarschijnlijk ontvang je komend weekend je rapport.

        </p> -->

<!-- <div class="form">
    <h1 v-if="!status">Send a message!</h1>

    <form v-if="!status" @submit="sendForm" class="kwes-form"  action="https://kwes.io/api/foreign/forms/mNPut6yGVcm9O1toGGEK">
      <input   type="email"  name="email"  v-model="email"  placeholder="Enter your email..."  required/>
      <input  type="text"  name="message"  v-model="message"  placeholder="Leave a message..."  required />
      <button type="submit">Send</button>
    </form>

    <h1 v-if="status === 'success'">Thank you, we got your submission!</h1>
    <h1 v-if="status === 'error'">Oops, something went wrong. Please try again.</h1>
  </div> -->


   <div class="container-form">
    <div id="progress" :style="{width: progress}"></div>
    <h1 :class="{'show-final': showFinal}">Thank you for your registration, {{ registerSteps[0].value }}</h1>
    <div id="register">
      <i v-if="position === 0" class="previousButton fas fa-user"></i>
      <i v-else class="previousButton fas fa-arrow-left" @click="previousStep"></i>
      <i class="forwardButton fas fa-arrow-right" @click="checkStep"></i>
      <div id="inputContainer" :class="{'showContainer': showContainer}">
        <!-- <form @submit.prevent="checkStep" id="contactform"  action="https://kwes.io/api/foreign/forms/mNPut6yGVcm9O1toGGEK" method="POST" data-kw-multistep > -->
        <form @submit.prevent="checkStep" id="contactform"  action="https://usebasin.com/f/f12711113043" method="POST"   >
          <input id="inputField" :type="inputType" :name="inputName" v-model="inputValue" ref="registerinput" required />
          <label id="inputLabel">{{ inputLabel }}</label>
          <input type="submit" name="submit" class="invisible" >
          <!-- 
          
          ON FORM: data-kw-multistep -->
        </form>
        <div id="inputProgress"></div>
        <div id="form-message"></div>
      </div>
    </div>
  </div>

  </div>


</template>

<script>


const kwesforms = require('kwesforms');

//  export default {
//     name: 'Form',
//     data: function () {
//       return {
//         status: null,
//         email: null,
//         message: null,
//       }
//     },
//     methods: {
//       sendForm: function (event) {
//         event.preventDefault()

//         fetch('https://kwes.io/api/foreign/forms/mNPut6yGVcm9O1toGGEK', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             Accept: 'application/json',
//           },
//           body: JSON.stringify({ email: this.email, message: this.message }),
//         })
//           .then((response) => response.json())
//           .then((response) => {
//             if (response.code === 200) {
//               this.status = 'success'
//             } else {
//               // Formcarry error
//               this.status = 'error'
//             }
//           })
//           // network error
//           .catch(() => (this.status = 'error'))
//       },
//     },
//      mounted() {
//       kwesforms.init();
      
       
//     }
//   }
//////////////////////////////////////////

 export default {
    data: () => {
      return {
        position: 0,
        inputLabel: '',
        inputType: 'text',
        inputValue: '',
        inputName:'',
        showContainer: false,
        showFinal: false,
        progress: '0%',
        registerSteps: [
          {
            label: "Wat is je voornaam?",
            type: "text",
            name: "",
            value: "",
            pattern: /.+/
          },
          {
            label: "What's your last name?",
            type: "text",
            name:"",
            value: "",
            pattern: /.+/
          },
          {
            label: "What's your email?",
            type: "text",
            name:"",
            value: "",
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          },
          {
            label: "Create your password",
            type: "password",
            name:"",
            value: "",
            pattern: /.+/
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
        this.$refs.registerinput.focus();
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
                console.log(inputName)
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
      kwesforms.init();
      
      let register = document.getElementById('register');
      this.setStep();
    }
  }


</script>

<style>
 .form form {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    width: 480px;
    padding: 24px;
    margin: 0 auto;
  }

  .form input {
    margin-bottom: 16px;
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
	 background: radial-gradient(#009345, #106b4e);
}
 .container-form #progress {
	 position: absolute;
	 top: 0;
	 left: 0;
	 width: 0%;
	 height:50vh;
	 background-color: #106b4e;
	 transition: width 0.8s ease-in-out;
}
 h1 {
	 position: absolute;
	 width: max-content;
	 font-size: 2rem;
	 color: #fff;
	 opacity: 0;
	 transition: 0.8s ease-in-out;
}
 h1.show-final {
	 opacity: 1;
}
 #register {
	 position: relative;
	 width: 480px;
	 height: 80px;
	 padding: 10px;
	 background-color: #fff;
	 box-shadow: 0 15px 30px rgba(0, 0, 0, .2), 0 10px 10px rgba(0, 0, 0, .2);
}
 #register.close {
	 width: 0;
	 padding: 10px 0;
	 overflow: hidden;
	 transition: 0.8s ease-in-out;
	 box-shadow: 0 16px 24px 2px rgba(0, 0, 0, .2);
}
 .previousButton {
	 position: absolute;
	 left: 30px;
	 top: 12px;
	 font-size: 1rem;
	 color: #9e9e9e;
	 cursor: pointer;
	 z-index: 20;
}
 .previousButton:hover {
	 color: #009345;
}
 .forwardButton {
   width: 50px;
   height: 50px;
   background-color: red;
	 position: absolute;
	 top: 30px;
	 right: 20px;
	 font-size: 3rem;
	 color: #106b4e;
	 cursor: pointer;
	 z-index: 20;
}
 .forwardButton:hover {
	 color: #009345;
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
	 outline: 0;
	 background: yellow;
	 box-shadow: none;
	 border: none;
}
 #inputContainer input:valid + #inputLabel {
	 top: 3px;
	 left: 42px;
	 font-size: 0.7rem;
	 font-weight: normal;
	 color: #999;
}
 #inputLabel {
	 position: absolute;
	 top: 32px;
	 left: 20px;
	 font-size: 1.35rem;
	 font-weight: bold;
	 pointer-events: none;
	 transition: 0.2s ease-in-out;
}
 #inputProgress {
	 width: 0%;
	 border-bottom: 6px solid #106b4e;
	 transition: width 0.6s ease-in-out;
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