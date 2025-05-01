<template class="bg-secondary " >



   <div v-if='avertissement' class='row bg-danger m-4 p-3' width="500" height='500' >

          <audio preload="auto" id="son" autoplay>
    
                <source src="../assets/siren.mp3" type="audio/mp3">
                <source src="../assets/siren.ogg" type="audio/ogg">
          </audio>

              <img src="../assets/danger.jpeg" width="250" height="250">

              {{avertissement}}

       </div>



 <div v-if="ticket" class="container my-5 p-5 border rounded shadow-lg  bg-white" id="ticket"  :style="{ backgroundImage: 'url(' + ticket.ruserBgImageUrl + ')', backgroundSize: 'cover', backgroundPosition: 'center' }">



  <div v-if="ticket" >
    <div class="row my-4">
  

   

  </div>
  
  <!-- Haut : QR code + Cachet -->
  <div class="row mb-3" >
    <div class="col-6 d-flex justify-content-start">
      <div style= "padding: 8px;">
        <qrcode-vue :value="ticket._id" :size="size" level="H" class="border" style="max-height: 150px;"/>
      </div>
    </div>
    <div class="col-6 d-flex justify-content-end " style= "padding: 8px;">
      <img :src="ticket.ruserCachetUrl" alt="Cachet" class="img-fluid" style="max-height: 150px;">
    </div>
  </div>

  <!-- Nom / texte au centre -->
   <div class="text-center mb-3">
    <p class="mb-0 font-weight-bold" style= "color: white;">{{ ticket.name }} 0{{ ticket.userNumber }}</p>
  </div>
   
  <!-- Bas : deux images alignées sur la même ligne -->
  <div class="row">
    <div class="col-6 d-flex justify-content-start" style= "padding: 8px;">
      <img :src="ticket.userimageUrl" alt="Utilisateur" class="img-fluid rounded " style="max-height: 100px;">
    </div>
    <div class="col-6 d-flex justify-content-end " style= "padding: 8px;" >
      <img :src="ticket.ruserimageUrl" alt="Receveur" class="img-fluid rounded" style="max-height: 150px;">
    </div>

   

  </div>
   <div class="row my-3">
  

   

  </div>
</div>

 

  
</div>
















        <div>

            <button  @click='deleteTicket()'>deleteTicket</button>
            <svg onclick="window.print()" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-printer-fill" viewBox="0 0 16 16">
               <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"/>
                <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
               </svg> 

                
           </div>

         


</template>

<script>
import $ from 'jquery'
 import  {ticketService} from '@/_services'
 import QrcodeVue from 'qrcode.vue'

  
  
   
  export default {
  
  name: 'ticketEdit',


  

  data(){
    return{

      id:'',
      ticket:{},
      avertissement:'',
    }
  },

   components: {
        
        QrcodeVue,

    },
  
methods:{

 printDiv(divId) {
    const content = document.getElementById(divId).innerHTML;
    const printWindow = window.open('', '', 'width=800,height=600');
     printWindow.document.write('<html><head><title>Impression</title>');
    printWindow.document.write('</head><body>');
    printWindow.document.write(content);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  },



  modifyTicket(){

 ticketService.modifyTicket(this.ticket).then(

  this.$router.push( '/info')
 ).catch(err=>(

  console.log(err)
  ))

  



  },

  async deleteTicket(){

 await ticketService.deleteTicket(this.ticket);


await  this.$router.push( '/ticket/'+this.ticket.userId);


  }

},




//recuperation de l'element dans le parametre de l'url 
    mounted() {
this.id = this.$route.params.id
ticketService.getTicket(this.id).then(res=>{

  this.ticket=res.data


  if(this.ticket==null) {

this.avertissement='Ticket Frauduleux';


}

}).catch(err=>{
  console.log(err)
  if(err.response.status==404){
    
    this.avertissement='Produit Frauduleux';
  
  }
});



$(function() {

$("#wc1").wColorPicker({
            initColor: '#ccf',
            onSelect: function(color){
              $('.corp,body').css('background', color);
            },
            onMouseover: function(color){
              $('#wc-input').css('background', color).val(color);
            }
        });

})



      
   
    
    },
   
   
          }
           
        
             
        
          


        
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >

.information{
color: white

}
.avatar {
  vertical-align: middle;
  width:100px;
  height:180px;
  border-radius: 50%;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}




@media print {
  body * {
    visibility:visible;
  }
  #ticket, #ticket * {
    visibility: visible;
  }
  #ticket {
    position:center;
    left: 0;
    top: 0;
    width: 100%;
  }
}
</style>
