<template class="bg-secondary">

<div class="row m-3 p-4" v-if="voyant">
   <div class="col">
      <input class="form-control fixed-top" id="searchInput" type="text" placeholder="Search..">
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
                 <div class=" py-4" >
                     <h5 class=""> <strong >Nom:</strong >{{user.name}}</h5>
                      <p class=""><strong >Prenom:</strong >{{user.forename}}</p>
                      <p class=""><strong >Né(e) le:</strong >{{user.birthday}}</p>


                        <p class=""><strong >Profession:</strong >{{user.role}}</p>
                        <p class=""><strong >Numéro:</strong >{{user.number}}</p>
                        <p class=""><strong >compte:</strong >{{user.countG}}</p>

                       <p class=""><strong >compteG:</strong >{{countGMill}}</p>
                         

                        
                         <p class=""><strong >Entreprise:</strong >{{user.compagnyName}}</p>

                         <p class="card-text">

                           

                                    <qrcode-vue  :value="user._id" :size="size" level="H" />

                                     <input class="form-control form-control-lg" type='text' v-model='user._id' hidden="true">


                        


                      </p>
                         
                                                              
            
             </div>
         
          </div>


           </div>


</div>














<div class="row py-4" v-if="user2.role==='Owner'">

<div class="col">
<form  @submit.prevent='modifyUser' class="m-auto p-auto" >

 <div v-if='error' class="hello bg-danger  m-2 p-3 text-center">
{{error}}
  </div>

<div class="form-group m-auto">

<input type="email" v-model='user.email' class="m-2" placeholder='Email'><br>
</div >
<div class="form-group m-auto">
<input type="text" v-model='user.name' class=" m-2 " placeholder='Nom'><br>
</div>

<div class="form-group m-auto">
<input type="text" v-model='user.forename' class=" m-2 " placeholder='Prenom'><br>
</div>

<div class="form-group m-auto">
<input type="text" v-model='user.role' class=" m-2 " placeholder='Poste occupé'><br>
</div>

<div class="form-group m-auto">
<input type="text" v-model='user.infoToken' class=" m-2 " placeholder='infoToken'><br>
</div>

<div class="form-group m-auto">
<input type="text" v-model='user.compagnyName' class=" m-2 " placeholder='nom de la compagny'><br>
</div>


<div class="form-group m-auto">
<input type="texte" v-model='user.birthday' class=" m-2 " placeholder='Date de naissance'><label for='image'>Naissance</label><br>
</div>


<div class="form-group m-auto">
<input type="text" v-model='user.city' class=" m-2 " placeholder='Domicile'><br>
</div>

<div class="form-group m-auto">
<input type="number" v-model='user.number' class=" m-2 " placeholder='telephone'><br>
</div>

<div class='form-group'>
<input type='texte' v-model='user.imageUrl' name='file' id="file">
</div>


<div v-if="user2._id !=user._id">
<div class='form-group p-3'>

<select  v-model="user2countOperation">
  <option value="121" selected>retrait</option>
  <option value="212">depos</option>
  <option value="141">Pointage au service</option>

  </select>
</div>


      <div class='form-group py-3' v-if="user2countOperation=='212'">

                <div  v-if="user.depos" class='form-group py-3' style="background-color:white" width='900px'>
                          {{deposMill}}
                </div>


         <input class="" type='texte' v-model='user.depos' placeholder="depos" style="color:white">



      </div>

      <div class='form-group py-3' v-if="user2countOperation=='121'">

                  <div v-if='user.retrait' class='form-group py-3' style="background-color: whitesmoke;width: auto;"> 
                  {{RetraitMill}}

                  </div>
    

          <input class="" type='Number' v-model='user.retrait' placeholder="retrait" style="color:white;">
          
      </div>
</div>

<div class='form-group d-block py-3'>

<button  type="submit"> Modifier</button>

<svg @click='deleteUser()'  xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
</div>
</form>
</div>
</div>


<div class="row py-4" v-if="user2._id===user._id">

