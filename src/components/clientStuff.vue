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
<div  class='row align-items-center p-3 ' id="fatou w-100"  >

    
      <div class='col-sm-1 col-md-5 col-lg-3  py-3 m-auto  m-lg-4 m-md-4  overflow-y-hidden d-flex d-block d-md-inline' v-for='(thing) in things ' :key=thing._id id='draggable'>
       
        
            <div class=" border bg-light lessonList w-100 mb-5 border border-5 border-info things" style="width: 18rem;" >
             
            <div class="d-flex d-inline " >


             <div class="w-50 " >

             <img :src="thing.imageUrl" class="card-img-top avatar" rounded="circle "  @click='goEdit(thing._id)' alt="carte" height='250' width='300'>
              
              </div>

               <div class="w-50 " >
                
                     <h5 class="corp ml-3"> <strong ></strong >{{thing.title}}</h5>

                      <p class=""><strong ></strong >{{thing.description}}</p>
                      <p class="corp"><strong ></strong >{{thing.profession}}</p>
                      <p class=""><strong ></strong >{{thing.sexe}}</p>
                      <p class="corp"><strong></strong ><mark>{{thing.price}} FCFA</mark></p>
                      <p class="corp" v-if="thing.normalPrice"><strong > </strong><mark><s>{{thing.normalPrice}} FCFA</s></mark></p>
                      
                     

                    </div>

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
             voyant:''

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

                     }



           },
        



//recuperation de toutes les chose et pacer dans le data
     
     mounted() {

         /* eslint-disable */ 

       // openiaService.getopenai()
      stuffService.getclientstuff()
                                .then(res=>{
    
     this.things=res.data         
    
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
         var value = $(this).val().toLowerCase();
         $(".lessonList").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
         });
      });
   });
                                
    });


},


updated(){



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





</style>
