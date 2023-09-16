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

<div class='row d-flex d-inline-sm  d-block-lg p-4 ' v-if='recu'>

  <audio preload="auto" id="son" autoplay>
    
          <source src="../assets/scan.mp3" type="audio/mp3">
          <source src="../assets/scan.ogg" type="audio/ogg">
      </audio>


<div  class="col-lg-12  p-3 d-block fixed-right "  id="fatou cache" >
  
  <div class='row p-3 m-3 '>
<img :src="recu.imageUrl"  class="avatar w-100 m-auto" rounded="circle" alt="carte" height='300'/>   
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

 <div >
               <svg @click='deleteThing()' xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash3-fill mx-4 " viewBox="0 0 16 16">
               <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
               </svg>

               </div>

</div>
</div>


</template>

<script>

import $ from 'jquery'
  
  import {recuService} from '@/_services'
  
  
  export default {
  
  name: 'getRecu',


  data(){
    return{

      id:'',
      recu:{},
      avertissement:'',
      myAudio:" "
    }
  },

  
methods:{

  modifyThing(){

 recuService.modifyThing(this.recu).then(

  this.$router.push( '/info')
 ).catch(err=>{

console.log(err)



 }

  ) },

  async deleteThing(){

await recuService.deleteRecu(this.recu);
await  this.$router.push( '/recus');


  }

},


beforeCreat () {
document.write('wait for a momment we are verifying for you')

},

//recuperation de l'element dans le parametre de l'url 
    mounted() {

this.id = this.$route.params.id
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
