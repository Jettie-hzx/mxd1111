<template>
  <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
    name:"TabBarItem",
    props:{
        path:String,
        activeColor:{
            type:String,
            default:"red"
        }
    },
   
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path)!==-1
        },
        activeStyle(){
            return this.isActive?{color:this.activeColor}:{}
        }
    },
    methods:{
        itemClick(){
            if(this.$route.path!==this.path){
                this.$router.replace(this.path)
            }
            
        }
    }
}
</script>

<style lang="less" scoped>
    .tab-bar-item{
        flex: 1;
        text-align: center;
        height: 49px;
        margin-top: 3px;
        font-size: 16px;
        img{
            vertical-align: middle;
            width: 24px;
            height: 24px;
            margin-bottom: 3px;
        }
    }
    .active{
        color:red;
    }
</style>>

