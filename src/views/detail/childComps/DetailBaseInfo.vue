<template>
  <div class="goods-base" 
  v-if="Object.keys(goods).length !== 0">
      <div class="goods-title">{{goods.title}}</div>
      <div class="goods-price">
        <span class="new-price">{{goods.newPrice}}</span>
        <span class="old-price">{{goods.oldPrice}}</span>
        <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
      </div>
      <div class="goods-other">
        <span v-for="(item,index) in goods.columns" :key="index">{{item}}</span>
      </div>
      <div class="goods-service">
        <div class="goods-service-item"
        v-for="index in goods.services.length-1" :key="index">
            <img :src="goods.services[index-1].icon" 
           v-if="goods.services[index-1].icon" >
            <span>{{goods.services[index-1].name}}</span>
            
        </div>
        
      </div>
  </div>
</template>

<script>
export default {
    name:"DetailBaseInfo",
    props:{
      goods:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    
}
</script>

<style lang="less" scoped>
    .goods-base{
      background-color: #fff;
      color: #999;
      padding: 10px 8px;
      margin-bottom: 8px;
      .goods-title{
        color: #222;
        text-indent: 2rem;
      }
      .goods-price{
        margin: 5px 0 18px;
        .new-price{
          color: var(--color-high-text);
          font-weight: 500;
        }
        .old-price{
          text-decoration: line-through;
          font-size: 12px;
          margin: 0 5px;
        }
        .discount{
          padding: 2px 9px;
          background-color:var(--color-high-text);
          color: #fff;
          border-radius: 5px;
          
        }
      }
      .goods-other{
        display: flex;
        font-size: 12px;
        justify-content: space-between;
        border-bottom: 1px solid rgba(100,100,100,.1);
        //color: #666;
        line-height: 30px;
      }
      .goods-service{
        display: flex;
        justify-content: space-between;
        padding: 15px 0;
        .goods-service-item{
          img{
            width: 12px;
            height: 12px;
          }
          span{
            font-size: 12px;
            color: #666;

          }
        }
      }
    }
</style>>

