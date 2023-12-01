
<template class="bg-secondary">

<div class="container ">
  <div class="row">
    <div class=" col-md-6 col-lg-12">
      
<form id='form' @submit.prevent='postData' class="p-3 m-3">
       
        <div class='form-group p-3 m-3 bg-warning' v-if="err">
            {{err}}
           
        </div>

        <div class='form-group p-3 m-3 '>
           <input class="form-control form-control-lg" type='texte' v-model='person.nom' placeholder="Nom" required>
       </div>




       <div class='form-group p-3 m-3 '>
           <input class="form-control form-control-lg" type='texte' v-model='person.prenom' placeholder="Prenom" required>
       </div>


       <div class='form-group p-3 m-3'>
  
           <div> 
  
          <input id="wc-input"   type="color" v-model='person.color' required/><br />
  
           </div> 
       </div>
  

       <div class='form-group p-3 m-3'>
           <input class="form-control form-control-lg"  type='texte'  id='title' v-model='person.profession' placeholder="profession" required>
      </div>

       <div class='form-group p-3 m-3'>
          <img width="100" :src='FILE' height="100" id='blash'/>
       </div>


      <div class='form-group p-3 m-3'>
          <input class="form-control form-control-lg"  type='date'  v-model='person.anniversaire' placeholder="Date de naissance" required>
      </div>


       <div class='form-group p-3 m-3'>
          <input class="form-control form-control-lg"  type='tel'  v-model='person.number' placeholder="Numero téléphone" required>
      </div>

     


      <div class='form-group p-3 m-3'>
          <input class="form-control form-control-lg"  type='texte'  v-model='person.filename' placeholder="filename" required>
      </div>
      
     




       <div class="form-select form-select-sm p-3 m-3 " aria-label=".form-select-sm">
          <label for='sexe'>sexe:</label>
          <select v-model='person.sexe' class="form-control form-control-lg" required>
            <option value="feminin">Tous les sexe</option>
            <option value="feminin">F</option>
             <option value="masculin">M</option>
          </select>
      </div>


      <div>
           <input class="form-control form-control-lg"  type='texte'  v-model='person.entreprise' required placeholder="Nom de l'entreprise">
       </div>


        <div class='form-group p-3 m-3'>

          <input class="form-control form-control-lg" type='file' @change='onFileUpload' name='file' id="file" required placeholder="Photo">
       </div>

      




       <div>
           <input class="form-control form-control-lg"  type='hidden'  v-model='person.imageUrl' required>
       </div>

       

       


       <div class='form-group p-3 m-3'>
           <input type='hidden'  v-model='person.userId' >
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
  import {profcarteService} from '@/_services'
  
   
  export default {
  
  name: 'creatProfcarte',


  data(){

       return {

person:{

      nom:'',

      prenom:'',

      color:'',

      anniversaire:'',

      profession:'',

      userId:'',

      imageUrl:'',

    

      entreprise:'',

      filename:'',

      
      
      sexe:'',
      number:'',
    

       },
err:'',
FILE:null,

FILE2:null

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
           
            const Person=JSON.stringify(this.person)
           
            var blob= new Blob([this.FILE,this.person.filename], {type : "image/PNG"})

            
        
            formData.append('person',Person)
            formData.append('image',blob)
           
            
            //formData.append('image',this.FILE,this.FILE.filename)

        // var values=JSON.stringify(Object.from((formData)))
         
            profcarteService.addProfcarte(formData,{
          },this.person)
            .then(res=>{

                if (res.status===201) {
        
this.$router.push( '/getAllProfCarte' )

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
