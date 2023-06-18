<template class="bg-secondary">
<div class="bg">
<form  @submit.prevent='login'>

<div v-if='error' class="hello bg-danger  m-3 p-3" >
    {{error}}
  </div>


<input type="email" v-model='user.email' class='m-2' placeholder="Email" ><br>

<input type="password" v-model='user.password' class='m-2' placeholder="Password"><br>

<button  type="submit">
Connexion
</button>
      
</form>

  
  </div>
</template>

<script>

import {accountService} from '@/_services'
  
   
  export default {
  
  name: 'userLogin',
  

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

       
   login(){ 

    accountService.login(this.user).then(res=> {
    accountService.saveToken(res.data.token)
 this.$router.push( '/info' )

    }).catch(error=> {

  this.error=error.response.data.error
    
    })
                
           
            }
             
         }
         }
          


        
</script>
error.response.data.error.message
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
input{
border-color: black;
color: black;

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
</style>
