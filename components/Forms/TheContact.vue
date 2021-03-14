<template>

<section>
 <!-- <div class="w-full bg-center bg-cover" style="height:32rem; background: url(~assets/);"> -->
 <div class="items-center w-full mx-auto " >

<form @submit.prevent="submitForm">

<div v-if="error.length" class="w-full mx-auto text-center animate-pulse">
 
    <b>Verplichte velden zijn verplicht ;-)</b><br>
    <ul class="inline-block ">  
      <li v-for="e in error" v-bind:key="e.id" class="m-4 text-left">✍  {{e}}   </li>
    </ul>
</div>


    

<div v-if="!isSubmitted"  class="flex flex-col w-10/12 p-12 mx-auto bg-gray-200 border border-dashed shadow-2xl lg:w-6/12 xl:w-5/12 rounded-xl "> 

  
    <label for="name" class="py-4 font-bold">Je voor- en achternaam*:</label>
    <input type="text" id="name" name="name" v-model="name" placeholder="Voornaam en achternaam" class="px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required>
    <!-- <input type="text" id="name" name="name" v-model="name" placeholder="Voornaam en achternaam" required="" class=""/> -->
  
  
    <label for="email" class="py-4 font-bold">Je e-mailadres*:</label>
    <input type="email" id="email" name="email"  v-model="email" placeholder="E-mailadres" class="px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required>
    <!-- <input type="email" id="email"  v-model="email" name="email" placeholder="E-mailadres" required="" class="" /> -->
    
    
      <label  class="py-4">
      <div class="pb-4 font-bold">Je bericht*:</div>
      <textarea name="message" v-model="message" class="w-full px-3 pt-4 pb-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"></textarea>
      <!-- <textarea name="message" v-model="message" class=""></textarea> -->
      </label>  


    <button type="submit"  @click.prevent="submitForm" class="w-5/12 p-4 mx-auto mt-4 bg-yellow-400 rounded-md">➤ Verzenden </button>

   
<div class="p-0 m-0 text-sm text-gray-400">* verplicht</div>

</div>


<!-- NIET  -->
<div v-if="isSubmitted" class="text-center alert" role="alert">
     Bericht verzonden. ⚡🔥⚡
    </div>

  </form>
 
 </div>
</section>
</template>

<script>
const FORMSPARK_ACTION_URL = "https://submit-form.com/7Ldo0lbj";

export default {
  data() {
    return {
        error: [],
        name: null,
        email: null,
        message: "",
        isSubmitted: false
    };
  },
  methods: {
    submitForm(e) {

      if ( this.name && this.email && this.message) 
      {
                fetch(FORMSPARK_ACTION_URL, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
                body: JSON.stringify({
                    name: this.name,
                    email: this.email,
                    message: this.message,
                }),
              }).then(() => {
                  this.isSubmitted = true;
                // alert("Form submitted");
              });
     
     
              console.log("form verstuurd")
      }

      this.error=[];
      if ( !this.name  )
      {   
          this.error.push("Vul svp je voor- en achternaam in") 
      }
        if ( !this.email  )
      {   
          this.error.push("Vul svp je e-mailadres in") 
      }
        if ( !this.message  )
      {   
          this.error.push("Vul svp je bericht in") 
      }

      console.warn("errors", this.error)
      e.preventDefault()

    },
  },
};
</script>