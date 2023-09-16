<template>
  <div >
<nav class="nav w-100 navbar-expand navbar-expand-lg text-dark  bg-secondary navbar-dark text-center d-none d-none">
  
   <li class="nav-item">
     <router-link class="nav-link  badge "  to="/updateRecu/:id">updateRecu</router-link> 
   </li>
  
    </nav>
    <getRecu/>
  </div>

</template>

<script>
// @ is an alias to /src
import getRecu from '@/components/getRecu.vue'

export default {
  name: 'getRecuVew',
  components: {
    getRecu
  }
}
</script>


