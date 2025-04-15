<template >

 



<div class=" container home m-auto border border-danger border-5 text-align-center" >

<div width='250' height='50'  class=' row bg-primary'>



 </div>

  
  <div class="home m-4 p-4 fixed-bottom" id="printable">
    <ticketEdit/>
    
  </div>


</div>
</template>


<script>

// @ is an alias to /src

import ticketEdit from '@/components/getTicket.vue'

export default {
  name: 'HomeView',
  components: {
    ticketEdit,
    

  },




}

</script>


