/* eslint-disable */

<template class="bg-secondary" >

<div class="row m-3 p-4" v-if='things'>

    {{result}}

 </div>    

   
<div class="row m-3 p-4" v-if="voyant">

   <div class="col">
      <input class="form-control" id="searchInput" type="text" placeholder="Search..">
   </div>
</div>  

  






<div class='container d-flex  align-items-inline' v-if='things'>

<div  class='row align-items-center p-3 ' id="fatou"  >

    
      <div class=' col-sm-1 col-md-2 col-lg-3  p-3 m-auto m-lg-4 overflow-y-hidden d-flex d-block switch' v-for='(thing) in things ' :key=thing._id id='draggable'>
                        
            <div class=" border bg-light lessonList m-auto" style="width: 18rem;">
                
                
             <img :src="thing.imageUrl" class="card-img-top avatar" rounded="circle "  @click='goEdit(thing._id)' alt="carte" height='250' width='300'>
                
               <div class="" >
                
                     <h5 class="corp"> <strong >Nom:</strong >{{thing.title}}</h5>

                      <p class=""><strong >Prenom:</strong >{{thing.description}}</p>
                      <p class="corp"><strong >Description:</strong >{{thing.profession}}</p>
                      <p class=""><strong >Sexe:</strong >{{thing.sexe}}</p>
                      <p class="corp"><strong >Prix promo:</strong ><mark>{{thing.price}}</mark></p>
                       <p class="corp " ><strong >Prix Normal:</strong><s><mark>{{thing.normalPrice}}</mark></s></p>
     
                       

<figure class="qrcode">
    <p class="card-text">
                        <qrcode-vue v-if='thing._id' :value="thing._id" :size="size" level="H" tag="svg"></qrcode-vue>
                       <img class="qrcode__image" src="../assets/logo2.png" alt="Chen Fengyuan" />

        <input class="form-control form-control-lg" type='text' v-model='thing._id' hidden="true">
 </p>
</figure>
                     

                    </div>
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
  import {stuffService} from '@/_services'
  //import {openiaService} from  '@/_services'
   
  export default {
  
  name: 'stuffFetch',


  
  
  data(){

    return {
        
             things:[],
             result:'',
             voyant:''

           }

           
  },

  components: {

      QrcodeVue,

              },


   methods:{



 
       
      

 






            refresh(){



stuffService.getAllstuff().then(res=>{

                                  

                                  this.things=res.data
    


                                   }).catch(error=>{
                                    console.log(error)
                                   })


                      },


           goEdit(uid){

 // this.$router.push( '/modifyStuff/'+id)
this.$router.push( {name:'modifystuff',params:{id:uid}})

                     }



           },
        



//recuperation de toutes les chose et pacer dans le data
     
     mounted() {

         /* eslint-disable */ 

       
      stuffService.getAllstuff()
                               .then(res=>{
                                   
    
     this.things=res.data         
    
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
              $('#wcp-input').css('background', color).val(color);
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



stuffService.getAllstuff().then(res=>{
if (res.status===200) {

          this.resultat = "mis a jour effectuée avec success"

        } 
                                  this.things=res.data
    


                                   }).catch(error=>{

                                    console.log(error)})


                      },
             
        





}
   
          
           
            

          







        
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >

qrcode-vue{
    z-index:1;
}


.qrcode {
  display: inline-block;
  font-size: 0;
  margin-bottom: 0;
  position: relative;
}

.qrcode__image {
    color: blue;
     background-color: #fff;
  border: 0.25rem solid #fff;
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.25);
  height: 25%;
  left: 50%;
  overflow: hidden;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
}




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
