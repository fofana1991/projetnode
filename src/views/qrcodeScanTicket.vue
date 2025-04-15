<template class='bg-primary'>

<div class='m-4 p-3 d-flex'>
    <qrScanTicket width='100' height='100'/>
 </div> 
</template>


<script>

// @ is an alias to /src
import qrScanTicket  from '@/components/qrcodeScanTicket.vue'

export default {
  name: 'carteViews',
  components: {
    qrScanTicket
  }
}

</script>
