<template class="bg-secondary" >


 <div class="container my-5 p-4 border rounded shadow-lg  bg-white" id="ticket"  :style="{ backgroundImage: 'url(' + ticket.ruserBgImageUrl + ')', backgroundSize: 'cover', backgroundPosition: 'center' }">


     <div v-if='avertissement' class='bg-danger m-4 p-3' width="500" height='500' >

          <audio preload="auto" id="son" autoplay>
    
                <source src="../assets/siren.mp3" type="audio/mp3">
                <source src="../assets/siren.ogg" type="audio/ogg">
          </audio>

              <img src="../assets/danger.jpeg" width="250" height="250">

              {{avertissement}}

       </div>




<div v-if='ticket'>
    <!-- QR Code en haut -->
    <div class="text-center mb-3">

       
      <!-- <img :src="qrCodeUrl" alt="QR Code" style="width: 120px; height: 120px;"> -->
    </div>

    
    <!-- Corps du ticket -->




    <div class="row" >


    

       <p class="m-3 p-3" >

                           

             <qrcode-vue  :value="ticket._id" :size="size" level="H" class='border' />

              <input class="form-control form-control-lg" type='text' v-model='ticket._id' hidden="true">


        </p>

      
     
    </div>
   

    
  
</div>



  <!-- Ticket body -->
  <div class="d-flex flex-column flex-md-row align-items-center justify-content-between text-center">
    
    <!-- Image utilisateur (gauche) -->
    <div class="p-2 ">
      <img :src="ticket.userimageUrl" alt="Image gauche" class="img-fluid rounded avatar" style="max-height: 200px;" />
    </div>

    <!-- Infos ticket -->
    <div class="p-2 flex-grow-1">
      <p class="mb-0 information">{{ ticket.name }} 0{{ ticket.ruserNumber }}</p>
    </div>

    <!-- Image destinataire (droite) -->
    <div class="p-2">
      <img :src="ticket.ruserimageUrl" alt="Image droite" class="img-fluid rounded avatar" style="max-height: 200px;" />
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
  width: 200px;
  height: 350px;
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
    visibility: hidden;
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
