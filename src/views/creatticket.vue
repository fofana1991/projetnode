<template>
  <div >
<nav class="nav w-100 navbar-expand navbar-expand-lg text-dark  bg-secondary navbar-dark text-center d-none d-none">
  
   <li class="nav-item">
     <router-link class="nav-link  badge "  to="/updateUser/:id">updateUser</router-link> 
   </li>
  
    </nav>
    <getTicket/>
  </div>

</template>auth

<script>
// @ is an alias to /src
import getTicket from '@/components/creatTicket.vue'

export default {
  name: 'TicketView',
  components: {
    getTicket
  }
}
</script>