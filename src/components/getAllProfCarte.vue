
<template class="bg-secondary" >

<div class="row m-3 p-4" >
   <div class="col">
      <input class="form-control" id="searchInput" type="text" placeholder="Search..">
   </div>
</div>
  
       <div  class='row align-items-center p-auto ' id="fatou " >

    
        <div class=' col-sm-12 col-md-12  col-lg-12  p-3 m-auto m-lg-4 overflow-y-hidden d-flex d-block switch' v-for='(profCarte) in profCartes ' :key=profCarte._id>


        <div class="corp border bg-light m-auto lessonList" style="width: 18rem;" >
                <img :src="profCarte.imageUrl" class="card-img-top avatar mx-auto" height='250' width='300' @click='goEdit(profCarte._id)'/>
                 <div class="" >
                     <h5 class=""> <strong >Nom:</strong > {{profCarte.nom}}</h5>
                      <p class=""><strong >Prenom:</strong > {{profCarte.prenom}}</p>
                      <p class=""><strong >Né(e):</strong > {{profCarte.anniversaire}}</p>


                        <p class=""><strong >Profession:</strong > {{profCarte.profession}}</p>
                        <p class=""><strong >Numéro:</strong > 0{{profCarte.number}}</p>
                        <p class=""><strong >Sexe:</strong > {{profCarte.sexe}}</p>

                         <p class=""><strong >Entreprise:</strong > {{profCarte.entreprise}}</p>

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
  import QrcodeVue from 'qrcode.vue'
import {accountService} from '@/_services'

  //import {stuffService} from '@/_services'
  import {profcarteService} from '@/_services'
  //import {openiaService} from  '@/_services'
   
  export default {
  
  name: 'getAllProfcarte',


  
  
  data(){

    return {
        
             profCartes:[],
             result:'',
             voyant:''

           }          
  },

  components:{

      QrcodeVue,

              },

   methods: {
           
             goEdit(uid){

              this.$router.push( {name:'modifyProfCarte',params:{id:uid}})

                        },

            },
        



//recuperation de toutes les chose et pacer dans le data
     
     mounted() {

               /* eslint-disable */ 

       
                 profcarteService.getAllProfcarte()
                               .then(res=>{
                                   
    
                  this.profCartes=res.data         
    
                                           }).catch(error=>{

                 if(error.response.status===403){           
    
                 this.$router.push( '/produits' )
        
                }


                 if (error.message=== 'Network Error') {

                this.resultat = "vérifier la connection internet"

                                                       } 

 
                                                        });


                if(accountService.isLogged()==true){

                this.voyant='success'

                                                   }else{
                this.voyant=''

                                                        } ; 



                $(function() {
                $("#wcp1").wColorPicker({
                initColor: '#ccf',
                onSelect:
                function(color){
                $('.corp').css('background', color);             
                                       },
                 onMouseover: function(color){
                 $('#wcp-input').css('background',color).val(color);
                                             }
                                           });

   
                $(document).ready(function(){
                $("#searchInput").on("keyup", function() {
                var value = $(this).val().toLowerCase();
                $(".lessonList").filter(function() {
               $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                                                   });
                                                         });
                                            });
                                
                                    });


},


updated(){



profcarteService.getAllProfcarte().then(res=>{
if (res.status===200) {

          this.resultat = "mis a jour effectuée avec success"

        } 
                                  this.profCartes=res.data
    


                                   }).catch(error=>{

                                    console.log(error)})


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
