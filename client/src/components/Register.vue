<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <input type="email"
                 name="email"
                 v-model="email"
                 placeholder="email">
          <br>
          <div class="error">{{error}}</div>
          <br>
          <input type="password"
                 name="password"
                 v-model="password"
                 placeholder="password">
          <br>
          <v-btn class="cyan" @click="register">Register</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService';
  import axios from 'axios';

  export default {
    data() {
      return {
        email: "",
        password: "",
        error: null
      }
    },
    methods: {
      async register() {
        try {
          const response = await AuthenticationService.register({
            email: this.email,
            password: this.password
          });
          console.log(response.data);
        } catch (error) {
          this.error = error.response.data.error;
        }

      }
    }
  }
</script>

<style scoped>
  .error {
    color: red;
  }
</style>
