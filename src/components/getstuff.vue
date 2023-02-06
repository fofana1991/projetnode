<template class="bg-secondary">



<div class='container p-3 m-3'>

<div class='row'>*
  

<div class='col-12 col-lg-12 '>

<form @submit.prevent='modifyThing'>


  <div class='form-group avatar'>
<img :src='thing.imageUrl' width="300" height="300">
</div>



<div class='form-group'>

 <qrcode-vue v-if='id' :value="id" :size="size" level="H" />
<input class="form-control form-control-lg" type='texte' v-model='thing._id' hidden>

</div>



<div class='form-group'>
 
  <div id="wc1">
      <input id="wc-input"   type="texte" v-model ='thing.color' /><br />
    </div>
  
   
  </div>




  
  
<div class='form-group'>
<label for='title'>Nom:</label><input class="form-control form-control-lg" type='texte' v-model='thing.title'>
</div>

<div class='form-group'>
<label for='description'>Prenom:</label><input class="form-control form-control-lg" type='texte' v-model='thing.description'>
</div>
<div class='form-group'>
<label for='description'>Profession:</label><input class="form-control form-control-lg" type='texte' v-model='thing.profession'>
</div>
<div class='form-group'>
<label for='description'>Entreprise:</label><input class="form-control form-control-lg" type='texte' v-model='thing.entreprise'>
</div>
<div class='form-group'>

<label for='description'>sexe:</label><select v-model=thing.sexe>
    <option value="feminin">F</option>
    <option value="masculin">M</option>
</select>

</div>



<div class='form-group'>

<label for='imageUrl'>imageUrl:</label><input id='imageUrl' class="form-control form-control-lg" type='texte' v-model="thing.imageUrl">
</div>

<div class='form-group'>
<input class="form-control form-control-lg" type='hidden' v-model='thing.userId'>
</div>

<div class='form-group'>
<label for='price'>price:</label><input class="form-control form-control-lg" type='number' v-model='thing.price'>
</div>

<div>

<button  @click='submit'> modifier</button>

</div>


</form>



<div class='col d-flex d-inline'>
<button id="cache" class='p-3 m-3' onclick='window.print()'>imprimer</button>
<button  @click='deleteThing()'> deleteThing</button>

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
  
  name: 'getStuf',


  data(){
    return{

      id:'',
      thing:{}
    }
  },

   components: {
      QrcodeVue,
    },
  
methods:{

  modifyThing(){

 stuffService.modifyThing(this.thing).then(res=>{

console.log(res)
  this.$router.push( '/info')
 }).catch(err=>(console.log(err)))

  



  },

  async deleteThing(){

 const res = await stuffService.deleteThing(this.thing);

await  console.log(res);

await  this.$router.push( '/info');


  }

},




//recuperation de l'element dans le parametre de l'url 
    mounted() {

this.id = this.$route.params.id
stuffService.getStuff(this.id).then(res=>{
  console.log(res)
  this.thing=res.data

}).catch(err=>(console.log(err)));


$(function() {

$("#wc1").wColorPicker({
            initColor: '#ccf',
            onSelect: function(color){
              $('.corp,body').css('background', color);
            },
            onMouseover: function(color){
              $('#wc-input').css('background', color).val(color);
            }
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
