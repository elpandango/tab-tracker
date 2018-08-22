<template>
  <div>
    <h1>Register</h1>

    <input type="email"
           name="email"
           v-model="email"
           placeholder="email">
    <br>
    <input type="password"
           name="password"
           v-model="password"
           placeholder="password">
    <br>
    <button @click="register">Register</button>

  </div>
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService';
  import axios from 'axios';
  export default {
    data() {
      return {
        email: "",
        password: ""
      }
    },
    methods: {
      register() {
        axios.post('http://localhost:8081/register', {
          email: this.email,
          password: this.password
        }).then(response => {
          console.log(response.data);
        })
      }


//      async register() {
//        const response = await AuthenticationService.register({
//          email: this.email,
//          password: this.password
//        });
//        console.log(response.data);
//      }
    }
  }
</script>

<style>

</style>
