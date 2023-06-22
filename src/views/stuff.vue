<template>
  <div class="home overflow-y-hidden ">

  <nav class="nav w-100 navbar-expand navbar-expand-lg text-dark  bg-secondary navbar-dark text-center z-1 position-fixed fixed-bottom">
  
  
<li class="nav-item">
  <router-link class="nav-link text-body-emphasis badge"  to="/addthing">addthing</router-link>
    
 </li>

<li class="nav-item">
  <router-link class="nav-link text-body-emphasis badge"  to="/recu">addrecu</router-link>
    
 </li>


 <li class="nav-item">
  <router-link class="nav-link text-body-emphasis badge"  to="/recus">recus</router-link>
    
 </li>

    </nav>    

  


    <stuffFetch  class='z-0'/>




    


  </div>



  
</template>

<script>
// @ is an alias to /src
import stuffFetch from '@/components/stuffFetch.vue'

export default {
  name: 'stuffVew',
  components: {
    stuffFetch
  }
}
</script>

