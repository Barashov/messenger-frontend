<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
    <nav>
        <!-- <RouterLink to="/profile">profile</RouterLink> -->
        <!-- <RouterLink to="/chats">chats</RouterLink> -->
        <RouterLink to="/registration">registration</RouterLink>
        <RouterLink to="/login">login</RouterLink>
    </nav>
</template>


<style scoped>
@media (min-width: 768px) {
    nav {
        background-color: blue;
        width: 100%;
    
    }

    nav * {
        color: aliceblue;
    }
}



</style>