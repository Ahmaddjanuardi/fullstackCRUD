<template>
    <div class="card-body border-color-pink">
      <h5 class="card-title">Success!</h5>
      <p class="card-text">{{ message }}</p>
      <router-link to="/" class="btn bg-color-pink text-dark">Back</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SuccessForm',
    data(){
      return{
        message: this.sendMessage
      }
    },
    props:['sendMessage'],
    // watch:{
    //   sendMessage(newValue){
    //     this.message = newValue
    //   }
    // }
  }
  </script>
  
  <style scoped>
  .border-color-pink{
      border: solid 2px pink;
  }
  .bg-color-pink{
      background-color: pink;
  }
  </style>