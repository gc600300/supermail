<template>
  <div class="hot">
    <hotitem :address="getaddress" v-for="(item,index) in list " :key="index" :id="item.id" >
      <div class="rank" slot="rank" :style="isorange(index)">{{index+1}}</div>
      <div class="image"   slot="image"> <img :src="require('../'+item.movie_poster)" alt=""></div>
      <div class="message" slot="message"> <h2 style="margin-top:80px">{{item.movie_name}}</h2>
        <div style="margin-top:15px;color:#ccc">地区:<span>{{item.region_label}}</span></div> 
       <div style="margin-top:20px">上映时间: <span>{{item.create_time.slice(0,-8)}}</span>
       </div>
      </div>
      <div class="ticket"  slot="ticket">票房:<span style="font-size:30px">{{item.movie_score_num}}</span>万元</div>
    </hotitem>

  </div>
  
</template>
<script>

import hotitem from "../components/hotitem.vue"
export default {
  computed:{
    getaddress(){
      if(this.$route.path=="/bangdan/hot"){
        return this.address[0]
      }else if(this.$route.path=="/bangdan/wait"){
         return this.address[1]
      }else {
        return this.address[2]
      }
    },
    isorange(){
      return function(n){
           if(n<3){
             return 'color:white; background:orange'
           }else return 'color:white; background:gray'
      }
    }
  },
  data(){
    return {
      address:['/movies_hot','/movies_wait','/movies_top'],
      list:[]
    }
  },
components:{
  hotitem
},
created(){
if(this.$route.path=='/bangdan/hot'){
this.$axios.get(this.address[0]).then((response)=>{
        this.list=response.data
      })
}else if(this.$route.path=='/bangdan/wait'){
  console.log(this.$route.path);
  this.$axios.get(this.address[1]).then((response)=>{
        this.list=response.data
      })
}else{
  this.$axios.get(this.address[2]).then((response)=>{
        this.list=response.data
        console.log(this.list);
      })
}
},
watch:{
  $route(to,from){
if(to.path=='/bangdan/hot'){
this.$axios.get(this.address[0]).then((response)=>{
        this.list=response.data
      })
}else if(to.path=='/bangdan/wait'){
  console.log(this.$route.path);
  this.$axios.get(this.address[1]).then((response)=>{
        this.list=response.data
      })
}else{
  this.$axios.get(this.address[2]).then((response)=>{
        this.list=response.data
        console.log(this.list);
      })
}
  }
}

// beforeRouteUpdate(to,from,next){
//     console.log("11");
// if(this.$route.path=='/bangdan/hot'){
// this.$axios.get(this.address[0]).then((response)=>{
//         this.list=response.data
//       })
// }else if(this.$route.path=='/bangdan/wait'){
//   console.log(this.$route.path);
//   this.$axios.get(this.address[1]).then((response)=>{
//         this.list=response.data
//       })
// }else{
//   this.$axios.get(this.address[2]).then((response)=>{
//         this.list=response.data
//         console.log(this.list);
//       })
    
// }
  
 

}
</script>
<style>
.ticket{
  margin:100px 250px ;
  float: left;
  width: 200px;
 height: 100px;
 line-height: 100px;
 color: red;

}
.message{
  text-align: center;
  float: left;
   width: 200px;
   height: 300px;
   margin-left: 50px;
}
.image{
  float: left;
  margin-left: 50px;
  height: 300px;
  width: 200px;
  background-color: lightgreen;
}
.image img{
   height: 300px;
  width: 200px;
}
.rank{
  float: left;
  width:50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 10px;
  margin-top: 100px ;
  margin-left: 50px;

}
.hot{
  overflow: hidden;
  margin: 20px 200px;
}
</style>