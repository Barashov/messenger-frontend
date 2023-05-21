<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
        <!-- <RouterLink to="/">Home</RouterLink> -->
        <!-- <RouterLink to="/about">About</RouterLink> -->
  <Header></Header>
  <div class="main">
    
    <div class="box">
      <div class="friends white-shadow"></div>
    </div>
      
    <div class="page white-shadow">
      <RouterView/>
    </div>
  </div>
  
  
</template>

<script>
import Header from './components/Header.vue'
export default {
  components: [
    Header
  ],
  mounted() {
    if (this.$store.state.auth.is_auth == false) {
      this.$router.push('/login')
    }
    else {
      // check auth token 
      this.$router.push('/profile')
    }
  }
}
</script>

<style scoped>
@media (max-width: 768px) {
  .page {
    background-color: brown;
  }
}

@media (min-width: 768px) {
  .main {
    display: flex;
    height: 100%;
    margin-top: 1%;
  }
  .box {
    position: relative;
    width: 30%;
    height: 700px;
  }
  
  .page {
    width:  40%;
    height: 650px;
    padding: 5px;
    border-radius: 4%;
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
    background-color: rgb(252, 252, 252);
  }
}

</style>
