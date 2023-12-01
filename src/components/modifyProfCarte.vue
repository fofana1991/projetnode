
<template class="bg-secondary">

<div class="container ">
  <div class="row d-flex-lg d-inline-lg">


        


    <div class=" col-md-6 col-lg-12">
      
<form id='form' @submit.prevent='modifyProfcarte' class="p-3 m-3">
       
        <div class='form-group p-3 m-3 bg-warning' v-if="err">
            {{err}}
           
        </div>


         <div class='form-group p-3 m-3'>
          <img width="100" :src='profCarte.imageUrl' height="100" id='blash'/>
       </div>

         <div class='form-group py-3'>
 
              <div id="w1">
               <input id="wc-input"   type="text" v-model ='profCarte.color' /><br />
               </div>
  
   
             </div>
          
         <div class='form-group p-3 m-3'>
  
           <div id="wcp1"> 
  
          <input id="wc-input"   type="color" v-model='profCarte.color' required/><br />
  
           </div> 
       </div>


        <div class='form-group p-3 m-3 '>
           <input class="form-control form-control-lg" type='texte' v-model='profCarte.nom' placeholder="Nom" required>
       </div>




       <div class='form-group p-3 m-3 '>
           <input class="form-control form-control-lg" type='texte' v-model='profCarte.prenom' placeholder="Prenom" required>
       </div>


       
  

       <div class='form-group p-3 m-3'>
           <input class="form-control form-control-lg"  type='texte'  id='title' v-model='profCarte.profession' placeholder="profession" required>
      </div>

       

      <div class='form-group p-3 m-3'>
          <input class="form-control form-control-lg"  type='texte'  v-model='profCarte.anniversaire' placeholder="Date de naissance" required>
      </div>


       <div class='form-group p-3 m-3'>
          <input class="form-control form-control-lg"  type='tel'  v-model='profCarte.number' placeholder="Numero téléphone" required>
      </div>

    

       <div class="form-select form-select-sm p-3 m-3 " aria-label=".form-select-sm">
          <label for='sexe'>sexe:</label>
          <select v-model='profCarte.sexe' class="form-control form-control-lg" required>
            <option value="feminin">Tous les sexe</option>
            <option value="feminin">F</option>
             <option value="masculin">M</option>
          </select>
      </div>




       <div>
           <input class="form-control form-control-lg p-3 m-3"  type='texte'  v-model='profCarte.imageUrl' required>
       </div>


       <div>
           <input class="form-control form-control-lg"  type='texte'  v-model='profCarte.entreprise' required>
       </div>


       <div class='form-group p-3 m-3'>
           <input type='hidden'  v-model='profCarte.userId' >
       </div>
     
       <div class='form-group p-3 m-3'>
             <button  @click='submit'> modifier</button>

             <button  @click='deleteProfcarte()'>Delete</button>
       </div>     

</form>

</div>
<div class="corp border bg-light py-4 mb-4 m-auto " style="width: 18rem;" >
                
            

                <img :src="profCarte.imageUrl" class="card-img-top avatar mx-auto" rounded="circle " alt="carte" height='250' width='300'/>

    

                 <div class="" >
                     <h5 class="corp font"> <strong >Nom:</strong > {{profCarte.nom}}</h5>
                      <p class="corp"><strong >Prenom:</strong > {{profCarte.prenom}}</p>
                      <p class="corp"><strong >Né(e) le :</strong > {{profCarte.anniversaire}}</p>


                        <p class="corp"><strong >Profession:</strong > {{profCarte.profession}}</p>
                        <p class="corp"><strong >Numéro:</strong > 0{{profCarte.number}}</p>
                        <p class="corp"><strong >Sexe:</strong > {{profCarte.sexe}}</p>

                         <p class="corp"><strong >Entreprise:</strong > {{profCarte.entreprise}}</p>

                         <p class="card-text pb-4 corp">

                                    <qrcode-vue v-if='id' :value="id" :size="size" level="H" />

                                     <input class="form-control form-control-lg" type='text' v-model='profCarte_id' hidden="false">


                        


                      </p>
                         
                                                              
            
             </div>
         
          </div>


</div>
</div>


</template>

<script>

import QrcodeVue from 'qrcode.vue'

 import $ from 'jquery'
  
  import { profcarteService} from '@/_services'
  
  
  export default {
  
  name:'modifyProfcarte',


  data(){
    return{

      id:'',
      profCarte:{},
      avertissement:'',
    }
  },


 components: {
      QrcodeVue,
    },
  

  
methods:{


    modifyProfcarte(){

 profcarteService.modifyProfcarte(this.profCarte).then(

  this.$router.push( '/getAllProfCarte')
 ).catch(err=>{

console.log(err)



 }

  ) },

 async deleteProfcarte(){

await profcarteService.deleteProfcarte(this.profCarte);
await  this.$router.push( '/getAllProfCarte');


  },


},


  
//recuperation de l'element dans le parametre de l'url 
    mounted() {

this.id=this.$route.params.id

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
              $('#wc-input,font').css('background', color).val(color);
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
   
 