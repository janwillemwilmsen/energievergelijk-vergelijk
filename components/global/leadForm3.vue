<template>
      <div class="container-form">
      <div id="progress"> </div>
        <div id="register">


          <div id="inputContainer">

            <form>
                <input id="inputField" :type="inputType" v-model="inputValue" ref="registerinput" required />
                <label id="inputLabel">{{ inputLabel  }}</label>

            </form>
            <div id="inputProgress"></div>
          </div>

  
        </div>
   </div>  
</template>

<script>
 

 export default {
          data: () => {
            return {
            position:0,
            inputLabel: '',
            inputType: 'text',
            inputValue: '',
            registerSteps:[
            {
              label: "Wat is je voornaam",
              type:  "text",
              value: "",
              pattern: /.+/
            },
            {
              label: "Wat is je achternaam",
              type: "text",
              value: "",
              pattern: /.+/
            },
            {
              label: "Wat is je emailadres?",
              type: "text",
              value: "",
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            },
            {
              label: "",
              type: "password",
              value: "",
              pattern: /.+/
            },
          ]
        }
       },
       methods: {
            setStep() {
                this.inputLabel = this.registerSteps[this.position].label;
                this.inputType = this.registerSteps[this.position].type;
                this.inputValue = this.registerSteps[this.position].value;
                this.$refs.registerinput.focus();
            }
       },
       mounted(){

            this.setStep();

       } 

 }
 
</script>

<style   scoped>

   .container-form {
     position: relative;
     font-family: 'Noto Sans', sans-serif;
     font-size: 1rem;
     color: #333;
     width: 100%;
     
     display: flex;
     justify-content: center;
     align-items: center;
     background:radial-gradient(#009345,#106B4E);

   }
 
#progress {
 
top:0;
left:0;
width: 25%;
height: 100vh;
background-color: #106B4E;
transition: width .8s ease-in-out;
}

#register{
  position: relative;
  width:480px;
  height: 80px;
  background-color: #fff;
  padding: 10px;
  box-shadow: 0 15px 30px rgba(0,0,0, .2), 
              0 10px 10px rgba(0,0,0, .2);
}


#inputContainer{
    position: relative;
    padding: 30px 20px 20px 20px;
    margin-right:60px;
    opacity: 0;
    transition: opacity .3s ease-in-out;

                        }

 #inputContainer input {
                position: relative;
                width: 100%;
                font-size:1.35rem;
                font-weight:bold;
                outline:0;
                background: transparant;
                box-shadow:none;
                border:none;
                }

                            
#inputContainer input:valid + #inputlabel {
                                        top: 3px;
                                        left:42px;
                                        font-size: .7rem;
                                        font-weight: normal;
                                        color: #999 !important;
                                 }

#inputLabel {
 position: absolute;
 top:32px;
 left:32px;
 font-size: 1.35rem;
 font-weight: bold;
pointer-events: none;
transition: .2s ease-in-out;

}
</style>