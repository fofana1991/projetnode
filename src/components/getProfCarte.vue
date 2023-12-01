<template class="bg-secondary" >


      <div v-if='avertissement' class='bg-danger m-4 p-3' width="500"  height='500' >

           <audio preload="auto" id="son" autoplay>
    
                 <source src="../assets/siren.mp3" type="audio/mp3">
                 <source src="../assets/siren.ogg" type="audio/ogg">

            </audio>

            <img src="../assets/danger.jpeg" width="250" height="250">

               {{avertissement}}

       </div>

  
       <div  class='row align-items-center p-auto ' id="fatou" v-if='profCarte' >

         <audio preload="auto" id="son" autoplay>
    
          <source src="../assets/scan.mp3" type="audio/mp3">
          <source src="../assets/scan.ogg" type="audio/ogg">
      </audio>

    
        <div class=' col-sm-12 col-md-12  col-lg-12  p-3 m-auto m-lg-4 overflow-y-hidden d-flex d-block switch'>


        <div class="corp border bg-light m-auto lessonList" style="width: 18rem;" >
                <img :src="profCarte.imageUrl" class="card-img-top avatar mx-auto" rounded="circle " alt="carte" height='250' width='300'/>
                 <div class="" >
                     <h5 class=""> <strong >Nom:</strong >{{profCarte.nom}}</h5>
                      <p class=""><strong >Prenom:</strong >{{profCarte.prenom}}</p>
                      <p class=""><strong >Date de naissance:</strong >{{profCarte.anniversaire}}</p>


                        <p class=""><strong >Profession:</strong >{{profCarte.profession}}</p>
                        <p class=""><strong >Numéro:</strong >{{profCarte.number}}</p>
                        <p class=""><strong >Sexe:</strong >{{profCarte.sexe}}</p>

                         <p class=""><strong >Entreprise:</strong >{{profCarte.entreprise}}</p>

                         <p class="card-text">

                           

                                    <qrcode-vue v-if='profCarte._id' :value="profCarte._id" :size="size" level="H" />

                                     <input class="form-control form-control-lg" type='text' v-model='profCarte._id' hidden="true">


                        


                      </p>
                         
                                                              
            
             </div>
         
          </div>
    </div>
  </div>


   

</template>
<script>

  import $ from 'jquery'
  
  import { profcarteService} from '@/_services'
  
  
  export default {
  
  name: 'getProfcarte',


  data(){
    return{

      id:'',
      profCarte:{},
      avertissement:'',
    }
  },

  
methods:{


},


  
//recuperation de l'element dans le parametre de l'url 
    mounted() {

this.id =this.$route.params.id

profcarteService.getProfcarte(this.id).then(res=>{
  
  this.profCarte=res.data

if(this.profCarte==null) {

this.avertissement='Carte Frauduleuse';


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


})


      
   
    
    },
   
   
          }
           
        
             
        
          


        
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >



  .card {

display:inline-flex;


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

.manche:hove + .lumiere{
    animation-play-state: running;
}

.lumiere{
    
    animation: lumiere_animation 500ms 500ms alternate infinite ease-in-out backwards paused;
}
.switch{

    animation: switch 6000ms 150ms alternate infinite ease-in-out paused forwards;

}


#ball{
    
    animation:lumiere_animation 200ms 6000ms alternate infinite ease-in-out ;
    
}
.switch:hover{
    animation-play-state: running;
}

@keyframes lumiere_animation {
    
    0%{
    
        
    }

    40%{
    transform: rotate(-45deg); 
    
    
    }
    60%{
    transform:skew(45deg,-45deg); 
    }
    80%,100%{
        position: absolute;
    }
 }

 
 @keyframes switch {
    0%{
        
        opacity:1;
    }
    40%{


        margin-left:-350px;
        
       
    }
60%{
    left: -2px;

    
}
90%,100%{
      left:-2px;
      
   
}
 }


</style>
