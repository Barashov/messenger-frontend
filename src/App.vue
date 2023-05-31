<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
       
  <Navbar></Navbar>
  <div class="main">
    
    <div class="box hide-on-mobile">
      <div class="friends white-shadow"></div>
    </div>
      
    <div class="page white-shadow">
      <RouterView/>
    </div>
  </div>
  
  
</template>

<script>
import Navbar from './components/Navbar.vue';
export default {
    components: [
        Navbar
    ],
    mounted() {
        if (this.$store.state.auth.is_auth == false) {
            this.$router.push("/login");
        }
        else {
            // check auth token 
            this.$router.push("/profile");
        }
    },
    components: { Navbar }
}
</script>

<style scoped>
@media (max-width: 768px) {
  .hide-on-mobile {
    display: none;
  }
  .main {
    /* display: flex; */
    height: 100vh;
  }
  .page {
      height: 100%;
  }

}

@media (min-width: 768px) {
  .main {
    display: flex;
    height: 100%;
  }
  .box {
    position: relative;
    width: 30%;
    height: 700px;
  }
  
  .page {
    width:  40%;
    height: 650px;
    border-radius: 4%;
    margin-top: 20px;
  }

  .friends {
    position: absolute;
    width: 45%;
    height: 600px;
    right: 6%;
    top: 5%;
    box-shadow: 0 3px 5px 5px rgb(186, 173, 173);
    border-radius: 4%;
  }

  .white-shadow {
    box-shadow: 0 5px 5px 5px rgb(186, 173, 173);
    background-color: rgb(242, 242, 242);
  }
}


</style>
