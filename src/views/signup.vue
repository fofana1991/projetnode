<template class='bg-primary'>

<div class="container  m-auto p-4 border border-danger border-5" >

  

<div class="jumbotron">
   <h1>inscrivez vous</h1>
</div >

 <img alt="Vue logo" src="../assets/logo2.png" class='m-auto p-4'>

    <userSignup/>

</div >   
  
</template>


<script>

// @ is an alias to /src
import userSignup from '@/components/userSignup.vue'
export default {
  name: 'signupWiew',
  components: {
    userSignup
  }
}

</script>


