<template>
  <div class="hotitem" @click="gohotitem">
    <slot name="rank">    </slot>
    <slot name="image">   </slot>
    <slot name="message"> </slot>
    <slot name="ticket">  </slot>
  </div>
</template>

<script>
export default {
  props:{
    address:{
      type:String
    },
    id:{
      type:Number
    }
  },
methods:{
  gohotitem(){
    this.$router.push({
      name:"detail",
      query:{
        id:this.id,
       address:this.address
      }
     
    })
  }
}
}

</script>

<style>
.hotitem{
    height: 300px;
    margin-bottom: 25px;
}
</style>