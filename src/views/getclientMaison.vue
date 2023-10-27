<template>
  <div >
<nav class="nav w-100 navbar-expand navbar-expand-lg text-dark  bg-secondary navbar-dark text-center d-none d-none">
  
   <li class="nav-item">
     <router-link class="nav-link  badge "  to="/updateRecu/:id">updateRecu</router-link> 
   </li>
  
    </nav>
    <getclientMaison/>
  </div>

</template>

<script>
// @ is an alias to /src
import getclientMaison from '@/components/clientgetMaison.vue'

export default {
  name: 'getRecuVew',
  components: {
    getclientMaison
  }
}
</script>

