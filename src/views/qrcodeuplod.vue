<template class='bg-primary'>

<div class='m-4 p-3 d-flex'>
    <QrcodeCapture width='100' height='100'/>
 </div> 
</template>


<script>

// @ is an alias to /src
import QrcodeCapture  from '@/components/qrcodeUplod.vue'

export default {
  name: 'carteViews',
  components: {
    QrcodeCapture 
  }
}

</script>
