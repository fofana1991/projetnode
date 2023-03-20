<template class='bg-primary'>

<div class="container  m-auto p-4 border" >

  
<div id="signup" > 

<div class="jumbotron">
   <h1>inscrivez vous</h1>
</div >

 <img alt="Vue logo" src="../assets/canvas.png" class='m-auto ' height='300px'>

    <userSignup/>

</div > 

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

<style>

#signup{
  background-image: url('../assets/scan.png') ;

  background-opacity:0,5; 
}

</style>
