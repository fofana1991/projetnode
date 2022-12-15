<template>
  <div class="home bg-danger">
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

