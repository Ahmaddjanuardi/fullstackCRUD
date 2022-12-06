<template>
  <div class="image">
    <img src="../assets/img/img_code.jpg" alt="">
    <router-link to="/add" v-show="CurrentRoutName == '/'">
        <button type="button" class="btn btn-primary">Add Data</button>
    </router-link>
    <router-link to="/" v-show="CurrentRoutName == '/add'">
        <button type="button" class="btn btn-primary">Back</button>
    </router-link>
  </div>
</template>

<script>

export default {
name: 'NavbarComponentView',
computed:{
    CurrentRoutName(){
        return this.$route.path
    }
}
}
</script>

<style scoped>
.image img {
    height: 100%;
    width: 100%;
}
button{
    margin: 40px;
}
</style>