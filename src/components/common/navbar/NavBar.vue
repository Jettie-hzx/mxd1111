<template>
  <div class="nav-bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
    name:"NavBar"
}
</script>

<style lang="less" scoped>
    .nav-bar{
        width: 100%;
        height: 44px;
        line-height: 44px;
        text-align: center;
        display: flex;
    }
    .left,
    .right{
        width: 60px;
    }
    .center{
        flex:1;
    }
</style>>

