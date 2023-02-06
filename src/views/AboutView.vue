<template >

<div class=" container home m-auto border border-danger border-5" >
 
 

<h1>Se connecter a son compte </h1>

<div class="home m-auto p-4 " >
    <img alt="Vue logo" src="../assets/logo2.png" >
    <userLogin/>
    
  </div>
   </div>



<div class="row P-3 m-3" > 
 <ul >
 <li class="nav-item P-3 m-3">
 <router-link class="nav-link badge text-bg-primary"  to="/carte"> scaner sa carte</router-link>
  </li>

    </ul>
 </div>    

   
</template>


<script>

// @ is an alias to /src

import userLogin from '@/components/userCredential.vue'
export default {
  name: 'HomeView',
  components: {
    userLogin,
    

  }
}

</script>


<style>

.container {

background-color:#00FF00;

}  


</style>
