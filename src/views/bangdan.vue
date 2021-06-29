<template>
<div>
    <category>
    <catitem v-for="(item,index) in list" :key="index" :path="item.path">
          {{item.name}}
    </catitem>
</category>
<keep-alive><router-view></router-view></keep-alive>
</div>

</template>

<script>
import category from "../components/category.vue"
import catitem from "../components/catitem.vue"
export default {
    data(){
        return{
            path:"",
            list:[{name:'热评口碑榜',path:"hot"},
            {name:"最受期待榜",path:"wait"},
            {name:"国内票房榜",path:"ticket"}]
        }
    },
components:{
    category,
    catitem
},
activated(){
      this.$router.push(this.path)
      console.log(this.path);
   },
beforeRouteLeave(to,from,next){
     this.path=this.$route.path
     console.log(this.path);
     next()
   }
}
</script>

<style>

</style>