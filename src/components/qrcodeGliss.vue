<template>
  <div>
    <p class="decode-result">Last result: <b>{{ result }}</b></p>

    <p v-if="error !== null" class="drop-error">
      {{ error }}
    </p>

    <qrcode-stream :camera="camera"  @decode="onDecode" @init="onInit" size="size" class='border'/>
    
    <qrcode-drop-zone  @detect="onDetect" @dragover="onDragOver" @init="logErrors">
      
      <div class="drop-area" :class="{ 'dragover': dragover }">
        DROP SOME IMAGES HERE
      </div>
    </qrcode-drop-zone>
  </div>
</template>

<script>
import { QrcodeDropZone } from 'vue-qrcode-reader/src'

export default {

  components: { QrcodeDropZone },

  data () {
    return {
      result:'',
      error: null,
      dragover: false
    }
  },

  methods: {



     onDecode (result) {

      this.result = result
//window.location.replace(result)
   this.$router.push( {name:'updatething',params:{id:result}})


    },





    async onDetect (result) {
      try {


        this.result = result
//window.location.replace(result)
   this.$router.push( {name:'updatething',params:{id:result}})


       // const { content } =

      // await promise

       // this.result = content
       // this.error = null
        
      } catch (error) {
        if (error.name === 'DropImageFetchError') {
          this.error = 'Sorry, you can\'t load cross-origin images :/'
        } else if (error.name === 'DropImageDecodeError') {
          this.error = 'Ok, that\'s not an image. That can\'t be decoded.'
        } else {
          this.error = 'Ups, what kind of error is this?! ' + error.message
        }
      }
    },

    logErrors (promise) {
      promise.catch(console.error)
    },

    onDragOver (isDraggingOver) {
      this.dragover = isDraggingOver
    }
  }
}
</script>

<style>
.drop-area {
  height: 300px;
  color: #fff;
  text-align: center;
  font-weight: bold;
  padding: 10px;

  background-color: rgba(0,0,0,.5);
}

.dragover {
  background-color: rgba(0,0,0,.8);
}

.drop-error {
  color: red;
  font-weight: bold;
}
</style>
