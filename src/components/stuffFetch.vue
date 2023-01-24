<template class="bg-secondary z-0" >

<div class='bg-success'>

<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong> {{resultat}}
    </strong> 
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

 
</div>




<div class='container' v-if='things'>



                            
    <button type="button" class="btn btn-primary manche" @click='refresh()' >

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi  bi-arrow-repeat" viewBox="0 0 16 16">
            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
            <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
        </svg>

    </button>

 </div>
  
  

  
<div class='container d-flex  align-items-stretch '>
    <div  class='row align-items-center '>

        <div class='col-sm-1 col-md-3 col-lg-3  p-3 mx-4 overflow-y-hidden z-0 ' v-for='(thing) in things' :key=thing._id >
            <div class="card  border bg-light switch" style="width: 18rem;" >
                <img :src="thing.imageUrl" class="card-img-top" @click='goEdit(thing._id)' alt="carte" height='250'/>
                 <div class="card-body">
                     <h5 class="card-title"> titre:{{thing.title}}</h5>
                      <p class="card-text">description:{{thing.description}}</p>
                      <p class="card-text">prix:{{thing.price}}</p>
     
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

       // openiaService.getopenai()
      stuffService.getAllstuff()
      
        //stuffService.getAllstuff()
                                .then(res=>{

                                  console.log(res.data)

                                  this.things=res.data
                                

                                }).catch(error=>{

                                    console.log(error)


if (error.message=== 'Network Error') {

          this.resultat = "vérifier la connection internet"

        } 

 
                                })


                                
    }


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
        
        
    }
    40%{


        height:300px;
        
       
    }
60%{
    height: 350px;

    
}
90%,100%{
      height:400 px;
      
   
}
 }


</style>
