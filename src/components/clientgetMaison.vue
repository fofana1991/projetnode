<template class="bg-secondary ">



<div class='container p-auto m-auto '>


<div v-if='avertissement' class='bg-danger m-4 p-3' width="500"  height='500' >

      <audio preload="auto" id="son" autoplay>
    
          <source src="../assets/siren.mp3" type="audio/mp3">
          <source src="../assets/siren.ogg" type="audio/ogg">
      </audio>

      <img src="../assets/danger.jpeg" width="250" height="250">

         {{avertissement}}

</div>

<div class='row d-flex d-inline-sm  d-block-lg p-4 ' v-if='recu'>

  <audio preload="auto" id="son" autoplay>
    
          <source src="../assets/scan.mp3" type="audio/mp3">
          <source src="../assets/scan.ogg" type="audio/ogg">
      </audio>


<div  class="col-lg-12  p-auto d-block fixed-right "  id="fatou cache" >
  
  <div class='row py-4 m-auto '>
<img :src="recu.imageUrl"  class="avatar w-100 m-auto" rounded="circle" alt="carte" height='250'/>   
</div>


            <div class="corp border bg-light w-100 " style="width: 18rem;" >
                
                 <div class="" >
                     <h5 class=""><strong >Type de maison:</strong >{{recu.type}} </h5>
                      <p class=""><strong >Nombre de chambre:</strong >{{recu.nombreDeChambre}}</p>
                      <p class=""><strong >Loyer:</strong >{{recu.loyer}}</p>
                      <p class=""><strong >Caution:</strong >{{recu.caution}}</p>
                      <p class=""><strong >Ville:</strong >{{recu.ville}}</p>
                      <p class=""><strong >Quartier:</strong >{{recu.quartier}}</p>
                      <p class=""><strong >Numero:</strong >0{{recu.numero}}</p>

          
                    </div>
              </div>


        
<iframe :src="recu.geolocation" class="w-100 my-3" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
           
</div>


</div>

</div>

</template>

<script>

import $ from 'jquery'
  
  import {recuService} from '@/_services'
  
  
  export default {
  
  name: 'getclientMaison',


  data(){
    return{

      id:'',
      recu:{},
      avertissement:'',
      myAudio:" "
    }
  },
  

//recuperation de l'element dans le parametre de l'url 
    mounted() {

this.id=this.$route.params.id
recuService.getRecu(this.id).then(res=>{
    this.recu=res.data
if(this.recu==null) {

this.avertissement='Produit Frauduleux';

}
}).catch(err=>{

  if(err.response.status==404){
    
    this.avertissement='Produit Frauduleux';
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
