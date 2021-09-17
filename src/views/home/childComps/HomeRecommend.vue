<template>
  <div class="recommend">
      <div v-for="(item,index) in recommends" 
      :key="index"
      class="recommend-item">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </div>
    </div>
</template>

<script>
export default {
     name:"HomeRecommend",
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    },
}
</script>

<style lang="less" scoped>
    .recommend{
        display: flex;
        width: 100%;
       text-align: center;
       font-size: 12px;
       padding: 15px 0 30px 0;
       border-bottom: 8px solid #eee;
       background-color: var(--color-background);
    }
    .recommend-item{
        flex: 1;
    }
    .recommend-item img{
        width: 70px;
        height: 70px;
        margin-bottom: 10px;
    }
</style>>

