<template class="bg-secondary">

<div class='col'>

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

 messageService.modifyThing(this.message).then(res=>{

console.log(res)
  this.$router.push( '/info')
 }).catch(err=>(console.log(err)))

  



  },

  async deleteMessage(){

 const res = await messageService.deleteMessage(this.message);

await  console.log(res);

await  this.$router.push( '/updateUser/'+this.message.userId);


  }

},




//recuperation de l'element dans le parametre de l'url 
    mounted() {

this.id = this.$route.params.id
messageService.getMessage(this.id).then(res=>{
  console.log(res)
  this.message=res.data

}).catch(err=>(console.log(err)));


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


.message {
border-bottom: 5px;

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
