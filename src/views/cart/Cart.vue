<template>
  <div id="cart">
    <nav-bar class="cart-nav">
      <template #center>购物车({{cartLength}})</template>
    </nav-bar>
    <scroll class="cart-scroll"
    :probeType="3"
    ref="scroll">
      <cart-list />
      <!-- ul>li{$}*100 -->
     
    </scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
import NavBar from "components/common/navbar/NavBar.vue"
import CartList from "./childComps/CartList.vue"
import CartBottomBar from "./childComps/CartBottomBar.vue"
import Scroll from '../../components/common/scroll/Scroll.vue'
export default {
  name:"cart",
  components:{
    NavBar,
    CartList,
    CartBottomBar,
    Scroll
  },
  computed:{
    ...mapGetters(['cartLength','cartList'])
  },
  watch:{
    cartList(){
      this.$refs.scroll.refresh()
    }
  }
}
</script>

<style lang="less" scoped>
  #cart{
    height: 100vh;
    background-color: #fff;
  }
  .cart-nav{
    background-color: var(--color-tint);
    color: #fff;
  }
  .cart-scroll{
    height: calc(100% - 125px);
    overflow: hidden;
  }
</style>>