<div class="col">
<form  @submit.prevent='modifyUser' class="m-auto p-auto" >

 <div v-if='error' class="hello bg-danger  m-2 p-3 text-center">
{{error}}
  </div>

<div class="form-group m-auto">

<input type="email" v-model='user.email' class="m-2" placeholder='Email'><br>
</div >
<div class="form-group m-auto">
<input type="text" v-model='user.name' class=" m-2 " placeholder='Nom'><br>
</div>

<div class="form-group m-auto">
<input type="text" v-model='user.forename' class=" m-2 " placeholder='Prenom'><br>
</div>


<div class="form-group m-auto">
<input type="texte" v-model='user.birthday' class=" m-2 " placeholder='Date de naissance'><label for='image'>Naissance</label><br>
</div>

<div class="form-group m-auto">
<input type="text" v-model='user.city' class=" m-2 " placeholder='Domicile'><br>
</div>

<div class="form-group m-auto">
<input type="number" v-model='user.number' class=" m-2 " placeholder='telephone'><br>
</div>

<div class='form-group'>
<input type='texte' v-model='user.imageUrl' name='file' id="file">
</div>

<div class='form-group d-block py-3'>

<button  type="submit"> Modifier</button>

</div>
</form>
</div>
</div>





    <div class='row d-flex d-block m-3 pb-4 message' v-for='(message) in messages' :key='message._id'>
      
        <div class="col-8 m-2 p-2 b-warning">
          

           {{message.date}}
        </div>
      <div class="d-flex d-inline">
       <div class='col-8 lessonList bg-primary ' @click='gomessageEdit(message._id)'>
        <strong>{{message.name}} </strong><br/>
       {{message.message}}
       </div>
        <div class='col-2'>
            <img :src='message.userimageUrl'  class='avatar  mt-3' >
          </div>
      </div>  
     </div>


 <footer v-if="user2._id !=user._id">
    <div class='row' >

      <div class='col-8 col-lg-12 pt-4 '>

         
 <form @submit.prevent='postMessage' class='fixed-bottom position-fixed ' >
        

         <div class='form-group d-flex d-inline mt-3'> 

          <textarea class="form-control " type='text' v-model='message.message' placeholder='message' id='chat'> </textarea>

  <button  @click='submit'> envoyer</button> 

          </div>
          

  </form>

      </div>
   </div>
    </footer>
</div>


</template>

<script>
import QrcodeVue from 'qrcode.vue'

import $ from 'jquery'

import  {messageService} from '@/_services'
  
