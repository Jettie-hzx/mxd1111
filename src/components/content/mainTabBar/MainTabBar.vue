<template>
    <div>
        <tab-bar>
            <tab-bar-item path="/home" >
                <img src="~assets/img/tabbar/home.svg" slot="item-icon">
                <img src="~assets/img/tabbar/home_active.svg" slot="item-icon-active">
                <div slot="item-text">首页</div>
            </tab-bar-item>

            <tab-bar-item path="/category">
            <img src="~assets/img/tabbar/category.svg" slot="item-icon">
                <img src="~assets/img/tabbar/category_active.svg" slot="item-icon-active">
                <div slot="item-text">分类</div>
            </tab-bar-item>

            <tab-bar-item path="/cart">
            <img src="~assets/img/tabbar/shopcart.svg" slot="item-icon">
                <img src="~assets/img/tabbar/shopcart_active.svg" slot="item-icon-active">
                <div slot="item-text">购物车</div>
            </tab-bar-item>

            <tab-bar-item path="/profile">
            <img src="~assets/img/tabbar/profile.svg" slot="item-icon">
                <img src="~assets/img/tabbar/profile_active.svg" slot="item-icon-active">
                <div slot="item-text">个人</div>
            </tab-bar-item>
        </tab-bar>
    </div>
    
</template>

<script>
import TabBar from "../../common/tabbar/TabBar.vue"
import TabBarItem from "../../common/tabbar/TabBarItem.vue"
export default {
    name:"MainTabBar",
    components:{
        TabBar,
        TabBarItem
    }
}
</script>

<style lang="less" scoped>

</style>>

