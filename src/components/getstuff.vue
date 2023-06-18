<template class="bg-secondary ">



<div class='container p-3 m-3 '>

<div v-if='avertissement' class='bg-danger m-4 p-3' height='250'>
<img src="../assets/danger.jpeg" width="50" height="50">

{{avertissement}}
</div>


<div class='row d-flex d-inline-sm  d-block-lg p-4 ' v-if='thing'>
  





<div  class="col-lg-6  p-3 d-block fixed-right "  id="fatou cache" >

            <div class="corp border bg-light " style="width: 18rem;" >
                <img :src="thing.imageUrl" class="card-img-top avatar" rounded="circle "   alt="carte" height='250' width='300'/>
                 <div class="" >
                     <h5 class=""> <strong >Nom:</strong >{{thing.title}}</h5>
                      <p class=""><strong >Prenom:</strong >{{thing.description}}</p>
                      <p class=""><strong >Profession:</strong >{{thing.profession}}</p>
                      <p class=""><strong >Sexe:</strong >{{thing.sexe}}</p>
                      <p class=""><strong >Entreprise:</strong >{{thing.price}}</p>
     
                       <p class="card-text">

                           

                                    <qrcode-vue v-if='thing._id' :value="thing_id" :size="size" level="H" />

                                     <input class="form-control form-control-lg" type='text' v-model='thing._id' hidden="true">



                      </p>

                    </div>
              </div>


        







</div>
</div>
</div>


</template>

<script>

import $ from 'jquery'
  import QrcodeVue from 'qrcode.vue'
  import {stuffService} from '@/_services'
  
  
  export default {
  
  name: 'getStuf',


  data(){
    return{

      id:'',
      thing:{},
      avertissement:'',
    }
  },

   components: {
      QrcodeVue,
    },
  
methods:{

  modifyThing(){

 stuffService.modifyThing(this.thing).then(

  this.$router.push( '/info')
 ).catch(err=>{

console.log(err)



 }

  ) },

  async deleteThing(){

await stuffService.deleteThing(this.thing);
await  this.$router.push( '/info');


  }

},




//recuperation de l'element dans le parametre de l'url 
    mounted() {

this.id = this.$route.params.id
stuffService.getStuff(this.id).then(res=>{

  this.thing=res.data
if(this.thing==null) {

this.avertissement='Produit Frauduleux'

}
}).catch(err=>{

  if(err.response.status==404){
    
    this.avertissement='Produit Frauduleux'


  }
}

);


$(function() {

$("#w1").wColorPicker({
            initColor: '#ccf',
            onSelect: function(color){
              $('.corp,body').css('background', color);
            },
            onMouseover: function(color){
              $('#wc-input').css('background', color).val(color);
            }
        });



 $('#cache').click(function(){
      $('.modifier').slideDown(1000,'swing');
    
});
$('#montrer').click(function(){
      $('.modifier').slideUp(1000,'swing');
    
});



})


      
   
    
    },
   
   
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
