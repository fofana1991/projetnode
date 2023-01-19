<template>
  <div class="home bg-danger">
<nav class="nav w-100 navbar-expand navbar-expand-lg  bg-secondary navbar-dark text-center">
  
<li class="nav-item">
     <router-link class="nav-link  "  to="/updadething/:id">updatething</router-link> 

      </li>
  
<li class="nav-item">
  <router-link class="nav-link "  to="/addthing">addthing</router-link>
    
 </li>

    </nav>
  


    <stuffFetch />
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

