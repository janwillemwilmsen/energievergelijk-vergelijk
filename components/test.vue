<template>
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
</template>

<script>
  export default {
    name: 'Form',
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

        fetch('Your-Form-Endpoint', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({ email: this.email, message: this.message }),
        })
          .then((response) => response.json())
          .then((response) => {
            if (response.code === 200) {
              this.status = 'success'
            } else {
              // Formcarry error
              this.status = 'error'
            }
          })
          // network error
          .catch(() => (this.status = 'error'))
      },
    },
  }
</script>