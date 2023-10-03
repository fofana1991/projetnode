<template>

<div >
  <nav >

     
 <router-link    to="/signup">signup</router-link>|

 
  <router-link   to="/about">login</router-link>|
   


  <router-link to="/info">thingtable</router-link>|

       
      
     <router-link  to="/users"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-chat-dots-fill" viewBox="0 0 16 16">
  <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg></router-link> |

    



<span @click='logout()'  >  
Logout
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
