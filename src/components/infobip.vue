<template>


  <!-- send sms -->

<svg @click="show2=!show2" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-grid-3x3-gap-fill my-5" viewBox="0 0 16 16">
  <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>


<Transition name="bounce">
 

 <div v-if="show2"  class="hello messageBox">
  
   
   <div class="position-fixed fixed-bottom  w-100 form p-auto " style="color:white;">
  <h1>Envoyez votre message</h1>

  <div v-if="error" class="error">
     {{error}}
   </div> 
    
  <label>Numéro du client: </label> <br/> <textarea v-model="currentMessage.receiver" type="tel" placeholder="EX: 0707099015"> </textarea> <br/> 
   

  <label>Nom de votre marque: </label> <br/> <textarea v-model="currentMessage.sender"  placeholder="EX: fmsquared" maxlength="11"> 
   </textarea>  <br/>
    
  <label>Méssage: </label> <br/>  <textarea v-model="currentMessage.message" placeholder="EX:merci pour votre achat"> </textarea> 
    
    <br/>
    <span>
    
      <button @click="sendMessage()"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-telephone-forward" viewBox="0 0 16 16">
  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
</svg></button>
     </span> 
    </div>

   
   <div v-if="messages" class="messageBox">
     {{messages}}

    <div v-for="message in messages" :key="message">
     <div :class="message.from=='user' ? 'messageFromUser' :'messageFromChatGpt'" :key="message" v-html="message.data"></div>
   </div>
   </div>
 
 </div>

  
 </Transition>

<!-- Make call -->



<svg @click="show3=!show3" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-grid-3x3-gap-fill my-5" viewBox="0 0 16 16">
   <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.762.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z"/>
</svg>


<Transition name="bounce">
 

 <div v-if="show3" class="hello messageBox">
  
   
   <div class="position-fixed fixed-bottom  w-100 form p-auto" style="color:white;">
  <h1>lancé un appelle</h1>

  <div v-if="error" class="error">
     {{error}}
   </div> 
    
   <label>Numéro du client: </label> <br/> <textarea v-model="currentCall.receiver" type="tel" placeholder="EX:0707900020"></textarea>  <br/>
   

  <label>Numéro de l'entreprise</label> <br/> <textarea v-model="currentCall.sender" type="texte" placeholder="EX:0707900020"></textarea> <br/>
   
   <label>URL du Méssage vocal</label> 
   <br/><textarea v-model="currentCall.message" type="texte" placeholder="ex:https://www.exemple.com"></textarea> 
   <br/> 
  
  <select id="cars" v-model="currentCall.message">
  <option value="https://horus.fmsquared.cloud/siren.mp3" selected>siren</option>
  <option value="https://horus.fmsquared.cloud/scan.mp3">scan</option>
  <option value="https://horus.fmsquared.cloud/PTT-20230916-WA0005.opus">sepho</option>
  <option value="audi">Audi</option>
</select>
  



    
    <br/>
    <span>
    
      <button @click="makeCall()"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
   <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.762.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z"/>
</svg></button>
     </span> 
    </div>

   
   <div v-if="messages" class="messageBox">
    {{callMessages}}
        
    <div v-for="message in callMessages" :key="message">
     <div :class="message.from=='user' ? 'messageFromUser' :'messageFromChatGpt'" :key="message" v-html="message.data"></div>
   </div>
   </div>
 
 </div>

  
 </Transition>







</template>


<script>

import {infobipService} from '@/_services' 
// import axios from 'axios'
export default {
 name: "postInfobip",
 data() {
   return {

    callMessages:[],
     
     messages:[],

     currentMessage:{
          receiver:'',
          sender:' ',
          message:' '
                    }, 

    currentCall:{
          receiver:'',
          sender:' ',
          message:' '
                    }, 


     error:' ',
     show2:true,
     show3:false,
   }
 },

 methods: {
  
// send message
   async sendMessage() {
     
     infobipService.postMessage(this.currentMessage)
     .then((response) => {
       this.messages.push(response.data)
       

     }).catch(error=>{
      this.error = error.response.data

      if(error.response.status=='403'){

        alert("vous n'êtes pas enregistrez auprès de l'agence pour envoyer le message")
       }

     })
   },

// Make call 
 async makeCall() {
     
      infobipService.postCall(this.currentCall)
      .then((response) => {
        this.callMessages.push(response.data)
      }).catch(error=>{
       this.error = error.response.data
        if(error.response.status=='403'){

        alert("vous n'êtes pas enregistrez auprès de l'agence pour passez cet appel")
       }

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
textarea {

 width: 300px;
 padding: 10px; 
 background-color: black;
 color: white;
}

.form{
border-left-width: 30px;
background-color: black;

}


svg{

  color: white;
}


button {
 height: 40px;
 border-color: black;
 background-color: black;
 padding: 10px;
}
.messageBox {
 
 background-color: gainsboro;
 /* margin-left: 10%;
 margin-right: 10%; */
 margin: 0 5% 0 5%;
 margin-top: 20px;
 padding: 5%;

 margin-bottom:20%;
 
}

h1{
color:white;

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

.error{
  color: orangered;
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


.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}





@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}



</style>