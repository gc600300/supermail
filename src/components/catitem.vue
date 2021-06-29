<template>
  <div class="catitem" @click="itemclick" :class="{red:isred}">
      <slot></slot>
  </div>
</template>

<script>
export default {
    computed:{
        isred(){
            return this.$route.path.indexOf(this.path)!==-1
        }
    },
    props:{
   path:{
       type:String
   }
    },
   methods:{
       itemclick(){
             this.$router.push({
                 name:"hot",
                 params:{
                     id:this.path
                 }
               
             }) 
       }
   },
   
}
</script>

<style>
.red{
    color: red;
    border-bottom: 3px solid red;
}
.catitem{
    float: left;
    width: 110px;
    height: 50px;
    text-align: center;
}
</style>