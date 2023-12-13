s<template class="bg-secondary">


<div class="row m-3 p-4" v-if="voyant">
   <div class="col">
      <input class="form-control" id="searchInput" type="text" placeholder="Search..">
   </div>
</div>

 
<div class='container'>

    <div  class='row align-items-inline  lessonList' v-for='(user,index) in users' :key=user._id    >
      <table class="table table-bordered table-dark">
  <thead>
    <tr>
      
      <th scope="col">ordre et photos</th>    
      <th scope="col">Nom et Prenom</th>
      <th scope="col">Numero et compte</th>

    </tr>
  </thead>
  <tbody>
    <tr>
       <td> {{index+1}} <img :src='user.imageUrl' class="avatar mr-2 " @click='goEdit(user._id)' ></td>
      <td>{{user.name}} {{user.forename}} | {{user.email}} | {{user.role}} </td>
      <td>0{{user.number}} | {{user.countG}} FCFA</td>
    </tr>
  </tbody>
</table>



    </div>

  </div>




</template>

<script>

  //import {stuffService} from '@/_services'
  import {accountService} from '@/_services'
  import $ from 'jquery'
   
  export default {
  
  name: 'allUsers',


  
  
  data(){

    return {
        
             users:[],
             voyant:'',
             countMill:'',
             total:'',

    }
  },

  components: {
  
    },

     computed: {

 
               
        




                 },

   methods:{





goEdit(uid){


 // this.$router.push( '/updatething/'+id)
this.$router.push( {name:'updateUser',params:{id:uid}})

}



    },
        
//recuperation de toutes les chose et pacer dans le data
     mounted() {
    
      // stuffService.getAllstuff()
        accountService.getAllUser()
                                .then(res=>{

                            this.users=res.data

                                }).catch(err=>{

if(err.response.status===403){
           
     this.$router.push( '/carte' )

    

         
         }
                                 

                                })

// confirmation de la connection

if(accountService.isLogged()==true){

this.voyant='Vous etes connecté'

       }else{
this.voyant=''

       }

  
    
$(function() {
 $(document).ready(function(){
      $("#searchInput").on("keyup", function() {
         var value = $(this).val().toLowerCase();
         $(".lessonList").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
         });
      });
   });


    })

},






    updated(){

accountService.getAllUser()
                                .then(res=>{

                                

                                  this.users=res.data
                                       

                                }).catch(err=>{console.log(err)})

                      },              
             



}
   
          
           
            
             
        
          


        
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.row:hover{
color:#999999;
  
}
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
</style>
