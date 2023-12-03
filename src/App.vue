<template>

<div >
  <nav >


   <a class="navbar-brand mr-3" href="#">
      <img src="./assets/logo4.png" alt="" width="35" height="35">
    </a> 

     
 <router-link    to="/signup">s'enregistrer</router-link>|

 
  <router-link   to="/about">Connexion</router-link>|
   


  <router-link to="/produits">Produits</router-link>|

       
      
     <router-link  to="/users"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
</svg>
</router-link> |

    



<span @click='logout()'  >  
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-unlock-fill" viewBox="0 0 16 16">
  <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2z"/>
</svg>
</span>



  </nav>

  
  <div class="overflow-y-visible" >

  <router-view/>


</div>

</div>


 




</template>


<script>

  import {accountService} from '@/_services'
  
  
   
  export default {
  
  name: 'appVue',


  data(){

       return {


              }



       },
  

  methods:{


logout(){
  
accountService.logout()

this.$router.push( '/about')


},


   }
}         
       






        
</script>
























<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color:#CC9933;
}

body{
 

}

nav {


  a {
    
    font-weight: bold;
    color:black;
    
    
    &.router-link-exact-active {
      color: #42b983;
    }
    
}

}



</style>
