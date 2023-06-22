
              /* eslint-disable */

<template class="bg-secondary" >


<div class='container d-flex  align-items-inline' >


    <div  class='row align-items-center p-3 ' id="fatou " >

    
        <div class=' col-sm-12 col-md-12  col-lg-12  p-3 m-auto m-lg-4 overflow-y-hidden d-flex d-block switch' v-for='(recu,index) in recus ' :key=recu._id id='lessonList' >

            <div class="corp border bg-light w-100" style="width: 18rem;" >
                <p class=""><strong >Numero </strong >{{index+1}}</p>
                 <div class="" >
                      <img :src="recu.imageUrl" class="avatar" rounded="circle "  @click='goEdit(thing._id)' alt="carte" height='100' width='100'>               
                     <p class="d-flex d-inline"> recu de:<strong >{{recu.nom}} {{recu.prenom}} </strong ></p>
                      <p class=""><strong >sommes en letre:</strong >{{recu.sommesEnletre}}</p>
                      <p class=""><strong >Sexe:</strong >{{recu.sexe}}</p>
                      <p class=""><strong >sommes en chiffre:</strong >{{recu.sommes}}</p>
     
                       <p class="card-text">

                           

                                    <qrcode-vue v-if='recu._id' :value="recu._id" :size="size" level="H" />

                                     <input class="form-control form-control-lg" type='text' v-model='recu._id' hidden="true">


                        


                      </p>

                    </div>
              </div>
          </div>
    </div>
  </div>


   <div class="d-flex d-block m-3 p-3">
                <div>

               <svg onclick='window.print()' xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-printer-fill" viewBox="0 0 16 16">
               <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"/>
                <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
               </svg> 
               </div>
               
              <div >
               <svg @click='deleteThing()' xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash3-fill mx-4 " viewBox="0 0 16 16">
               <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
               </svg>

               </div>


                </div>




</template>

<script>

  import $ from 'jquery'
  import QrcodeVue from 'qrcode.vue'

  //import {stuffService} from '@/_services'
  import {recuService} from '@/_services'
  //import {openiaService} from  '@/_services'
   
  export default {
  
  name: 'getAllrecu',


  
  
  data(){

    return {
        
             recus:[]

           }
           
  },

  components: {

      QrcodeVue,

              },


   methods:{



 
       


           goEdit(uid){

  
 // this.$router.push( '/updatething/'+id)
this.$router.push( {name:'updateRecu',params:{id:uid}})

                     }



           },
        



//recuperation de toutes les chose et pacer dans le data
     
     mounted() {

         /* eslint-disable */ 

       // openiaService.getopenai()
      recuService.getAllrecu()
      
        //stuffService.getAllstuff()
                                .then(res=>{

                                  

                                  this.recus=res.data
                      

                                }).catch(error=>{

                                    


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



recuService.getAllrecu().then(res=>{

    
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
