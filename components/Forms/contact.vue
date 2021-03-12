<template>
  <form @submit.prevent="submitForm">
    
    <label for="name">Name</label>
    <input type="text" id="name" name="name" placeholder="Name" required="" 
    class="flex-1 block w-full border-gray-800 rounded-none focus:ring-indigo-500 focus:border-indigo-500 rounded-r-md sm:text-sm"/>
  
  
    <label for="email">Email</label>
    <input type="email" id="email" name="email" placeholder="Email" required="" />
    
    
    <label>
      <span>Message</span>
      <textarea name="message" v-model="message"></textarea>
    </label>





    <button type="submit">Submit</button>
  </form>
</template>

<script>
const FORMSPARK_ACTION_URL = "https://submit-form.com/7Ldo0lbj";

export default {
  data() {
    return {
      message: "",
    };
  },
  methods: {
    async submitForm() {
      await fetch(FORMSPARK_ACTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          message: this.message,
        }),
      }).then(() => {
        alert("Form submitted");
      });
    },
  },
};
</script>