<template class="bg-secondary">

<div class="container ">
  <div class="row">
    <div class=" col-md-6 col-lg-12">
      
<form id='form' @submit.prevent='postData' class="p-3 m-3">

  <div class='form-group p-3 m-3 bg-warning' v-if="err">
            {{err}}
           
        </div>

  
       <div class='form-group p-3 m-3'>
           <input class="form-control form-control-lg"  type='texte'  id='title' v-model='recu.type' placeholder="type de maison" required>
      </div>


      <div class='form-group p-3 m-3'>
          <input class="form-control form-control-lg"  type='number'  v-model='recu.nombreDeChambre' placeholder="Nombre de chambre" required>
      </div>

     <div class='form-group p-3 m-3'>
          <input class="form-control form-control-lg"  type='number'  v-model='recu.loyer' placeholder="Loyer" required>
      </div>



 <div class='form-group p-3 m-3'>
          <input class="form-control form-control-lg"  type='number'  v-model='recu.caution' placeholder="caution" required>
      </div>

  <div class='form-group p-3 m-3'>
          <input class="form-control form-control-lg"  type='texte'  v-model='recu.ville' placeholder="Ville" required>
      </div>

<div class='form-group p-3 m-3'>
          <input class="form-control form-control-lg"  type='texte'  v-model='recu.quartier' placeholder="quartier" required>
      </div>

<div class='form-group p-3 m-3'>
          <input class="form-control form-control-lg"  type='texte'  v-model='recu.geolocation' placeholder="Géolocation" >
      </div>

       <div class='form-group p-3 m-3'>

          <input class="form-control form-control-lg" type='file' @change='onFileUpload' name='file' id="file" required>
       </div>
       <div>
           <input class="form-control form-control-lg"  type='hidden'  v-model='recu.imageUrl' required>
       </div>

        <div>
           <input class="form-control form-control-lg"  type='text'  v-model='recu.videoUrl' placeholder="URL de votre vidéo">
       </div>

    

 <div class='form-group p-3 m-3'>
          <input class="form-control form-control-lg"  type='number'  v-model='recu.numero' placeholder="Numero" required>
      </div>


       <div class='form-group p-3 m-3'>
           <input type='hidden'  v-model='recu.userId' >
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
  import {recuService} from '@/_services'
  
   
  export default {
  
  name: 'creatRecu',


  data(){

       return {

recu:{

  type:"",
  nombreDeChambre: "",
  loyer:"",
  caution:"",
  ville:"",
  quartier:"",
  geolocation:"",
  imageUrl:"",
  videoUrl:"",
  userId:"",
  numero:"",
    
       },

FILE:null,
err:'',
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
           
            const Recu=JSON.stringify(this.recu)
           
            var blob= new Blob([this.FILE,this.FILE.name], {type : "image/PNG"})
        
            formData.append('recu',Recu)
            formData.append('image',blob)
            
         
            recuService.addRecu(formData,{
          })
            .then(res=>{

                if (res.status===201) {
        
this.$router.push( '/recus' )

                }
  }).catch(err=> {
               
              this.err =err.response.data.error.message
            })
    }
},

mounted() {

$(function() {


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
