<template class="bg-secondary" >

<div class="row m-3 p-4" >
   <div class="col">
      <input class="form-control" id="searchInput" type="text" placeholder="Search..">
   </div>
</div>



<div class='container d-flex  align-items-inline'>


    <div  class='row align-items-center p-3 ' id="fatou " >

    
        <div class=' col-sm-12 col-md-12  col-lg-12  p-auto m-auto m-lg-4 overflow-y-hidden d-flex d-block switch' v-for='(recu,index) in recus ' :key=recu.ville  >
            
         <div class="col-12 lessonList">
            
             <p class="mt-4 bg-info"><strong >Publié le:</strong >{{recu.date}}</p><br/>
            <div class="corp border bg-light w-100" style="width: 18rem;" >

                <p class=""><strong >Numero </strong >{{index+1}}</p>
                 <div class="d-flex d-inline" >

                      <div>
                      <img :src="recu.imageUrl" class="avatar w-100" rounded="circle "  @click='goEdit(recu._id)' alt="carte" height='250' >               
                      </div>

                      <div>

                      <p class=""><strong >Type de maison:</strong >{{recu.type}}</p>
                      <p class=""><strong >Nombre de chambre:</strong >{{recu.nombreDeChambre}}</p>
                      <p class=""><strong >Loyer:</strong >{{recu.loyer}}</p>
                      <p class=""><strong >Caution:</strong >{{recu.caution}}</p>
                      <p class=""><strong >Ville:</strong >{{recu.ville}}</p>
                      <p class=""><strong >Quartier:</strong >{{recu.quartier}}</p>
        
                     
                     </div>
                     

                    </div>
                </div>
 <span class="w-100 bg-success mx-2"> </span>  
                        
              </div>

            
                      

          </div>
    </div>
  </div>


   

</template>

<script>

  import $ from 'jquery'
  
  //import {stuffService} from '@/_services'
  import {recuService} from '@/_services'
  //import {openiaService} from  '@/_services'
   
  export default {
  
  name: 'getclientMaison',


  
  
  data(){

    return {
        
             recus:[]

           }
           
  },

  components: {

      

              },


   methods:{



 
       


           goEdit(uid){ 
 // this.$router.push( '/updatething/'+id)
this.$router.push( {name:'clientgetMaison',params:{id:uid}})

                     }



           },
        



//recuperation de toutes les chose et pacer dans le data
     
     mounted() {

         /* eslint-disable */ 

       // openiaService.getopenai()
      recuService.geclientrecu()
      
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
         $(".lessonList").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) >-1)
         });
      });
   });
                                
    });


},


updated(){



recuService.geclientrecu().then(res=>{

    
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
