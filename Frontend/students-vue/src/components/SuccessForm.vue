<template>
    <div class="card-body border-color-pink">
      <h5 class="card-title">Success!</h5>
      <p class="card-text">Your Data Has Been {{judul}}</p>
      <router-link to="/" v-if="judul === 'Submit'" class="btn bg-color-pink text-dark">Back</router-link>
      <router-link to="/" v-else-if="judul === 'Update'" class="btn bg-color-pink text-dark">Back</router-link>
      <button class="btn bg-color-pink text-dark" @click="RefreshFunc" v-else>Refresh</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SuccessForm',
    data(){
      return{
       judul : null,
      }
    },
   methods:{
    ubahJudul(){
      let route = this.$route.fullPath;
      if (route === '/add') {
        this.judul = "Submit";
      }else if(route === '/'){
        this.judul = "Delete";
      }else{
        this.judul = "Update"
      }
    },
    RefreshFunc(){
      location.reload();
    }
   },
   mounted(){
    this.ubahJudul();
   },
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
