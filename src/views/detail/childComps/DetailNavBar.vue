<template>
  <nav-bar class="nav-bar">
      <template #left>
          <img src="~assets/img/common/back.svg" alt="" class="back" @click="goBack">
      </template>
       <template #center>
          <span v-for="(item,index) in titles" :key="index"
          class="title" :class="{active:currentIndex==index}"
          @click="itemClick(index)">{{item}}</span>
      </template>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue"
export default {
    name:"DetailNavBar",
    components:{
        NavBar
    },
    data(){
        return {
            currentIndex:0,
            titles:["商品","参数","评论","推荐"]
        }
    },
    methods:{
        itemClick(index){
            this.currentIndex=index
            this.$emit("tabClick",index)
        },
        goBack(){
            this.$router.back()
        }
    }
}
</script>

<style lang="less" scoped>
    .nav-bar{
        background-color: #fff;
    }
    .back{
        vertical-align: middle;
    }
    .title{
        font-size: 14px;
        font-weight: 600;
        padding: 0 10px;
    }
    .active{
        color:var(--color-high-text)
    }
</style>>

