<template>
  <div class="loading" v-show="isLoading">
      <div v-for="(item,index) in 3" :key="index" 
      class="dots" :class="{active:currentIndex==index}"></div>
  </div>
</template>

<script>
export default {
    name:"loading",
    data(){
        return{
            currentIndex:0,
            isLoading:false
        }
    },
    mounted(){
        setInterval(()=>{
            this.currentIndex=++this.currentIndex%3
        },400)
    },
    methods:{
        show(){
            this.isLoading=true
        },
        hide(){
            this.isLoading=false
        }
    }
}
</script>

<style lang="less" scoped>
    .loading{
        display: flex;
        position: fixed;
        bottom: 50px;
        left: 0;
        right: 0;
        justify-content: center;
        .dots{
            width: 8px;
            height: 8px;
            border-radius: 50%;
            margin: 0 4px;
            background-color: #fff;
        }
        .active{
        background-color: #666;
    }
    }
    
</style>>

