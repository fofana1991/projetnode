<template >


<nav class="nav w-100 navbar-expand navbar-expand-lg  bg-secondary navbar-dark text-center" >
  
   <ul>
 <li class="nav-item">
 <router-link class="nav-link badge text-bg-info"  to="/carte"> scaner sa carte</router-link>
  </li>

    </ul>
   </nav>
  
<div class=" container home m-auto border border-danger border-5" >
  

<h1>Se connecter a son compte </h1>

<div class="home m-auto p-4 " >
    <img alt="Vue logo" src="../assets/logo2.png" >
    <messageEdit/>
    
  </div>

   </div>
</template>


<script>

// @ is an alias to /src

import messageEdit from '@/components/messageEdit.vue'

export default {
  name: 'HomeView',
  components: {
    messageEdit,
    

  }
}

</script>


