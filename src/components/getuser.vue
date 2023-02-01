<template class="bg-secondary">

<div class="row mb-3">
   <div class="col">
      <input class="form-control fixed-top" id="searchInput" type="text" placeholder="Search..">
   </div>
</div>    


<div class='container'>




          <div class='col-8'>
            <img :src='user.imageUrl'  class='avatar  mt-3' >
          </div>




    <div class='row d-flex d-inline m-3 p-3 ' v-for='(message) in messages' :key='message._id'>
       <div class='col-8 lessonList bg-primary ' @click='gomessageEdit(message._id)'>
        <strong>{{message.name}}</strong><br/>
       {{message.message}}
       </div>
        <div class='col-2'>
            <img :src='message.userimageUrl'  class='avatar  mt-3' >
          </div>
     </div>


 <footer>
    <div class='row  '>

      <div class='col-8 col-lg-12 '>

         
 <form @submit.prevent='postMessage' class='fixed-bottom position-fixed ' >
        

         <div class='form-group d-flex d-inline mt-3'>
  <input class="form-control  " type='text' v-model='message.message' placeholder='message'> <button  @click='submit'> envoyer</button>

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
      }
    }
  },

   components: {

    },
  
methods:{

postMessage(){ 
this.message.ruserId=this.user._id
this.message.ruserNumber=this.user.number
this.message.userId=this.user._id
   messageService.addMessage(this.message).then(res=> {
      console.log(res.data)
    }).catch(error=> {
    console.log(error)})
                
           
            },
 gomessageEdit(uid){

  console.log(uid)
 // this.$router.push( '/updatething/'+id)
this.$router.push( {name:'messageEdit',params:{id:uid}})

                     }
        

},
//recuperation de l'element dans le parametre de l'url 
    mounted() {

this.id = this.$route.params.id
accountService.getuser(this.id).then(res=>{
  console.log(res)
  this.user=res.data

}).catch(err=>(console.log(err)));

messageService.getAllMessage().then(res=> {
  console.log(res.data);
  this.messages=res.data

      
    }).catch(error=> {
    console.log(error)});



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


messageService.getMessage().then(res=> {
  console.log(res.data);
  this.messages=res.data

      
    }).catch(error=> {
    console.log(error)});

    
                      },
   
   
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




 body, html {
  height: 100%;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

* {
  box-sizing: border-box;
}


</style>
