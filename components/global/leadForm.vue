 <template>
<div>

  <div class="form">
    <h1 v-if="!status">Send a message!</h1>

    <form v-if="!status" @submit="sendForm">
      <input  type="email"    name="email"    v-model="email" placeholder="Enter your email..." required/>
      <input  type="text"  name="message"   v-model="message"  placeholder="Leave a message..."  required/>
      <button type="submit">Send</button>
    </form>

    <h1 v-if="status === 'success'">Thank you, we got your submission!</h1>
    <h1 v-if="status === 'error'">Oops, something went wrong. Please try again. </h1>
  </div>



<!-- <form id="contactform" action="https://formsubmit.io/send/9d0d83bd-f75c-4570-adb2-4198282fbeae" method="POST"> -->
<!-- <form id="contactform" action="https://formsubmit.io/send/9d0d83bd-f75c-4570-adb2-4198282fbeae" method="GET"> -->
<!-- <form id="contactform" onsubmit='return false' action="https://formsubmit.io/send/9d0d83bd-f75c-4570-adb2-4198282fbeae" method="GET">

 
<input type="text" value="" name="gas" class="border border-black ">
<input type="text" value="" name="elek" class="border border-black">
<input type="text" value="" name="poscode" class="border border-black">
<input type="text" value="" name="huisnr" class="border border-black">

<input type="email" name="" id="" class="border border-black">

<input type="submit" value="verzenden"  class="border-black ">
 

</form> -->



   <form-wizard>
  <tab-content title="Personal details">
    My first tab content
  </tab-content>
  <tab-content title="Additional Info">
      My second tab content
   </tab-content>
   <tab-content title="Last step">
     Yuhuuu! This seems pretty damn simple
   </tab-content>
</form-wizard>



</div>
 </template>
 
 <script>
 export default {
       name: "Form",
    data: function () {
      return {
        status: null,
        email: null,
        message: null,
      }
    },
    methods: {
      sendForm: function (event) {
        event.preventDefault()

        fetch("https://formsubmit.io/send/9d0d83bd-f75c-4570-adb2-4198282fbeae", {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ email: this.email, message: this.message }),
        })
          .then((response) => response.json())
          .then((response) => {
            if (response.code === 200) {
              this.status = "success"
            } else {
              // Formcarry error
              this.status = "error"
            }
          })
          // network error
          .catch(() => (this.status = "error"))
      },
    },
 
 }
 </script>
 
 <style>
 
 </style>