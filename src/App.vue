<template>
  <div id="app">
   <movie></movie>
    <keep-alive ><router-view></router-view></keep-alive> 
  </div>
</template>
<script>

import movie from "./components/movie"
export default {
 components:{
   movie
 }
}
</script>

<style>

</style>
