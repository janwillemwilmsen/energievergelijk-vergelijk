 <template >
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

          }

 }
 </script>
 
  <style scoped>
 
 
 </style>