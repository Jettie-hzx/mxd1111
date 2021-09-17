<template>
  <div class="goods-item" ref="goodsItem" @click="goDetail">
      <img :src="showImage" alt="">
      <div class="goods-info">
          <p class="title">{{goodsItem.title}}</p>
          <span class="price">{{goodsItem.price}}</span>
          <img :src="svgCollect" class="svgCollect">
          <span class="collect">{{goodsItem.cfav}}</span>
      </div>
  </div>
</template>

<script>
import svgCollect from "assets/img/common/collect.svg"
export default {
    name:"GoodsListItem",
    data(){
      return{
        svgCollect,
        
      }
    },
    props:{
        goodsItem:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    computed: {
    showImage () {
      return this.goodsItem.image || this.goodsItem.img ||this.goodsItem.show.img
    }
  },
    methods:{
      goDetail(){
        this.$router.push('/detail/' + this.goodsItem.iid)
      }
    },
   mounted(){
     //console.log(this.$refs.goodsItem.style);
     //console.log(parseInt('44.jp'));
   }
}
</script>

<style lang="less" scoped>
    
   .goods-item {
    position: relative;
    padding-bottom: 40px;
     width: 46%;
     
    background-color: var(--color-background);
    border-radius: 10px;
    margin-bottom: 14px;
    box-shadow: 0 0 5px #929090cf;
  }
  .goods-item img {
    width: 100%;
    height: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .goods-info {
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    //text-align: center;
    font-size: 12px;
    padding: 0 8px;
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .price {
    color: var(--color-high-text);
    padding-right: 20px;
  }
  .goods-info .svgCollect {
    width: 14px;
    height: 14px;
    vertical-align: -20%;
  }
  // .goods-info .collect::before {
  //   content: '';
  //   position: absolute;
  //   left: -15px;
  //   top: -1px;
  //   width: 14px;
  //   height: 14px;
  //   background: url(../../../assets/img/common/collect.svg) 0 0/14px 14px;
  // }
</style>>

