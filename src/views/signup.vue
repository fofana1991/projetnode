<template class=''>

<div class="container  m-auto p-4 signup" >

  
<div id="signup" > 

<div class="jumbotron">
   <h1>inscrivez vous</h1>
</div >

 <img alt="Vue logo" src="../assets/logo2.png" class='m-auto ' height='300px'>

    <userSignup />  

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



.signup{

  border-color:#bf8c26;
  border-width:5px;


}

#signup{
  background-image: url('../assets/scan.png') ;

  background-opacity:0,5; 

  animation:bg_animation 6000ms 200ms alternate infinite ease-in-out ;
}

@keyframes bg_animation {
    0%,30%{
      opacity:0,5; 
        
    }
    40%,50%{

    opacity:0,1; 
     border-color: blue;   
       
        
       
    }
60%,70%{
     

    background-image: url('../assets/scan3.jpeg') ;
}
70%,90%{
     

    background-image: url('../assets/logo4.png') ;
}

90%,100%{
      
      border-color: yellow;
      background-image: url('../assets/qrcodescan.jpg') ;
   
}
 }


</style>
