

<template class="bg-secondary">

<div class="container bg-primary">
  <div class="row">
    <div class=" col-md-6 col-lg-12">
      
<form id='form' @submit.prevent='postData'>

  <div class='form-group'>
<input class="form-control form-control-lg" type='hidden' v-model='thing.id'>
</div>
  
<div class='form-group'>
<label for='title'>title:</label><input class="form-control form-control-lg"  type='texte'  id='title' v-model='thing.title'>
</div>

<div class='form-roup'>
<label for='description'>image</label><img :src='thing.imageUrl' width="100" height="100">
</div>


<div class='form-roup'>
<label for='description'>description:</label><input class="form-control form-control-lg"  type='texte'  v-model='thing.description'>
</div>

<div class='form-group'>
<label for='filename'>filename</label><input class="form-control form-control-lg"  type='texte' id='filename' name='filename' v-model='thing.description'>
</div>


<div class='form-group'>
<label for='image'>file</label><input class="form-control form-control-lg"  type='file' @change='onFileUpload' name='file' id="file">
</div>
<div>
<input class="form-control form-control-lg"  type='hidden'  v-model='thing.imageUrl'>
</div>

<div class='form-group'>
<input type='hidden'  v-model='thing.userId' >
</div>

<div class='form-group'>
<label for='price'>price:</label><input class="form-control form-control-lg"  type='number' name='price' v-model='thing.price'>
</div>
<button  @click='(e)'> Ajouter</button>

</form>

</div>
</div>
</div>


</template>

<script>

  import {stuffService} from '@/_services'
  
   
  export default {
  
  name: 'HelloWorld',


  data(){

       return {

thing:{

      title:'',

      description:'',

      userId:'',

      imageUrl:'',

      price:''

       },

FILE:null,
            }



       },
  
  methods:{

onFileUpload (event) {



          this.FILE = event.target.files[0]



        },




postData() { 



//var form = document.getElementById('form');
         
     //    const  file=document.getElementById('file')
            
            var formData = new FormData();
           
            const Thing=JSON.stringify(this.thing)
           
            var blob= new Blob([this.FILE,this.FILE.name], {type : "image/PNG"})
        
            formData.append('thing',Thing)
            formData.append('image',blob)
            
            //formData.append('image',this.FILE,this.FILE.filename)

        // var values=JSON.stringify(Object.from((formData)))
         
            stuffService.addThing(formData,{
          })
            .then(res => {
                console.log(res)

                this.$router.push( '/info' )
            }).catch(err=> {
              console.log(err)
            })
    }
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
</style>
