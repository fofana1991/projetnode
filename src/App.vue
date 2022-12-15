<template>

 
  <nav class="nav w-100 navbar-expand navbar-expand-lg  bg-dark navbar-dark text-center">
  
  
     <a class="navbar-brand" href="#"><img src="./assets/logo2.png" width='50' hight='50'/></a>


    
     <li class="nav-item">
 <router-link class="nav-link "  to="/signup">signup</router-link>
  </li>
 <li class="nav-item">
  <router-link class="nav-link "  to="/about">login</router-link>
   </li>

    <li class="nav-item">
  <router-link class="nav-link active "  to="/info">thingtable</router-link>
   </li>
    <li class="nav-item">
    <router-link class="nav-link "  to="/addthing">addthing</router-link> 
   </li>
       <li class="nav-item">
     <router-link class="nav-link  "  to="/updadething/:id">updatething</router-link> 

      </li>
     
     
        
    
  </nav>

  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
    
    


  a {
    font-weight: bold;
    color: #2c3e50;
    
    
    &.router-link-exact-active {
      color: #42b983;
    }
    }
    }
  
</style>
