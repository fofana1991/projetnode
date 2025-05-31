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

<div class='row d-flex d-inline-sm  d-block-lg p-auto ' v-if='thing'>

  <audio preload="auto" id="son" autoplay>
    
          <source src="../assets/scan.mp3" type="audio/mp3">
          <source src="../assets/scan.ogg" type="audio/ogg">
      </audio>


<div  class="col-lg-12  p-auto d-block fixed-right "  id="fatou cache" >
  
       <div class="row p-auto m-auto carousel slide carousel-fade" id="carouselExampleFade" data-bs-ride="carousel" data-bs-interval="3000">
  <div class="carousel-inner">
    <div class="carousel-item " :class="{ active: index === 0 }" v-for="(url, index) in imageUrls" :key="index">
      <img :src="url" class="d-block w-100 m-auto" height="350" style="max-width: 600px" alt="carte" />
    </div>
  </div>

  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

          </div>


            <div class="corp border bg-light w-100 h-auto" style="width:18em;" >
                
                 <div class=" mb-5 py-5" >
                     <h5 class=""> <strong >Nom du Produit: </strong >{{thing.title}}</h5>
                      <p class=""><strong >Description: </strong >{{thing.description}}</p>
                      <p class=""><strong >Rôle: </strong >{{thing.profession}}</p>
                     
                       <p class=""><strong >Ville: </strong >{{thing.city}}</p>
                      <p class=""><strong >Prix promo: </strong ><mark>{{thing.price}} FCFA</mark></p>
                      <p class="" v-if="thing.normalPrice"><strong >Prix Normal:</strong><s><mark>                           {{thing.normalPrice}} FCFA</mark></s></p>


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
    }
  },


  computed: {
  imageUrls() {
    return [
      this.thing.imageUrl,
      this.thing.imageUrl1,
      this.thing.imageUrl2,
      this.thing.imageUrl3,
      this.thing.imageUrl4,
      this.thing.imageUrl5,
    ].filter(Boolean); // Supprime les valeurs nulles ou undefined
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
  border-width:10px ;
  transition:border-width 2s;
/*  animation:img_animation 20000ms 200ms alternate infinite ease-in-out ;*/

}

img:hover{

  border-style: solid;
  border-width:2px ;

  
/*  animation:img_animation 2000ms 200ms alternate ease-in-out ;*/

}





.avertissement{

 animation:avertissement_animation 2000ms 200ms alternate infinite ease-in-out ;


}


@keyframes img_animation {
    0%,{
        
        opacity:1;
    }
    40%,50%{

        border-left-color:red;

        border-width:10px;
       
            }
60%,70%{
     border-top-color:burlywood;
      border-width: 5px;
    
}
90%,100%{
      
      border-right-color: yellowgreen;

      border-width: 2px;
      
      
   
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
