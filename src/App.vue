<template>

<div>


  <nav class=" width='25' hight='25' nav  navbar-expand navbar-expand-lg  bg-light navbar-light text-center  position-fixed" >
  
  
     <a class="navbar-brand" href="#"><img src="./assets/logo2.png" width='25' hight='25'/></a>


     <li class="nav-item ">
 <router-link class="nav-link text-body-emphasis "   to="/signup">signup</router-link>
  </li>
 <li class="nav-item">
  <router-link class="nav-link  text-body-emphasis nav-link active lumiere"  to="/about">login</router-link>
   </li>

    <li class="nav-item">
  <router-link class="nav-link active text-body-emphasis"  to="/info">thingtable</router-link>
   </li>
       
      <li class="nav-item">
     <router-link class="nav-link text-body-emphasis "  to="/users">Users</router-link> 

      </li>

<li class="nav-item">

<span @click='logout()' class="nav-link  " >

Deconexion
</span>
  


</li>

 <button class="menu">menu</button>
  
  </nav>










  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>

</div>
  
  <div class="overflow-y-visible" >

  <router-view/>

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
}

nav {

  padding: 30px;

  
  animation: switch 6000ms 150ms alternate infinite ease-in-out paused backwards;
  word-wrap: hidden;
  opacity: 0;
    
    


  a {
    font-weight: bold;
    color: #2c3e50;
    
    
    &.router-link-exact-active {
      color: #42b983;
    }
    
}

}



.manche:hover + .lumiere{
    animation-play-state: running;
}




.lumiere{
    
    animation: lumiere_animation 500ms 500ms alternate infinite ease-in-out backwards paused;
}



.switch{

    animation: switch 6000ms 150ms alternate infinite ease-in-out paused forwards;

}


#ball{
    
    animation:lumiere_animation 200ms 6000ms alternate infinite ease-in-out ;
    
}




 .switch:hover {

    animation-play-state: running;

}


@keyframes lumiere_animation {
    
    0%{
    
        
    }

    40%{
    transform: rotate(-45deg); 
    
    
    }


    60%{
    transform:skew(45deg,-45deg); 
    }
    80%,100%{
        position: absolute;
    }
 }

 

 @keyframes switch {

    0%{
        
        opacity:1;
    }

    40%{


    margin-left:+10px;
        
       
    }

60%{
    
    margin-left:+10px;

    
}
90%,100%{
      
    margin-left:+10px;
      
   
}
 }




</style>
