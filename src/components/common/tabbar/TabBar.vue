<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
  
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    #tab-bar{
        display: flex;
       background-color: #fefefe;
        position: fixed;
        left: 0;
        right: 0;
        bottom: -2px;
        height: 49px;
        
    }
</style>>

