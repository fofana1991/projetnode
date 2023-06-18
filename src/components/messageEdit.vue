<template class="bg-secondary">

<div class='col'>


<div class='row d-flex d-inline m-3 p-3 '>
       <div class='col-8 lessonList bg-primary '>
        <strong>{{message.name}}</strong><br/>
       {{message.message}}
       </div>
        <div class='col-2'>
            <img :src='message.userimageUrl'  class='avatar  mt-3' >
          </div>
     </div>




<button  @click='deleteMessage()'> deleteThing</button>

</div>

</template>

<script>
import $ from 'jquery'
 import  {messageService} from '@/_services'
  
  
   
  export default {
  
  name: 'messageEdit',


  data(){
    return{

      id:'',
      message:{}
    }
  },

   components: {
    
    },
  
methods:{

  modifyThing(){

 messageService.modifyThing(this.message).then(

  this.$router.push( '/info')
 ).catch(err=>(

  console.log(err)
  ))

  



  },

  async deleteMessage(){

 await messageService.deleteMessage(this.message);


await  this.$router.push( '/updateUser/'+this.message.userId);


  }

},




//recuperation de l'element dans le parametre de l'url 
    mounted() {

this.id = this.$route.params.id
messageService.getMessage(this.id).then(res=>{

  this.message=res.data

}).catch(err=>(console.log(err)) );


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

})


      
   
    
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
</style>
