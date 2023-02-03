

<template class="bg-secondary">

<div class="container bg-primary ">
  <div class="row">
    <div class=" col-md-6 col-lg-12">
      
<form id='form' @submit.prevent='postData' class="p-3 m-3">

        <div class='form-group p-3 m-3 '>
           <input class="form-control form-control-lg" type='hidden' v-model='thing.id'>
       </div>
       <div class='form-group p-3 m-3'>
  
           <div> 
  
          <input id="wc-input"   type="color" v-model='thing.color' /><br />
  
           </div> 
       </div>
  

       <div class='form-group p-3 m-3'>
           <input class="form-control form-control-lg"  type='texte'  id='title' v-model='thing.title' placeholder="title">
      </div>

       <div class='form-group p-3 m-3'>
          <img width="100" :src='FILE' height="100" id='blash'/>
       </div>


      <div class='form-group p-3 m-3'>
          <input class="form-control form-control-lg"  type='texte'  v-model='thing.description' placeholder="description">
      </div>

      <div class='form-group p-3 m-3'>
          <input class="form-control form-control-lg"  type='texte' id='filename' name='filename' v-model='thing.description' placeholder="filname" >
      </div>


       <div class='form-group p-3 m-3'>

          <input class="form-control form-control-lg" type='file' @change='onFileUpload' name='file' id="file">
       </div>
       <div>
           <input class="form-control form-control-lg"  type='hidden'  v-model='thing.imageUrl'>
       </div>

       <div class='form-group p-3 m-3'>
           <input type='hidden'  v-model='thing.userId' >
       </div>

        <div class='form-group p-3 m-3'>
            <input class="form-control form-control-lg"  type='number' name='price' v-model='thing.price' placeholder="price" >
       </div>

       <div class='form-group p-3 m-3'>
             <button  @click='(e)'> Ajouter</button>
       </div>     

</form>

</div>
</div>
</div>


</template>

<script>
  import $ from 'jquery'
  import {stuffService} from '@/_services'
  
   
  export default {
  
  name: 'HelloWorld',


  data(){

       return {

thing:{

      title:'',

     color:'',

      description:'',

      userId:'',

      imageUrl:'',

      price:'',
    

       },

FILE:null,
            }



       },
  
  methods:{
             
color(color){

this.color=color

},

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
},

mounted() {

$(function() {

 
 prompt('hello');

$("#wc1").wColorPicker({
            initColor: '#ccf',
            onSelect:
             function(color){
            
              $('.corp,body').css('background', color);
              $('#wc-input').val(color);
              
            },
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
