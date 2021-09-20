<template>
  <div>
      <cart-list-item v-for="item in cartList" :key="item.iid" :cart-item="item"/>
  </div>
</template>

<script>
import CartListItem from "./CartListItem.vue"

import {mapGetters} from "vuex"
export default {
    name:"CartList",
    components:{
        CartListItem
    },
    computed:{
        ...mapGetters(["cartList"])
    }
}
</script>

<style lang="less" scoped>

</style>>
