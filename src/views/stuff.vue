<template>
  <div class="home overflow-y-hidden" >

  <nav class="nav w-100 navbar-expand navbar-expand-lg text-dark  bg-secondary navbar-dark text-center z-1 position-fixed fixed-bottom" v-if="voyant">
  
  
<li class="nav-item">
 <router-link class="nav-link text-body-emphasis badge"  to="/addthing">ajoutez un produit</router-link>
</li>

<li class="nav-item">
  <router-link class="nav-link text-body-emphasis badge"  to="/recu">ajoutez une maison</router-link>
    
 </li>


 <li class="nav-item">
  <router-link class="nav-link text-body-emphasis badge"  to="/recus">Maison disponible</router-link>
    
 </li>

    </nav>    

  


    <stuffFetch  class='z-0'/>




    


  </div>



  
</template>

<script>
// @ is an alias to /src
import stuffFetch from '@/components/stuffFetch.vue'
import {accountService} from '@/_services'

export default {
  name: 'stuffVew',
  components: {
    stuffFetch
  },
  data() {
    return {
      show: false,
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

