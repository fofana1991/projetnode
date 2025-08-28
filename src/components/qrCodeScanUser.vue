<template>

<div class='container form-group p-3 d-block'>
  
  <div class='row col-12  form-group p-3'>
    
  <span>
CHOISISSEZ UNE OPTION
  </span>

 

<select  v-model="this.operation" placeholder='Operation' >
 
   <option value="00 709">entrée</option>
   <option value="00 711">sortie</option>
   <option value="00 212">Depos</option>

</select>


    </div>


  <div class=" row col-12 p-3 m-4">

     <p class="error" v-if='error'> {{update}}</p>
    <p class="error" v-if='error'> {{ error }} </p>

    <p class="decode-result">Last result: <b> <a href="this.result" >{{ result }}</a></b></p>

    <qrcode-stream :camera="camera" @decode="onDecode" @init="onInit" size="size" class='border'/>

  </div>

  </div>
</template>

<script>

 import isUrl from 'is-url'; 
import { QrcodeStream } from 'vue-qrcode-reader/src'

export default {
   name: 'qrScanUser',

  components: { QrcodeStream },

  data () {
    return {

      update:'',
      result: '',
      error: '',
      operation:'',
      result2:'',
      


    }
  },

  methods: {
    onDecode (result) {

      this.result = result + ' ' + this.operation
      this.result.split(' ')[0]

//window.location.replace(result)

      if (isUrl(result)) {
        result='63f15c8d669593706a3a3eb7'
        this.$router.push( {name:'updateUser',params:{id:result}})
    } else if(this.result.split(' ')[2]==502 || this.result.split(' ')[2]==607){
         this.$router.push( {name:'ticket',params:{id:result}})
    }
    else if(this.result.split(' ')[2]==212){
         this.$router.push( {name:'updateUser',params:{id:result}})
         
    }else if(this.result.split(' ')[2]==503 || this.result.split(' ')[2]==709 || this.result.split(' ')[2]==711){
         this.$router.push( {name:'updateUser',params:{id:this.result}})
    }


    else if (Date.now()-Number(20000)<=this.result.split(' ')[1]) {

        this.$router.push( {name:'updateUser',params:{id:result}})
}
    else{
  alert('Mettez votre carte a jour')
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