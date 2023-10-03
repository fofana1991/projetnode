<template class="bg-secondary ">



<div class='container p-3 m-3 '>


<div v-if='avertissement' class='bg-danger m-4 p-3' width="500"  height='500' >

      <audio preload="auto" id="son" autoplay>
    
          <source src="../assets/siren.mp3" type="audio/mp3">
          <source src="../assets/siren.ogg" type="audio/ogg">
      </audio>

      <img src="../assets/danger.jpeg" width="250" height="250">

         {{avertissement}}

</div>

<div class='row d-flex d-inline-sm  d-block-lg p-4 ' v-if='thing'>

  <audio preload="auto" id="son" autoplay>
    
          <source src="../assets/scan.mp3" type="audio/mp3">
          <source src="../assets/scan.ogg" type="audio/ogg">
      </audio>


<div  class="col-lg-12  p-3 d-block fixed-right "  id="fatou cache" >
  
  <div class='row p-3 m-3 '>
<img :src="thing.imageUrl"  class="avatar w-100 m-auto" rounded="circle" alt="carte" height='250'/>   
</div>


            <div class="corp border bg-light w-100 " style="width: 18rem;" >
                
                 <div class="" >
                     <h5 class=""> <strong >Nom du Produit:</strong >{{thing.title}}</h5>
                      <p class=""><strong >Description:</strong >{{thing.description}}</p>
                      <p class=""><strong >Rôle:</strong >{{thing.profession}}</p>
                      <p class=""><strong >Sexe:</strong >{{thing.sexe}}</p>
                      <p class=""><strong >Prix:</strong >{{thing.price}}</p>
     
          
                    </div>
              </div>


        







</div>
</div>
</div>


</template>

<script>

import $ from 'jquery'
  
  import {stuffService} from '@/_services'
  
  
  export default {
  
  name: 'getStuf',


  data(){
    return{

      id:'',
      thing:{},
      avertissement:'',
      myAudio:" "
    }
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


beforeCreat () {
document.write('wait for a momment we are verifying for you')

},

//recuperation de l'element dans le parametre de l'url 
    mounted() {

this.myAudio = document.getElementById("son");
this.id = this.$route.params.id
stuffService.getStuff(this.id).then(res=>{
  
  this.thing=res.data
if(this.thing==null) {

this.avertissement='Produit Frauduleux';
this.myAudio.play()

}
}).catch(err=>{

  if(err.response.status==404){
    
    this.avertissement='Produit Frauduleux';
  
    this.myAudio[0].play()
  


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

$('#son')[0].play();

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

img{

  border-style: solid;
  border-width: 5px;
  animation:img_animation 2000ms 200ms alternate infinite ease-in-out ;

}

.avertissement{

 animation:avertissement_animation 2000ms 200ms alternate infinite ease-in-out ;


}


@keyframes img_animation {
    0%,{
        
        opacity:1;
    }
    40%,50%{

        border-color: red;
        width: 55px;
            }
60%,70%{
     border-color: burlywood;

    
}
90%,100%{
      
      border-color: yellowgreen;
      border-width: 10px;
      
   
}
 }

@keyframes avertissement_animation {
    0%,30%{
      opacity:0,5; 
        
    }
    40%,50%{

    opacity:0,1; 
     border-color: blue;   
       
        
       
    }
60%,70%{
  border-color: yellowgreen;   
   
}
  
90%,100%{
      
      border-color: yellow;
     
   
}
 }





</style>
