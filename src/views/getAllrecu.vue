<template>


 

  <div class="home col-12">

<nav class="nav w-100 navbar-expand navbar-expand-lg text-dark  bg-secondary navbar-dark text-center z-1 position-fixed fixed-bottom" v-if="voyant">
  
  
<li class="nav-item">
  <router-link class="nav-link text-body-emphasis badge"  to="/recu">ajoutez une maison</router-link>
    
 </li>


 <li class="nav-item">
  <router-link class="nav-link text-body-emphasis badge"  to="/maison">Maison disponible</router-link>
    
 </li>

    </nav>    


    
<getAllrecu/>

  </div>
</template>

<script>
// @ is an alias to /src
import getAllrecu from '@/components/getAllrecu.vue'
import {accountService} from '@/_services'


export default {
  name: 'getAllrecuWiew',
  components: {
    getAllrecu,
  
  },
  data() {
    return {
      voyant:'',
    }
  },


  mounted(){

 if(accountService.isLogged()==true){

this.voyant='success'

       }else{
this.voyant=''

       }  

}
}
</script>
