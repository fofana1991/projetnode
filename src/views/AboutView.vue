<template>
<h1> merci les gares</h1>

<div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <userLogin/>
  </div>
</template>


<script>

// @ is an alias to /src
import userLogin from '@/components/userCredential.vue'
export default {
  name: 'HomeView',
  components: {
    userLogin
  }
}

</script>


