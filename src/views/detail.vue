<template>
 <div class="detail">
   <div class="banner">
    <div class="banner_image">
  <img style="width:100%;height:100%" :src="require('../'+list.movie_poster)" alt="">
    </div>
   <div class="detail_message">  <h2 style="font-size:30px;color:tomato" >{{list.movie_name}}</h2>
   <p style="margin-top:10px">{{list.type_label}}</p>
   <div style="margin-top:10px"><span>大陆</span>/<span>{{list.movie_duration}}</span>分钟</div>
   <div style="margin-top:10px"><span>{{list.movie_release_date.slice(0,-8)}}</span>中国大陆上映</div>
   </div>

   
   <button class="talk_btn"><span class="iconfont icon-shoucang" style="margin-right:10px ;font-size:20px"></span>评论</button>
   <div class="movie_message">
     <div class="pingfeng" style="position:absolute;left:70px;top:30px ; color:white;">
     <span class="iconfont icon-shoucang" style="font-size:22px ;margin-left:8px"></span>
         <span class="iconfont icon-shoucang" style="font-size:22px;margin-left:8px"></span>
             <span class="iconfont icon-shoucang" style="font-size:22px;margin-left:8px"></span>
                 <span class="iconfont icon-shoucang" style="font-size:22px;margin-left:8px"></span>
                     <span class="iconfont icon-shoucang" style="font-size:22px;margin-left:8px"></span>
     </div>
    <div class="koubei">
      <p style="font-size:18px">电影口碑</p>
      <p style="font-size:35px ;color:orange" >0</p>
      <p style="font-size:18px">票房</p>
      <p style="color:orange ;margin-top:5px"><span style="font-size:35px">840.00</span>万</p>
    </div>
   </div>
   </div>
   <div class="clear"></div>
   <div class="middle">
     <div class="introducee">介绍</div>
   </div>
   <div class="jj">
     <span style=" color:orange;line-height:25px;float:left;font-size:40px;margin-right:5px">·</span><span style="float:left;" >剧情简介</span>
      <div class="clear"></div>
      <span>{{list.movie_description}}</span>
      <br>
      <br>
       <span style=" color:orange;line-height:25px;float:left;font-size:40px;margin-right:5px">·</span><span style="float:left;" >演职人员</span>
      <div class="clear"></div>
      <span>暂无人员信息</span>
      <br>
      <br>
       <span style=" color:orange;line-height:25px;float:left;font-size:40px;margin-right:5px">·</span><span style="float:left;" >图集</span>
      <div class="clear"></div>
      <img style="margin-right:15px" v-for="(item,index) in image" :key="index" :src="require('../'+item.image)" alt="">
      
   </div>

   
 </div>

</template>
<script>
export default {
  name:"detail",
data(){
return{
    list:[],
    image:[]
}
},
activated(){
  console.log(this.$route.query.address);
   this.$axios.get(this.$route.query.address).then((response)=>{
        this.list=response.data.filter((item)=>item.id==this.$route.query.id)[0]
        console.log(this.list);
      })
        this.$axios.get('movies_detail_image').then((response)=>{
        this.image=response.data
        console.log(this.image);
      })
},
// beforeRouteUpdate(to, from, next) {
//      console.log(this.$route.params.api);
//    this.$axios.get(this.$route.params.api).then((response)=>{
//        console.log(this.$route.params.id);
//        console.log(666);
//         this.list=response.data.filter((item)=>item.id==this.$route.params.id)[0]
//         console.log(this.list);
//       })
//       next()
// }
}
</script>
<style>
.jj{

  line-height: 30px;

    margin: 10px 200px;
}
@import "../iconfont/iconfont.css";
.clear{
  clear: both;
}
.middle{
  height: 60px;
   margin: 10px 200px;
   border-bottom: 2px solid #ccc;
}
.introducee{
  font-size: 20px;
   color: orangered;
   border-bottom: 3px solid orangered;
  width: 100px;
  height: 60px;
  text-align: center;
  line-height: 60px;
}
.movie_message{
  position: relative;
  margin-top:200px ;
  margin-left: 150px;
 width: 250px;
 height: 200px;
 float: left;

}
.talk_btn{
  color: orange;
  outline: none;
  font-size: 15px; 
  position: absolute;
  top:300px ;
  left: 400px;
  width: 120px;
  height: 50px;
  list-style: 50px;
  background:white ;
  border: 1px solid orange;
  border-radius: 10px;
}
.detail_message{
  margin: 55px 35px;
  width: 200px;
  height: 200px;
  float: left
  ;
}
.banner_image{
  float: left;
  height: 400px;
  width:350px;
  margin:25px 0;
  background: red;
}
.banner{
  position: relative;
  margin: 10px 200px;
  height: 450px;
background:linear-gradient(to right,white,rgba(255,99,71,0.3) );
}
</style>