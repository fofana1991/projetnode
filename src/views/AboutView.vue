<template>
<h1> merci les gares</h1>

<div class="home">
   
    <QRCodeVue3 width='100' height='100'/>
  </div>




<div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <userLogin/>
    
  </div>
</template>


<script>

// @ is an alias to /src

import userLogin from '@/components/userCredential.vue'
import QRCodeVue3 from '@/components/qrCode.vue'
export default {
  name: 'HomeView',
  components: {
    userLogin,
    QRCodeVue3

  }
}

</script>


