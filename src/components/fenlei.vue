<template>
  <div class="flitem" @click="itemclick" :class={red:isred}>
      <slot></slot>
  </div>
</template>

<script>
export default {
    props:{
       path:{
           type:String
       }
    },
    methods:{
        itemclick(){
            if(this.path=="/bangdan"){
                 this.$router.push("/bangdan/hot")
                 return
            }
            this.$router.push(this.path)
        }
    },
computed:{
    isred(){
       return this.$route.path.indexOf(this.path)!==-1
    }
}}
</script>

<style>
.red{
    color: red;
    border-bottom: 3px solid red;
}
.flitem{
    float: left;
    text-align: center;
    height: 50px;
    width: 100px;
    line-height: 50px;
}
</style>