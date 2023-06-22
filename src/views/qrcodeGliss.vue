<template class='bg-primary'>

<div class='m-4 p-3 d-flex'>
    <QrcodeDropZone width='100' height='100'/>
 </div> 
</template>


<script>

// @ is an alias to /src
import QrcodeDropZone from '@/components/qrcodeGliss.vue'

export default {
  name: 'carteViews',
  components: {
    QrcodeDropZone
  }
}

</script>
