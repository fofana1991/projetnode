<template>
  <div class="p-3 m-4">
    <p class="error" v-if='error'> {{ error }} </p>

    <p class="decode-result">Last result: <b> <a href="this.result" >{{ result }}</a>   </b></p>

    <qrcode-stream :camera="camera" @decode="onDecode" @init="onInit" size="size" class='border'/>

  </div>
</template>

<script>

 import isUrl from 'is-url'; 
import { QrcodeStream } from 'vue-qrcode-reader/src'

export default {
   name: ' qrScanProfcarte',

  components: { QrcodeStream },

  data () {
    return {

      
      result: '',
      error: '',


    }
  },

  methods: {
    onDecode (result) {

      this.result = result
//window.location.replace(result)

      if (isUrl(result)) {
        result='63f15c8d669593706a3a3eb7'
        this.$router.push( {name:'getProfCarte',params:{id:result}})
    }else{

        this.$router.push( {name:'getProfCarte',params:{id:result}})
}

      

    },

    async onInit (promise) {
      try {
        await promise
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          this.error = "ERROR: you need to grant camera access permission"

        } else if (error.name === 'NotFoundError') {
          this.error = "ERROR: no camera on this device"
        } else if (error.name === 'NotSupportedError') {
          this.error = "ERROR: secure context required (HTTPS, localhost)"
        } else if (error.name === 'NotReadableError') {
          this.error = "ERROR: is the camera already in use?"
        } else if (error.name === 'OverconstrainedError') {
          this.error = "ERROR: installed cameras are not suitable"
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.error = "ERROR: Stream API is not supported in this browser"
        } else if (error.name === 'InsecureContextError') {
          this.error = 'ERROR: Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.';
        } else {
          this.error = `ERROR: Camera error (${error.name})`;
        }
      }
    }
  }
}
</script>

<style scoped>
.error {
  font-weight: bold;
  color: red;
}
</style>