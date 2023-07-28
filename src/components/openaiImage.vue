<template>
 <div class="hello">
   <h1>Ask to chatGpt</h1>
  
  <div class="position-fixed fixed-bottom d-flex d-sm-inline w-100 form">

   <textarea v-model="currentMessage" type="text"> </textarea> 
    <span>
    
   <button @click="sendMessage(currentMessage)"> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
</svg></button>

     </span> 
    </div>

   
   <div v-if="messages" class="messageBox">
    <div v-for="message in messages" :key="message">
     <div :class="message.from=='user' ? 'messageFromUser' :'messageFromChatGpt'" :key="message" v-html="message.data"> </div>

     <img :src="imageUrl.data">
   
   </div>
    
 </div>
</div>
</template>


<script>

import {openiaService} from '@/_services' 
// import axios from 'axios'
export default {
 name: "openaiImage",
 data() {
   return {
     messages:[] ,
     imageUrl:'' ,
     currentMessage: null
   }
 },

 methods: {
   async sendMessage(message) {
     this.messages.push({
       from: 'user',
       data: message
     })
      openiaService.createImage({message})
     .then((response) => {
     this.imageUrl=response.data;
     })
   }
 },


 mounted() {

   let btnClear=document.querySelector('button');
  let inputs= document.querySelectorAll('textarea');
     btnClear.addEventListener('click',()=>{
      inputs.forEach(textarea =>textarea.value='')
     });

 }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
textarea{
 width: 300px;
 padding: 10px; 
 background-color: black;
 color: white;
}

img{

  width: 300px;
  height: 500px;
}

button {
 height: 40px;
 padding: 10px;
 background-color:black ;
border-color: black;
}
.messageBox {
 
 background-color:gainsboro;
 /* margin-left: 10%;
 margin-right: 10%; */
 margin: 0 5% 0 5%;
 margin-top: 20px;
 padding: 5%;

 margin-bottom:20%;
 
}


svg{

  color: white;
}

.form{
border-left-width: 30px;
background-color: black;

}
.messageFromUser {
 text-align:left;
 background-color: aliceblue;
 border-radius: 10px;
 padding: 10px;
 margin-top: 15px;
 margin-bottom: 15px;
 width: 50%;
 margin-left: 50%;
}


.messageFromChatGpt {
 text-align: left;
 background-color: antiquewhite;
 border-radius: 10px;
 padding: 10px;
 margin-top: 15px;
 margin-bottom: 15px;
 width: 100%;
 margin-right: 70%;
}

</style>