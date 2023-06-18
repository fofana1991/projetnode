<template class="bg-secondary ">



<div class='container p-3 m-3 '>

<div v-if='avertissement' class='bg-danger m-4 p-3' height='250'>
<img src="../assets/danger.jpeg" width="50" height="50">

{{avertissement}}
</div>


<div class='row d-flex d-inline-sm  d-block-lg p-4 ' v-if='thing'>
  
<div class='col-12 col-lg-6 modifier'  >

<form @submit.prevent='modifyThing'>


  <div class='form-group avatar'>
<img :src='thing.imageUrl' width="300" height="300">
</div>



<div class='form-group'>

 <qrcode-vue v-if='id' :value="id" :size="size" level="H" />
<input class="form-control form-control-lg" type='texte' v-model='thing._id' hidden>

</div>



<div class='form-group'>
 
  <div id="w1">
      <input id="wc-input"   type="texte" v-model ='thing.color' /><br />
    </div>
  
   
  </div>



  
  
<div class='form-group'>
<label for='title'>Nom:</label><input class="form-control form-control-lg" type='texte' v-model='thing.title' placeholder="Inconnu">
</div>

<div class='form-group'>
<label for='description'>Prenom:</label><input class="form-control form-control-lg" type='texte' v-model='thing.description' placeholder="Inconnu">
</div>
<div class='form-group'>
<label for='description'>Profession:</label><input class="form-control form-control-lg" type='texte' v-model='thing.profession' placeholder="Inconnu">
</div>
<div class='form-group'>
<label for='description'>Entreprise:</label><input class="form-control form-control-lg" type='texte' v-model='thing.entreprise' placeholder="Inconnu">
</div>
<div class='form-group'>

<label for='description'>sexe:</label><select v-model=thing.sexe>
    <option value="feminin">F</option>
    <option value="masculin">M</option>
</select>

</div>



<div class='form-group'>

<label for='imageUrl'>imageUrl:</label><input id='imageUrl' class="form-control form-control-lg" type='texte' v-model="thing.imageUrl" placeholder="Inconnu">
</div>

<div class='form-group'>
<input class="form-control form-control-lg" type='hidden' v-model='thing.userId'>
</div>

<div class='form-group'>
<label for='price'>Entreprise:</label><input class="form-control form-control-lg" type='texte' v-model='thing.price' placeholder="Inconnu">
</div>

<div>

<button  @click='submit'> modifier</button>

</div>


</form>

</div>





<div  class="col-lg-6  p-3 d-block fixed-right "  id="fatou cache" >

            <div class="corp border bg-light " style="width: 18rem;" >
                <img :src="thing.imageUrl" class="card-img-top avatar" rounded="circle "   alt="carte" height='250' width='300'/>
                 <div class="" >
                     <h5 class=""> <strong >Nom:</strong >{{thing.title}}</h5>
                      <p class=""><strong >Prenom:</strong >{{thing.description}}</p>
                      <p class=""><strong >Profession:</strong >{{thing.profession}}</p>
                      <p class=""><strong >Sexe:</strong >{{thing.sexe}}</p>
                      <p class=""><strong >Entreprise:</strong >{{thing.price}}</p>
     
                       <p class="card-text">

                           

                                    <qrcode-vue v-if='id' :value="thing._id" :size="size" level="H" />

                                     <input class="form-control form-control-lg" type='text' v-model='thing._id' hidden="true">



                      </p>

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
    </div>







</div>
</div>


</template>

<script>

import $ from 'jquery'
  import QrcodeVue from 'qrcode.vue'
  import {stuffService} from '@/_services'
  
  
  export default {
  
  name: 'modifyStuff',


  data(){
    return{

      id:'',
      thing:{},
      avertissement:'',
    }
  },

   components: {
      QrcodeVue,
    },
  
methods:{

  modifyThing(){

 stuffService.modifyThing(this.thing).then(

  this.$router.push( '/info')
 ).catch(err=>{

console.log(err)



 }

  ) },

  async deleteThing(){

await stuffService.deleteThing(this.thing);
await  this.$router.push( '/info');


  }

},




//recuperation de l'element dans le parametre de l'url 
    mounted() {

this.id = this.$route.params.id
stuffService.getStuff(this.id).then(res=>{

  this.thing=res.data
if(this.thing==null) {

this.avertissement='Produit Frauduleux'

}
}).catch(err=>{

  if(err.response.status==404){
    
    this.avertissement='Produit Frauduleux'


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



 $('#cache').click(function(){
      $('.modifier').slideDown(1000,'swing');
    
});
$('#montrer').click(function(){
      $('.modifier').slideUp(1000,'swing');
    
});



})


      
   
    
    },
   
   
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
</style>
