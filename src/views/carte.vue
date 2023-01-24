
<template class='bg-primary'>

    <QRCodeVue3 width='100' height='100'/>
  
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
