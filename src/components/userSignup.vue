<template class="bg-danger">
  



<div class="container">
  <div class="row">

<div class="col">
<form  @submit.prevent='signup' class="m-auto p-4 border border-primary border-5" >

 <div v-if='error' class="hello bg-danger  m-2 p-3 text-center">
{{error}}
  </div>

<div class="form-group m-auto">

<input type="email" v-model='user.email' class="m-2" placeholder='Email'><br>
</div >

<div class="form-group m-auto">
<input type="password" v-model='user.password' class=" m-2 " placeholder='Password'><br>
</div>

<button  type="submit">
signup
</button>
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

                  password:''
                },
             error:''    
   
             }
        },



     methods:  {
logout(){
  
accountService.logout()


},

       
   signup(){ 

    accountService.signup(this.user).then(res=> {
      console.log(res.data)
    accountService.saveToken(res.data.token)
 this.$router.push( '/users' )
    }).catch(error=> {

    console.log(error)
    

 if (error.response.data.error.message === 'User validation failed: email: Error, expected `email` to be unique. Value: `m@gmail.com`') {
          this.error = "ERROR: Cet utilisateur existe deja"
        }else if (error.response.data.error.message === "User validation failed: email: Path `email` is required.") {
          this.error = "ERROR:Addresse email obligatoire"
        } else {
          this.error = `verifier si tous les champs sont bien remplis`;
        }



    })
                 
           
            }
             
         }
         }
          


        
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
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
</style>
