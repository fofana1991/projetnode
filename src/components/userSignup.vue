<template class="signup">
  



<div class="container ">
  <div class="row">

<div class="col">
<form  @submit.prevent='signup' class="m-auto p-auto" >

 <div v-if='error' class="hello bg-danger  m-2 p-3 text-center">
{{error}}
  </div>

<div class="form-group m-auto">

<input type="email" v-model='user.email' class="m-2" placeholder='Email' required><br>
</div >

<div class="form-group m-auto">
<input type="password" v-model='user.password' class=" m-2 " placeholder='Mot de passe' required><br>
</div>
<div class="form-group m-auto">
<input type="text" v-model='user.name' class=" m-2 " placeholder='Nom' required><br>
</div>

<div class="form-group m-auto">
<input type="text" v-model='user.forename' class=" m-2 " placeholder='Prenom' required><br>
</div>

<div class="form-group m-auto">
<input type="date" v-model='user.birthday' class=" m-2 " placeholder='Date de naissance' required><label for='image'>Naissance</label><br>
</div>

<div class="form-group m-auto">
<input type="text" v-model='user.city' class=" m-2 " placeholder='Domicile' required><br>
</div>
<div class="form-group m-auto">
<input type="number" v-model='user.number' class=" m-2 " placeholder='telephone' required><br>
</div>
<div class='form-group'>
<input type='file' @change='onFileUpload' name='file' id="file" required>
</div>

<div class='form-group'>
<button  type="submit">
Inscription
</button>
</div>
</form>
</div>
</div>
</div>

 
 
</template>

<script>

import {accountService} from '@/_services'
  
   
  export default {
  
  name: 'userSignup',
  

  data(){
    return  {
          user :{
                  email:'',

                  password:'',

                  name:'',

                  forename:'',

                  role:'',
                  
                  birthday:'',

                  city:'',

                  number:'',
                  
                  imageUrl:'',
                  
                  infoToken:'',
                  
                  compagnyName:'',
                  
                  count:'0', 

                  countG:'0', 

                  countGMill:'0',

                  countOperation:'0',

                  depos:'0',

                  retrait:'0',



                },

                FILE:'',

             error:''    
   
             }
        },



     methods:  {


onFileUpload (event) {



         this.FILE = event.target.files[0]



        },





      
logout(){
  
accountService.logout()


},




       
   signup(){ 



var formData = new FormData();
           
            const user= JSON.stringify(this.user)
           
            var blob= new Blob([this.FILE,this.FILE.name], {type : "image/PNG"})
        
            formData.append('user',user)
            formData.append('image',blob)
            

    accountService.signup(formData,{
          }).then(res=> {
    accountService.saveToken(res.data.token)
 this.$router.push( '/users' )
    }).catch(error=> {
    

 if (error.response.data.error.message === 'User validation failed: email: Error, expected `email` to be unique. Value: `m@gmail.com`') {
          this.error = "ERROR: Cet utilisateur existe deja"
        }else if (error.response.data.error.message === "User validation failed: email: Path `email` is required.") {
          this.error = "ERROR:Addresse email obligatoire"
        } else {
          this.error = `verifier si tous les champs sont bien remplis`;
          console.log(this.error)
        }



    })
                 
           
            }
             
         }
         }
          


        
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
label{
  font-weight: bold;
  


}


.signup{
  border-color:#bf8c26;
  border-width:5px;
  background-color:#bf8c26 ;

}

input{

 border-color:#bf8c26 ;
   border-width:5px;
}

button{

 border-color:#bf8c26 ;
   border-width:5px;
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
  color: red;
}
</style>
