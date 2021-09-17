<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    
    <main-tab-bar v-show="$route.meta.showTabbar"></main-tab-bar>
  </div>
  
</template>

<script>
import MainTabBar from 'components/content/mainTabBar/MainTabBar.vue'
export default {
  name:"APP",
  components:{
    MainTabBar
  }
}
</script>

<style lang="less" scoped>

</style>>

