<template class="bg-secondary">

<div class='container'>

<div class='row'>

<div class='col-12 col-lg-12 '>

<form @submit.prevent='modifyThing'>


  <div class='form-roup'>
<img :src='thing.imageUrl' width="300" height="300">
</div>


  <div class='form-group'>
<label for='thing.id'>id:</label><input class="form-control form-control-lg" type='texte' v-model='thing._id'>
</div>
  
<div class='form-group'>
<label for='title'>title:</label><input class="form-control form-control-lg" type='texte' v-model='thing.title'>
</div>

<div class='form-group'>
<label for='description'>description:</label><input class="form-control form-control-lg" type='texte' v-model='thing.description'>
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


<div>

<button  @click='deleteThing()'> deleteThing</button>

</div>


</div>
</div>
</div>

</template>

<script>

  import {stuffService} from '@/_services'
  
   
  export default {
  
  name: 'getStuf',
  data(){
    return{

      id:'',
      thing:{}
    }
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

}).catch(err=>(console.log(err)))


      
   
    
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
