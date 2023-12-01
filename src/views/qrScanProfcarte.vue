<template class='bg-primary'>

<div class='m-4 p-3 d-flex'>
    <qrScanProfcarte width='100' height='100'/>
 </div> 
</template>


<script>

// @ is an alias to /src
import qrScanProfcarte  from '@/components/qrScanProfcarte.vue'

export default {
  name: 'carteViews',
  components: {
    qrScanProfcarte
  }
}

</script>
