<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon" @click="toggleCollect" ref="collect"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
import {debounce} from "common/util"
export default {
  name: "DetailBottomBar",
  data(){
      return {
          isCollect:false
      }
  },
  methods:{
      addToCart:debounce(function(){
          this.$emit("addToCart")
      },1000,true),
       
      
      toggleCollect(){
          this.isCollect=!this.isCollect
          this.$refs.collect.classList.toggle("collect")
           
        //   if(this.isCollect){
        //     //   this.$refs.collect.setAttribute("class","icon collect")
        //     this.$refs.collect.classList.add("collect")
        //   }else{
        //       this.$refs.collect.classList.remove("collect")
        //   }
      }
  }
};
</script>

<style lang="less" scoped>
.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  height: 50px;
  display: flex;
  text-align: center;
  border-top: 1px solid #666;
}
.bar-item {
  flex: 1;
  display: flex;
  div {
    flex: 1;
  }
}
.bar-left {
  .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 6px auto 0;
    background: url("~assets/img/detail/detail_bottom.png") 0 0 no-repeat;
    background-size: cover;
    //background-size:100%;
  }
  .service{
      background-position: 0 -52px;
  }
  .shop{
      background-position: 0 -100px;
  }
  .collect{
      background-position: 0 -26px;
  }
  .text {
    font-size: 12px;
  }
}
.bar-right{
    font-size: 14px;
    line-height: 50px;
    .cart{
        background-color: #ffe817;
    }
    .buy{
        background-color: #ff6699;
        color: #fff;
    }
}
</style>>

