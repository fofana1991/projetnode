<template>

<div class="home  col-12">
    

<div class=''>

</div>

    
<HelloWorld :is="activeComponent"/>

 </div>
     
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  

  }
}
</script>