import {accountService} from '@/_services'
  
   
  export default {
  
  name: 'getUser',
  components: {

      QrcodeVue,

              },


  data(){
    return{
      user2countOperation:'',
      usercountOperation:'',
      avertissement:'',
      messages:[] ,
      id:'',
      user:{},
      user2:{},
      RetraitMill:'',
      deposMill:'',


      message:{
        message:'',
        name:'',
        userId:'',
        userNumber:'',
        userimageUrl:'',
        ruserId:'',
        ruserNumber:'',
        retrait:'',
        depos:''
      },

      voyant:''
    }
  },

  
methods:{

modifyUser(){

  this.countGMill=new Intl.NumberFormat().format(this.user.countG);
  this.RetraitMill =new Intl.NumberFormat().format(this.user.retrait);
  this.deposMill=new Intl.NumberFormat().format(this.user.depos);
  this.message.ruserId=this.user._id
  this.message.ruserNumber=this.user.number
  this.message.userId=this.user._id
 
  const depos=Number(this.user.depos)
  const count=Number(this.user.count)
 const count2=Number(this.user2.count)  
 const retrait=Number(this.user.retrait) 

 if (this.user2countOperation=='212' && this.user2.countG >=this.user.depos && this.user.depos>=5 ) {
  
    this.user.countG= depos + count;
    this.user2.countG= count2 - depos;
    this.message.message='vous avez recu un depos de' + ' ' + this.deposMill + ' ' + 'FCFA' + ' ' + 'par' + ' ' + this.user2.name
    
 }else if (this.user2countOperation=='212' && this.user.depos>= this.user2.countG) {
  
   alert('votre compte es en dessous du solde minimum');
  
 }

else if(this.usercountOperation=='121' && this.user2countOperation=='121' && this.user.countG>=this.user.retrait && this.user.retrait>=5 ){
   this.user.countG= count - retrait;
 this.user2.countG= count2 + retrait
 this.message.message='votre compte a été debité de'+ ' ' + '-'+ this.RetraitMill +  ' ' + 'FCFA' + ' ' + 'par' + ' ' + this.user2.name
    }
    
   else if(this.usercountOperation=='121' &&  this.user2countOperation=='121' && this.user.retrait>= this.user.countG){
   alert('le solde du client en en dessous du solde minimum')
    }

    else if(
  // this.usercountOperation != this.user2countOperation
   this.usercountOperation !='121' &&  this.user2countOperation=='121' || this.usercountOperation=='121' &&  this.user2countOperation !='121' ||  this.usercountOperation !='141' &&  this.user2countOperation=='141' ||  this.usercountOperation =='141' &&  this.user2countOperation !='141'){
   alert('Votre opération ne coresponds pas a celle demandé par le client')
    }

  else{
  this.user.countG=this.user.count;
 this.user2.countG=this.user2.count
 this.user2.countGMill=new Intl.NumberFormat().format(this.user.countG);
 this.user.countGMill=new Intl.NumberFormat().format(this.user.countG);
 }

  messageService.addMessage(this.message).catch(error=> {
      console.log(error)
    });



 accountService.modifyUser(this.user).then(
 // this.$router.push( '/services')

 ).catch(err=>(console.log(err)));
 

   accountService.modifyUser(this.user2).catch(err=>(console.log(err)));


    },


postMessage(){ 
this.message.ruserId=this.user._id
this.message.ruserNumber=this.user.number
this.message.userId=this.user._id
   messageService.addMessage(this.message).catch(error=> {
      console.log(error)
    })
                
           
            },
            
 gomessageEdit(uid){

  
this.$router.push( {name:'messageEdit',params:{id:uid}})

                     },

async deleteUser(){

await accountService.deleteUser(this.user);


await  this.$router.push( '/users');


  },      

        

},
//recuperation de l'element dans le parametre de l'url 
    mounted() {




const d = new Date();

this.id = this.$route.params.id

this.usercountOperation=this.$route.params.id.split(' ')[2] 

this.RetraitMill =new Intl.NumberFormat().format(this.user.retrait);

this.deposMill=new Intl.NumberFormat().format(this.user.depos);

this.countGMill =new Intl.NumberFormat().format(this.user.countG);


  this.message.ruserId=this.user._id
  this.message.ruserNumber=this.user.number
  this.message.userId=this.user._id

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

 if(this.usercountOperation=='141'){


  accountService.getuser2().then(res=>{
  
  this.user2=res.data

  
  });

  // recuperation de l'utilisateur sur lequel effectuer des operations


accountService.getuser(this.id).then(res=>{
  
  this.user=res.data

  this.message.ruserId=this.user._id
  this.message.ruserNumber=this.user.number
  this.message.userId=this.user._id
  this.message.message= 'est arrivé le ' + ' ' + d.toUTCString().split(',')[1] + ' '  + 'chez' +' ' +this.user.forename

  messageService.addMessage(this.message).catch(error=> {
      console.log(error)
    })

  
  
  if(this.user==null) {

this.avertissement='Carte  Frauduleuse';


}

}).catch(err=>{
  console.log(err)
  if(err.response.status==404){
    
    this.avertissement='Produit Frauduleux';
  
  }
});



 
}

    




// recuperation des messages 
messageService.getAllMessage().then(res=> {
  
   this.messages=res.data
      
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
         $("#lessonList").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
         });
      });
   });

    
    })
},


    updated(){



messageService.getAllMessage().then(res=> {
  console.log(res.data);
  this.messages=res.data
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
