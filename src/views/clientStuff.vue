<template>
  <div class="home overflow-y-hidden" >


    <clientstuffFetch  class='z-0'/>

  </div>

 
  
</template>

<script>
// @ is an alias to /src
import clientstuffFetch from '@/components/clientStuff.vue'
import {accountService} from '@/_services'


export default {
  name: 'clientstuffVew',
  components: {
   clientstuffFetch,
   
  },
  data() {
    return {
      show: false,
      voyant:'',
    }
  },



  mounted(){

 if(accountService.isLogged()==true){

this.voyant='success'

       }else{
this.voyant=''

       }  

}

}
</script>

