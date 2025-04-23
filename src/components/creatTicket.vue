<template class="bg-secondary">

<div class="row m-3 p-4" v-if="voyant">
   <div class="col">
      <input class="form-control fixed-top" id="searchInput" type="text" placeholder="Search1..">
   </div>
</div>    


 <div class="row m-3 p-4" v-if="voyant">
   <div class="col">
      <input class="form-control fixed" id="searchInput2" type="text" placeholder="Search2..">
   </div>
</div>   



<div class='container'>

 




       <div v-if='avertissement' class='bg-danger m-4 p-3' width="500" height='500' >

          <audio preload="auto" id="son" autoplay>
    
                <source src="../assets/siren.mp3" type="audio/mp3">
                <source src="../assets/siren.ogg" type="audio/ogg">
          </audio>

              <img src="../assets/danger.jpeg" width="250" height="250">

              {{avertissement}}

         </div>



         <div class='row' v-if='user'>

           <div>

             <div class="corp border bg-light m-auto" style="width: 18rem;" >

                <audio preload="auto" id="son" autoplay>
    
                <source src="../assets/scan.mp3" type="audio/mp3">
                <source src="../assets/scan.ogg" type="audio/ogg">
               </audio>





                <img :src="user.imageUrl" class="card-img-top avatar mx-auto" rounded="circle " alt="carte" height='250' width='300'/> 
                         
                                                              
            
             </div>
         
          </div>


           </div>


    <ul class="lessonList">

    <li class="nav-item P-3 m-3 lessonList ">
 <router-link class="nav-link badge bg-dark router-link "  to="/qrScanTicket"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-qr-code-scan ball router-link" viewBox="0 0 16 16">
  <path d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0v-3Zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5ZM.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5Zm15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5ZM4 4h1v1H4V4Z"/>
  <path d="M7 2H2v5h5V2ZM3 3h3v3H3V3Zm2 8H4v1h1v-1Z"/>
  <path d="M7 9H2v5h5V9Zm-4 1h3v3H3v-3Zm8-6h1v1h-1V4Z"/>
  <path d="M9 2h5v5H9V2Zm1 1v3h3V3h-3ZM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8H8Zm2 2H9V9h1v1Zm4 2h-1v1h-2v1h3v-2Zm-4 2v-1H8v1h2Z"/>
  <path d="M12 9h2V8h-2v1Z"/>
</svg>VERIFIER UN TICKET</router-link>
  </li>

    </ul>




    <div class='row d-flex d-block m-3 pb-4 message ' v-for='(ticket,index) in tickets' :key='ticket._id'>
      <div class="lessonList"> 
        <div class="col-8 m-2 p-2 b-warning">
          
      
           {{ticket.date}}
        </div>
         <div class='col-2'>
          {{index+1}} 
            <img :src='ticket.ruserimageUrl'  class='avatar  mt-3' >
          </div>

      <div class="d-flex d-inline lessonList">
       <div class='col-8  bg-primary ' @click='goticketEdit(ticket._id)'>
        <strong>{{ticket.name}} </strong><br/>
       {{ticket.message}}
       </div>
        <div class='col-2'>
          {{ticket.index}}
            <img :src='ticket.userimageUrl'  class='avatar  mt-3' >
          </div>
      </div>  
      </div> 
     </div>


 <footer v-if="user2._id !=user._id">
    <div class='row' >

      <div class='col-8 col-lg-12 pt-4 '>

         
 <form @submit.prevent='postMessage' class='fixed-bottom position-fixed ' >
        

         <div class='form-group d-flex d-inline mt-3'> 

          <textarea class="form-control " type='text' v-model='ticket.message' placeholder='message' id='chat'> </textarea>

  <button  @click='submit'> envoyer</button> 

          </div>
          

  </form>

      </div>
   </div>
    </footer>
</div>


</template>

<script>


import $ from 'jquery'

import  {ticketService} from '@/_services'
  
