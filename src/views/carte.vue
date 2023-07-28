
<template class='bg-primary'>

<div class='m-4 p-3 d-flex'>
<KeepAlive>
    <QRCodeVue3 width='100' height='100'/>
  </KeepAlive>  
 </div> 
</template>


<script>

// @ is an alias to /src
import QRCodeVue3 from '@/components/qrCode.vue'

export default {
  name: 'carteViews',
  components: {
    QRCodeVue3
  }
}

</script>
