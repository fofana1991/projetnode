<template class="bg-danger">
  

<div class="jumbotron">
   <h1>inscrivez vous</h1>
</div>

<form  @submit.prevent='signup' class='bg-primary '>

 <div v-if='error' class="hello bg-danger w- m-5 p-4 text-center">
{{error}}
  </div>

<div class="form-group">

<input type="email" v-model='user.email'><br>
</div >

<div class="form-group">
<input type="password" v-model='user.password'><br>
</div>

<button  type="submit">
signup
</button>
</form>
 
 
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