import {accountService} from '@/_services'
  
   
  export default {
  
  name: 'getTicket',
  components: {

      

              },


  data(){
    return{
      user2countOperation:'',
      usercountOperation:'',
      avertissement:'',
      tickets:[] ,
      id:'',
      user:{},
      user2:{},
      RetraitMill:'',
      deposMill:'',


      ticket:{
        message:'',
        name:'',
        userId:'',
        userNumber:'',
        userimageUrl:'',
        ruserimageUrl:'',
        ruserBgImageUrl:'',
        ruserId:'',
        ruserNumber:'',
        retrait:'',
        depos:''
      },

      voyant:''
    }
  },

  
methods:{



      
            
 goticketEdit(uid){

  
this.$router.push( {name:'ticketEdit',params:{id:uid}})

                     },



showNotification(title, body) {
  if ("Notification" in window && Notification.permission === "granted") {
    new Notification(title, {
      body: body,
      icon: require("@/assets/logo4.png") // remplace par une icône plus adaptée si tu veux
    });
  }
}

        

},
//recuperation de l'element dans le parametre de l'url 
    mounted() {
// notification

if ("Notification" in window && Notification.permission !== "granted") {
  Notification.requestPermission().then(permission => {
    console.log("Notification permission:", permission);
  });
}


// financial transaction


  

 // recuperation des parametre


this.id = this.$route.params.id

this.usercountOperation=this.$route.params.id.split(' ')[2] 

this.RetraitMill =new Intl.NumberFormat().format(this.user.retrait);

this.deposMill=new Intl.NumberFormat().format(this.user.depos);

this.countGMill =new Intl.NumberFormat().format(this.user.countG);


  this.ticket.ruserId=this.user._id
  this.ticket.ruserNumber=this.user.number
  this.ticket.userId=this.user._id
  this.ticket.ruserimageUrl=this.user.imageUrl
  this.ticket.ruserBgImageUrl=this.user.BgImageUrl
  // const depos=Number(10000)
  



 // const retrait=Number(10000) 




// recuperation de l'utilisateur sur lequel effectuer des operations


accountService.getuser(this.id).then(res=>{
  
  this.user=res.data
  if(this.user==null) {

this.avertissement='Carte  Frauduleuse';


}

}).catch(err=>{
  console.log(err)
  if(err.response.status==404){
    
    this.avertissement='Produit Frauduleux';
  
  }
});

 // recupération du démandeur use

  accountService.getuser2().then(res=>{
  
  this.user2=res.data

  });






// si l'utilisateur de 141

 if(this.usercountOperation=='607' && confirm("Votre compte sera debité de 10.000f pour votre achat de ticket") == true){


// opération financiiére
       
//recuperateion du client

  accountService.getuser2().then(res=>{  
  
  this.user2=res.data

  if (this.user2.count < 10000) {
      alert("Votre compte est insuffisant, veuillez recharger votre compte d'au moins 10.000fcfa.");
      return; // Stop ici si solde insuffisant
    }else{

  this.user2.countG= this.user2.count - 10000

  accountService.modifyUser(this.user2).catch(err=>(console.log(err))); 


accountService.getuser(this.id).then(res=>{

  
  this.user=res.data

  this.user.countG= this.user.count + 10000
  this.ticket.ruserimageUrl=this.user.imageUrl
  this.ticket.ruserBgImageUrl=this.user.BgImageUrl



  this.ticket.ruserId=this.user._id
  this.ticket.ruserNumber=this.user.number
  this.ticket.userId=this.user._id
  this.ticket.message= 'votre ticket' + ' ' + ' a été généré pour le concert de votre fun ' + ' ' +this.user.forename

// facturation
 
 accountService.modifyUser(this.user).then(
 // this.$router.push( '/services')

 ).catch(err=>(console.log(err)));


 ticketService.addTicket(this.ticket).then(() => {
  this.showNotification("Nouveau ticket", "Un ticket vient d’être généré !");
}).catch(error=> {
      console.log(error)
    })
// recuperation financiere    
 
  if(this.user==null) {

this.avertissement='Carte  Frauduleuse';


}

}).catch(err=>{
  console.log(err)
  if(err.response.status==404){
    
    this.avertissement='Produit Frauduleux';
  
  }
});




 // ajout de ticket



  


}
})}else if(this.usercountOperation=='502' && confirm("Votre compte sera debité de 10.000f pour votre achat de ticket") == true){

 accountService.getuser(this.id).then(res=>{

  
  this.user=res.data  



if (this.user.count < 10000) {
      alert("Votre compte est insuffisant, veuillez recharger votre compte d'au moins 10.000fcfa.");
      return; // Stop ici si solde insuffisant
    }else{

    this.ticket.ruserNumber=this.user.number   

   this.user.countG= this.user.count - 10000

  accountService.modifyUser(this.user).then(
 // this.$router.push( '/services')

 ).catch(err=>(console.log(err)));

//recuperateion du client

  accountService.getuser2().then(res=>{  
  
  this.user2=res.data

   this.ticket.ruserimageUrl=this.user2.imageUrl

   this.ticket.ruserBgImageUrl=this.user2.BgImageUrl



  this.ticket.ruserId=this.user2._id
  this.ticket.userId=this.user2._id
  this.ticket.message= 'votre ticket' + ' ' + ' a été généré pour le concert de votre fun ' + ' ' +this.user2.forename


  this.user2.countG= this.user2.count + 10000

  accountService.modifyUser(this.user2).catch(err=>(console.log(err))); 

  ticketService.addTicket(this.ticket).then(() => {
  this.showNotification("Nouveau ticket", "Un ticket vient d’être généré !");
}).catch(error=> {
      console.log(error)
    })


  
  
  });

  // recuperation de l'utilisateur sur lequel effectuer des operations


accountService.getuser(this.id).then(res=>{

  
  this.user=res.data

// facturation
// recuperation financiere    
  this.user.countG= this.user.count - 10000

  accountService.modifyUser(this.user).then(
 // this.$router.push( '/services')

 ).catch(err=>(console.log(err)));


  
  if(this.user==null) {

this.avertissement='Carte  Frauduleuse';


}

}).catch(err=>{
  console.log(err)
  if(err.response.status==404){
    
    this.avertissement='Produit Frauduleux';
  
  }
});



 // ajout de ticket




}})} 


ticketService.getAllTickets().then(res=> {
  
   this.tickets=res.data
      
    }).catch(error=> {

console.log(error)

    });


   

   
// si la connection est établis

 if(accountService.isLogged()==true){

this.voyant='Vous etes connecté'

       }else{
this.voyant=''

       }     





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

 $(document).ready(function(){
      $("#searchInput").on("keyup", function() {
         var value = $(this).val().toLowerCase();
         $(".lessonList").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
         });
      });
   });
 

 $(document).ready(function(){
      $("#searchInput2").on("keyup", function() {
         var value = $(this).val().toLowerCase();
         $(".lessonList").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
         });
      });
   });
       

    
    })
},



    updated(){

ticketService.getAllTickets().then(res=> {
  console.log(res.data);
  this.tickets=res.data
  this.usercountOperation=this.$route.params.id.split(' ')[2] 
  this.RetraitMill = new Intl.NumberFormat().format(this.user.retrait);
  this.deposMill= new Intl.NumberFormat().format(this.user.depos);
  this.countGMill =new Intl.NumberFormat().format(this.user.countG);


    }).catch(error=> {

    console.log(error)});

  
    
                      }
   
   
 }
           
        
             
        
          


        
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >






.avatar {
  vertical-align: middle;
  width: 70px;
  height: 70px;
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


.message{
  margin-bottom: +100px;
}

 body, html {
  height: 100%;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

* {
  box-sizing: border-box;
}


</style>
