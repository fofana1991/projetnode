<template >

<div class=" container home m-auto border  pt-4"  >



 
<div class="home mt-auto" id="login">
    <img alt="Vue logo" src='../assets/logo4.png' class='mt-3' width="200" height="200">

<KeepAlive include="a,b">
    <userLogin :is="activeComponent"/>
 </KeepAlive>   
    
  </div>
   </div>


<div class="row P-3 m-3 menu"> 

<svg @click="show=!show" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-grid-3x3-gap-fill " viewBox="0 0 16 16">
  <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z"/>
</svg>
 
 <Transition name="slide-fade">
 
 <p v-if="show" >
 
 <ul v-if="voyant" >

 <li class="nav-item P-3 m-3 ">
 <router-link class="nav-link badge text-bg-secondary"  to="/services"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
</svg> ensemble de service</router-link>
  </li>
 

    </ul>
    </p>

    </Transition>

  
   
 </div> 
    

   
</template>


<script>

// @ is an alias to /src
import userLogin from '@/components/userCredential.vue'

import {accountService} from '@/_services'
import {geolocationService} from '@/_services'


export default {
  name: 'HomeView',
  components: {
    userLogin,

    

  },
  data() {
    return {
      show: false,
      voyant:'',
      geolocation:'' ,
    }
  },



 methods:{
getGeolocation(){

          geolocationService.getgeolocation().then(res=>{

this.geolocation=res.data

          })




}


 },

 
  mounted(){


if(accountService.isLogged()==true){

this.voyant='Vous etes connecté'

       }else{
this.voyant=''

       }  

}


};







</script>


<style>


#login{
  background-image: url('../assets/scan3.jpeg') ;

  background-opacity:0,5; 

  animation:bg_animation 6000ms 200ms alternate infinite ease-in-out ;
    
}

.container {
 

background-color:;

}

.ball{
    
    animation:switch 2000ms 200ms alternate infinite ease-in-out ;
    
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.menu{

 margin-bottom: +300px;

}





@keyframes switch {
    0%,{
        
        opacity:1;
    }
    40%,50%{


        border-color: red;
        width: 55px;
        
       
    }
60%,70%{
     border-color: blue;

    
}
90%,100%{
      
      border-color: yellow;
      
   
}
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
     

    background-image: url('../assets/scan.png') ;
}
70%,90%{
      
      border-color: yellow;
      background-image: url('../assets/logo4.png') ;
   
}



90%,100%{
      
      border-color: yellow;
      background-image: url('../assets/qrcodescan.jpg') ;
   
}
 }




@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}






</style>
