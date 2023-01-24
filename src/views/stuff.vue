<template>
  <div class="home bg-danger overflow-y-hidden">
<nav class="nav w-100 navbar-expand navbar-expand-lg text-dark  bg-secondary navbar-dark text-center">
  
<li class="nav-item">
     <router-link class="nav-link  badge"  to="/updadething/:id">updatething</router-link> 

      </li>
  
<li class="nav-item">
  <router-link class="nav-link text-body-emphasis badge"  to="/addthing">addthing</router-link>
    
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

