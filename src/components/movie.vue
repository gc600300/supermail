<template>
<div><top>
      <fenlei v-for="(item,index) in fenlei" :key="index" :path="item.path" ><span>{{item.name}}</span></fenlei> 
  </top>
 </div>
  
</template>

<script>
import top from './top.vue'
import fenlei from './fenlei.vue'
export default {
 components:{
   top,
   fenlei
 },
 data(){
     return {
         fenlei:[{
             name:'榜单',
             path:'/bangdan'
         },{
             name:'欧美',
             path:'/oumei'
         },{
             name:'大陆',
             path:'/dalu'
         }]
     }
 }
}
</script>

<style>

</style>