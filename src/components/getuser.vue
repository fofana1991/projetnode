<template class="bg-secondary">

<div class="row m-3 p-4" v-if="voyant">
   <div class="col">
      <input class="form-control fixed-top" id="searchInput" type="text" placeholder="Search..">
   </div>
</div>    


<div class='container'>




          <div class='col-8'>
            <img :src='user.imageUrl'  class='avatar  mt-3' >

             <svg @click='deleteUser()' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
          </div>






<div class="row">

<div class="col">
<form  @submit.prevent='modifyUser' class="m-auto p-auto" >

 <div v-if='error' class="hello bg-danger  m-2 p-3 text-center">
{{error}}
  </div>

<div class="form-group m-auto">

<input type="email" v-model='user.email' class="m-2" placeholder='Email'><br>
</div >

<div class="form-group m-auto">
<input type="password" v-model='user.password' class=" m-2 " placeholder='Mot de passe'><br>
</div>
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

<div class='form-group'>
<button  type="submit">
Modifier
</button>
</div>
</form>
</div>
</div>




















    <div class='row d-flex d-block m-3 p-3 message' v-for='(message) in messages' :key='message._id'>
        <div class="col-8 m-2 p-2 b-warning">
           {{ message.date}}
        </div>
      <div class="d-flex d-inline">
       <div class='col-8 lessonList bg-primary ' @click='gomessageEdit(message._id)'>
        <strong>{{message.name}}</strong><br/>
       {{message.message}}
       </div>
        <div class='col-2'>
            <img :src='message.userimageUrl'  class='avatar  mt-3' >
          </div>
      </div>  
     </div>


 <footer>
    <div class='row  '>

      <div class='col-8 col-lg-12 '>

         
 <form @submit.prevent='postMessage' class='fixed-bottom position-fixed ' >
        

         <div class='form-group d-flex d-inline mt-3'> 

          <textarea class="form-control  " type='text' v-model='message.message' placeholder='message' id='chat'> </textarea>

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

import  {messageService} from '@/_services'
  
import {accountService} from '@/_services'
  
   
  export default {
  
  name: 'getUser',


  data(){
    return{

      messages:{},
      id:'',
      user:{},


      message:{
        message:'',
        name:'',
        userId:'',
        userNumber:'',
        userimageUrl:'',
        ruserId:'',
        ruserNumber:'',
      },

      voyant:''
    }
  },

   components: {

    },
  
methods:{

modifyUser(){


 accountService.modifyUser(this.user).then(
 this.$router.push( '/users')
 ).catch(err=>(console.log(err)))

  



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

  
 // this.$router.push( '/updatething/'+id)
this.$router.push( {name:'messageEdit',params:{id:uid}})

                     },

async deleteUser(){

await accountService.deleteUser(this.user);


await  this.$router.push( '/users');


  },      

        

},
//recuperation de l'element dans le parametre de l'url 
    mounted() {

this.id = this.$route.params.id
accountService.getuser(this.id).then(res=>{
  
  this.user=res.data

}).catch(err=>{
  console.log(err)
});

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
