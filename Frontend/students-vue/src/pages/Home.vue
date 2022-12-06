<template>
    <div class="">
        <NavbarVue></NavbarVue>
        <div class="col-md-8 d-flex">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
        <Copyright></Copyright>
    </div>
</template>

<script>
import NavbarVue from '@/components/Navbar.vue';
import Card from '@/components/Card.vue'
import Copyright from '@/components/Copyright.vue'
export default {
    name: 'HomePage',
    components:{
        NavbarVue,
        Card,
        Copyright
        
    }
}
</script>

<style>

</style>