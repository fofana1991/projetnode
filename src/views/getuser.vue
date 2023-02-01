 
<template>
  <div >
<nav class="nav w-100 navbar-expand navbar-expand-lg text-dark  bg-secondary navbar-dark text-center d-none d-none">
  
   <li class="nav-item">
     <router-link class="nav-link  badge "  to="/updateUser/:id">updateUser</router-link> 
   </li>
  
    </nav>
    <getUser/>
  </div>

</template>auth

<script>
// @ is an alias to /src
import getUser from '@/components/getuser.vue'

export default {
  name: 'usersVew',
  components: {
    getUser
  }
}
</script>
