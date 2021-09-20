<template>
  <div class="check-button" :class="{check:isChecked}">
      <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
    name:"CheckButton",
    props:{
        isChecked:{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style lang="less" scoped>
    .check-button{
        
        border-radius: 50%;
        border:2px solid #666;
        background-color: #fff;
        overflow: hidden;
        img{
            width: 100%;
            
        }
    }
    .check{
        background-color: var(--color-high-text);
        border: 2px solid var(--color-high-text);
    }
</style>>

