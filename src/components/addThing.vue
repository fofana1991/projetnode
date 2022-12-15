
<template>
<div>
  <!-- Using modifiers -->
  <button v-toggle.collapse-2 class="m-1">Toggle Collapse</button>

  <!-- Using value -->
  <button v-b-toggle="'collapse-2'" class="m-1">Toggle Collapse</button>

  <!-- Element to collapse -->
  <collapse id="collapse-2">
    <card>I am collapsible content!</card>
  </collapse>
</div>
</template>

<script>


  
   
  export default {
  
  name: 'addThing',
  
     
    
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
