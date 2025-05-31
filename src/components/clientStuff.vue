

<template class="bg-secondary" >

<div class="row m-3 p-4" v-if='things'>

    {{result}} 

 </div>    

   
<div class="row m-3 p-4">

   <div class="col">

       <input class="form-control" id="searchInput" type="text" placeholder="Produits">

   </div>

  

   <div class="col">

       <input class="form-control" id="searchInput2" type="text" placeholder="Ville">

  
   </div>
</div>  

  

       



<div class='container d-flex  align-items-inline' v-if='things'>


 <div class='row align-items-center p-3 ' id="fatou w-100"  > 


  



          


    
      <div class='col-12 col-sm-6 col-md-4 col-lg-3  py-1 m-auto  m-lg-1 m-md-1  overflow-y-hidden d-flex d-inline d-md-inline' v-for='(thing) in things ' :key=thing._id>
       


        
            <div  class=" border bg-light lessonList w-100 mb-5 border border-5 border-danger things"  style="width: 14rem;" >
             

                


            <div class="d-flex d-inline " >

             <div v-if="loadingProducts[index]" class="d-flex justify-content-center align-items-center">
                        
                           <div class="custom-loader my-3"></div>
              
            </div>


             <div v-else class="w-50 " >


<div class="slide carousel-fade carousel" >
  <div class="carousel-inner ">
     <div>
    <div class="carousel-item"  v-for="(url,index) in getImageUrls(thing)" :key="index" :class="{ active: index === 0 } " >
      <img :src="url" class="card-img-top avatar "  @click="goEdit(thing._id)" alt="carte" height="250" width="300" >
    </div>  
    </div>
  </div>
</div>
             

              
              </div>

               <div class="w-50 " >
                
                     <h5 class="corp ml-3"> <strong ></strong >{{thing.title}}</h5>
                     
                      
                      <p class="overflow-hidden" style="max-height: 50px;"><strong ></strong >{{thing.description}}</p>

                      <p class=""><strong ></strong ><mark>{{thing.city}}</mark></p>

                      
                      <p class="corp blink-price"><strong></strong ><mark>{{thing.price.toLocaleString('fr-FR') }} FCFA</mark></p>
                    

                      <p class="corp " v-if="thing.normalPrice"><strong > </strong><mark><s>{{thing.normalPrice.toLocaleString('fr-FR') }} FCFA</s> </mark></p>

                      
                                     

                    </div>
                                         

               </div> 
                       <p class="corp"><strong ></strong >{{thing.profession}}</p>
                       
                 <div v-if="thing.userNumber">



                        <img src="../assets/whatsapp2.png" @click='whatsapp(thing.userNumber)' height='60' class="w-25">

                      </div>

              </div>
          </div>

    </div>    


 
  </div>


   



</template>

<script>



import $ from 'jquery'
import {accountService} from '@/_services'

  //import {stuffService} from '@/_services'
  import {stuffService} from '@/_services'
  //import {openiaService} from  '@/_services'
   
  export default {
  
  name: 'clientstuffFetch',


  
  
  data(){

    return {
        
             things:[],

             result:'',

             

             voyant:'',

             loadingProducts: [],
            


           }

           
  },

  components: {

    

              },





 
            


   methods:{

            refresh(){



stuffService.getclientstuff.then(res=>{

                                  

                                  this.things=res.data
    


                                   }).catch(error=>{
                                    console.log(error)
                                   })


                      },


           goEdit(uid){

  // this.$router.push( '/modifyStuff/'+id)
this.$router.push( {name:'updatething',params:{id:uid}})

                     },

 whatsapp(uid){

 
window.location.replace('https://wa.me/2250'+ uid)




           },



 getImageUrls(thing){
    return [
      thing.imageUrl,
      thing.imageUrl1,
     
      
    ].filter(Boolean); // Supprime les valeurs nulles ou undefined
  }

 },
                  
        



//recuperation de toutes les chose et pacer dans le data
     
     mounted() {


    
 
 // this.$nextTick(() => {
 //  const carousels = document.querySelectorAll('.carousel');
 // carousels.forEach((el) => {
 //   new window.bootstrap.Carousel(el, {
 //      interval:3000,
 //       ride:'carousel',
 //       pause: false
 //     });
 //   });
 // });
  







          this.loadingProducts = []; // vide d'abord

         /* eslint-disable */ 


// this.thingPrice =new Intl.NumberFormat().format(this.thing.price);

// this.thingNormalPrice =new Intl.NumberFormat().format(this.thing.normalPrice);


       // openiaService.getopenai()
      stuffService.getclientstuff()
                                .then(res=>{
    
   
      // Simuler un délai pour chaque produit
      res.data.forEach((thing, index) => {
        this.loadingProducts.push(true); // indique qu’il charge

        setTimeout(() => {
          this.things.push(thing);
          this.loadingProducts[index] = false; // terminé pour ce produit
        }, 10000 * index); // délai progressif (300ms entre chaque)
      });


  
    
       
    
                                }).catch(error=>{

         if(error.response.status===403){           
    
     this.$router.push( '/carte' )
        
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


        var value = $(this).val().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // supprime les diacritiques (accents)

         // var value = $(this).val().toLowerCase();

         $(".lessonList").filter(function() {



          var text = $(this).text().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        $(this).toggle(text.indexOf(value) > -1);


            // $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)


                                            });

      });
      
       $("#searchInput2").on("keyup", function() {

        var value = $(this).val().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // supprime les diacritiques (accents)


         // var value = $(this).val().toLowerCase();



         $(".lessonList").filter(function() {

          var text=$(this).text().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        $(this).toggle(text.indexOf(value) > -1);



            // $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)


         });
      });



      function bien() {
        $('#fatou').animate({left:"-=50px"},2000,bien);
       };
       bien();







   });
                                
    });


},


updated(){


 // this.$nextTick(() => {
 //  const carousels = document.querySelectorAll('.carousel');
 //  carousels.forEach((el) => {
 //    new window.bootstrap.Carousel(el, {
 //      interval:300,
 //      ride:'carousel',
 //      pause:'hover'
 //     });
 //    });
 //  });
  
 


stuffService.getclientstuff().then(res=>{
if (res.status===200) {

          this.resultat = "mis a jour effectuée avec success"

        } 
                                  this.things=res.data
    


                                   }).catch(error=>{

                                    console.log(error)})





                      },
             
        

computed:{
 prixreduit(){

 return 10000



}


}



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


.things {

animation:img_animation 6000ms 150ms alternate infinite ease-in-out paused forwards;


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
    animation-play-state:running;
}


.custom-loader {
  width: 36px;
  height: 36px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  animation: spin 0.9s linear infinite;
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


    border-left-color:red ;
    border-width:10px ;
       
       
    }
60%{

    border-top-color:red ;
    border-width:10px ;

    
        
}
60%,70%{

    border-right-color:red ;

    border-width:10px ;
        
}
90%,100%{
      
    border-bottom-color:red ;
    border-width:10px;
   
}
 }


@keyframes img_animation {
    0%,{
        
        opacity:1;
    }
    40%,50%{

        border-left-color:red;

        border-width: 50px;
       
            }
60%,70%{
     border-top-color:burlywood;
      border-width: 10px;
    
}
90%,100%{
      
      border-right-color: yellowgreen;

      border-width: 50px;
      
      
   
}
 }




@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.blink-price {
  animation: blink 2000ms 200ms alternate infinite ease-in-out; /* clignote 3 fois */
}

</style>
