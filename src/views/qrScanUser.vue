<template class='bg-primary'>

<div class='m-4 p-3 d-flex'>
    <qrScanUser width='100' height='100'/>
 </div> 
</template>


<script>

// @ is an alias to /src
import qrScanUser  from '@/components/qrCodeScanUser.vue'

export default {
  name: 'carteViews',
  components: {
    qrScanUser
  }
}

</script>
