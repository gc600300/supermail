<template>
  <div id="top">
      <h1>游狐电影</h1>
      <div id="fenlei"><slot></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
#fenlei{
    float: left;
    margin-left: 500px;
}
#top{
    height: 50px;
    line-height: 50px;
    border-bottom: 2px solid #ccc;
}
#top h1{
    float: left;
    margin-left: 300px;
}
</style>