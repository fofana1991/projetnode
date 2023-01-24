<template class="bg-secondary">

<div class='container'>
    <button type="button" class="btn btn-primary" @click='refresh()'>

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi  bi-arrow-repeat" viewBox="0 0 16 16">
            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
            <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
        </svg>

    </button>

 </div>
  
  

  
<div class='container'>
    <div  class='row align-items-center' id="lessonList">
<table class="table table-bordered table-dark">
  <thead>
    <tr>
      <th scope="col">index</th>
      
      <th scope="col">email</th>
      
      <th scope="col">userID</th>
    </tr>
  </thead>
  <tbody v-for='(user,index) in users' :key=user._id >
    <tr>
      <td>{{index + 1}}</td>
       <td>{{user.email}}</td>
      
      <td>{{user._id}}</td>
     
      
    </tr>

  </tbody>

</table>
           </div>


  </div>






</template>

<script>

  //import {stuffService} from '@/_services'
  import {accountService} from '@/_services'
  
   
  export default {
  
  name: 'allUsers',


  
  
  data(){

    return {
        
             users:[]

    }
  },

  components: {
  
    },

   methods:{




refresh(){

 
        accountService.getAllUser()
                                .then(res=>{

                                  console.log(res.data)

                                  this.users=res.data
                                  

                                }).catch(err=>{console.log(err)})
    },





goEdit(uid){

  console.log(uid)
 // this.$router.push( '/updatething/'+id)
this.$router.push( {name:'updatething',params:{id:uid}})

}



    },
        
//recuperation de toutes les chose et pacer dans le data
     mounted() {

      // stuffService.getAllstuff()
        accountService.getAllUser()
                                .then(res=>{

                                  console.log(res.data)

                                  this.users=res.data
                                  

                                }).catch(err=>{console.log(err)})
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
