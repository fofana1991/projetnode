/* eslint-disable */

<template class="bg-secondary" >



<div class="row mb-3">
   <div class="col">
      <input class="form-control" id="searchInput" type="text" placeholder="Search..">
   </div>
</div>    


<div id="wcp1" hidden>
      <input id="wcp-input" class=''  type="text"/><br />
    </div>


<div class='bg-success color'>
    
  {{resultat}}
  
</div>
  


<div class='container d-flex  align-items-inline' id='lessonList'>


    <div  class='row align-items-center p-3 ' id="fatou " >

    

        <div class=' col-sm-1 col-md-3 col-lg-3  p-3 m-auto m-lg-4 overflow-y-hidden d-flex d-block switch' v-for='(thing) in things ' :key=thing._id >
            <div class="corp border bg-light " style="width: 18rem;" >
                <img :src="thing.imageUrl" class="card-img-top avatar" rounded="circle "  @click='goEdit(thing._id)' alt="carte" height='250' width='300'/>
                 <div class="" >
                     <h5 class=""> <strong >Nom:</strong >{{thing.title}}</h5>
                      <p class=""><strong >Prenom:</strong >{{thing.description}}</p>
                      <p class=""><strong >Profession:</strong >{{thing.profession}}</p>
                      <p class=""><strong >Sexe:</strong >{{thing.sexe}}</p>
                      <p class=""><strong >Entreprise:</strong >{{thing.price}}</p>
     
                       <p class="card-text">

                           <div class='form-group'>

                                    <qrcode-vue v-if='thing._id' :value="thing._id" :size="size" level="H" />

                                     <input class="form-control form-control-lg" type='text' v-model='thing._id' hidden="true">


                            </div>


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

  //import {stuffService} from '@/_services'
  import {stuffService} from '@/_services'
  //import {openiaService} from  '@/_services'
   
  export default {
  
  name: 'stuffFetch',


  
  
  data(){

    return {
        
             things:[]

           }

resultat:null
           
  },

  components: {

      QrcodeVue,

              },


   methods:{



 
       
      

 






            refresh(){



stuffService.getAllstuff().then(res=>{
if (res.status===200) {

          this.resultat = "mis a jour effectuée avec success"


        } 
                                  console.log(res.data)

                                  this.things=res.data
    


                                   }).catch(error=>{

                                    console.log(error)})


                      },


           goEdit(uid){

  console.log(uid)
 // this.$router.push( '/updatething/'+id)
this.$router.push( {name:'updatething',params:{id:uid}})

                     }



           },
        



//recuperation de toutes les chose et pacer dans le data
     
     mounted() {

         /* eslint-disable */ 

       // openiaService.getopenai()
      stuffService.getAllstuff()
      
        //stuffService.getAllstuff()
                                .then(res=>{

                                  console.log(res.data)

                                  this.things=res.data

    if (res.status===200) {

          this.resultat = "voici l'ensemble des carte"

        } 
                      

                                }).catch(error=>{

                                    console.log(error)


if (error.message=== 'Network Error') {

          this.resultat = "vérifier la connection internet"

        } 

 
                                })

$(function() {

 $("#heure").css("position",'absolute').css("top","10").css("left",'0').css("border-size","2em").css("border-style","dotted").css('border-radius','2em').css('background-color','yellow');
       
        $("#wcp1").wColorPicker({
            initColor: '#ccf',
            onSelect:
             function(color){
              $('.corp,body').css('background', color);
             
            },
            onMouseover: function(color){
              $('#wcp-input').css('background', color).val(color);
            }
        });



      $('#cache').mouseover(function(){
        $('color').animate({left:'-=100'},{queue:false, duration:2000})
        .animate({top:'+=50'},2000,);

      });


       function horloge(){
        var date = new Date();
        var h = date.getHours() + ":" + date.getMinutes()+ ":" + date.getSeconds();
        $("#heure").text(h);
       }
       setInterval(horloge,1000);


       $(document).ready(function(){
      $("#searchInput").on("keyup", function() {
         var value = $(this).val().toLowerCase();
         $("#lessonList").filter(function() {
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
