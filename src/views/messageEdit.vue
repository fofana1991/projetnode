<template >

 



<div class=" container home m-auto border border-danger border-5 text-align-center" >

<div width='250' height='50'  class=' row bg-primary'>



 </div>

  
  <div class="home m-4 p-4 fixed-bottom" >
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


