<template class="bg-secondary">

<div class="container ">
  <div class="row">
    <div class=" col-md-6 col-lg-12">
      
<form id='form' @submit.prevent='postData' class="p-3 m-3">
  
       <div class='form-group p-3 m-3'>
           <input class="form-control form-control-lg"  type='texte'  id='title' v-model='recu.nom' placeholder="nom">
      </div>


      <div class='form-group p-3 m-3'>
          <input class="form-control form-control-lg"  type='texte'  v-model='recu.prenom' placeholder="prenom">
      </div>

     <div class='form-group p-3 m-3'>
          <input class="form-control form-control-lg"  type='texte'  v-model='recu.sommesEnletre' placeholder="sommes en lettre">
      </div>



 <div class='form-group p-3 m-3'>
          <input class="form-control form-control-lg"  type='texte'  v-model='recu.Prescription' placeholder="prescription">
      </div>





       <div class="form-select form-select-sm p-3 m-3 " aria-label=".form-select-sm">
          <label for='description'>sexe:</label>
          <select v-model='recu.sexe' class="form-control form-control-lg">
            <option value="feminin">F</option>
             <option value="masculin">M</option>
          </select>
      </div>




       <div class='form-group p-3 m-3'>

          <input class="form-control form-control-lg" type='file' @change='onFileUpload' name='file' id="file">
       </div>
       <div>
           <input class="form-control form-control-lg"  type='hidden'  v-model='recu.imageUrl'>
       </div>

       <div class='form-group p-3 m-3'>
           <input type='hidden'  v-model='recu.userId' >
       </div>

        <div class='form-group p-3 m-3'>
            <input class="form-control form-control-lg"  type='number' name='sommes' v-model='recu.sommes' placeholder="sommes" >
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

  nom:"",
  prenom: "",
  sommesEnletre:"",
  Prescription:"",
  sexe:"",
  imageUrl:"",
  userId:"",
  sommes:"",
    
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
           
            const Recu=JSON.stringify(this.recu)
           
            var blob= new Blob([this.FILE,this.FILE.name], {type : "image/PNG"})
        
            formData.append('recu',Recu)
            formData.append('image',blob)
            
         
            recuService.addRecu(formData,{
          })
            .then(res => {
                console.log(res)

                this.$router.push( '/recus' )
            }).catch(err=> {
              console.log(err)
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
