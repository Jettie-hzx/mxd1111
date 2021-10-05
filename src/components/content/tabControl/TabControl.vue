<template>
  <div class="tab-control">
      <div v-for="(item,index) in titles" 
      :key="index"
      class="tab-control-item"
      :class="{active:currentIndex==index}"
      @click="itemClick(index)">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name:'TabControl',
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            currentIndex:0
        }
    },
    methods:{
        itemClick(index){
            if(this.currentIndex===index) return
            this.currentIndex=index
            this.$emit('itemClick',index)
        }
    }
}
</script>

<style lang="less" scoped>
    .tab-control{
        width: 100%;
        display: flex;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        text-align: center;
        background-color: var(--color-background);
        box-sizing: border-box;
    }
    .tab-control-item{
        flex: 1;
    }
    .tab-control-item span{
       padding:5px;
    }
    .active{
        color: var(--color-high-text);
        
    }
    .active span{
        border-bottom: 3px solid var(--color-high-text);
    }
</style>>

