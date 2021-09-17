<template>
  <div class="goods-list" >
      <goods-list-item v-for="(item,index) in goodsList"
      :key="index" :goodsItem="item"
      ></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue"
export default {
    name:"GoodsList",
    props:{
        goodsList:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        GoodsListItem
    }
    
}
</script>

<style lang="less" scoped>
    .goods-list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
         margin-top: 8px;
    }
</style>>

