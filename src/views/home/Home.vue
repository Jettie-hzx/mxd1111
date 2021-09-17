<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>购物街</template>
    </nav-bar>
    <tab-control :titles="titles" 
    @itemClick="changeGoods" ref="tabControl1"
    v-show="isTabShow" class="deceitTap"></tab-control>
    <!-- <di-gui :list="list"></di-gui> -->
    <scroll
      class="home-scroll"
      ref="scroll"
      :probeType="3"
      pullUpLoad
      @pullingUp="loadMore"
      @scroll="contentScroll"
    >
      <home-swiper :banners="banners" @homeSwiperLoad="homeSwiperLoad"/>
      <home-recommend :recommends="recommends"></home-recommend>
      <feature-view></feature-view>
      <transition name="fade">
        <tab-control :titles="titles" @itemClick="changeGoods" ref="tabControl2"
        ></tab-control>
      </transition>
      <goods-list :goodsList="goodsList" />
    </scroll>
    <back-top v-show="isBackShow" 
    @click.native="backTop"/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
//import Scroll from "components/common/scroll/Scroll.vue";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import BackTop from "components/content/backTop/BackTop.vue";

import HomeSwiper from "./childComps/HomeSwiper.vue";
import HomeRecommend from "./childComps/HomeRecommend.vue";
import FeatureView from "./childComps/FeatureView.vue";
//import DiGui from "./childComps/DiGui.vue";
import { getHomeMuitidata, getHomeGoods } from "network/home";

//import { throttle } from "common/util";

export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,
    GoodsList,
    BackTop,
    //Scroll,
    HomeSwiper,
    HomeRecommend,
    FeatureView,

    //DiGui,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isTabShow:false,
      isBackShow: false,
      tabOffsetTop:0
    };
  },
  created() {
    // this.throttleScroll=throttle(function(p){
    //   console.log(p);
    // },1000)
    this.getHomeMuitidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
 
  methods: {
    changeGoods(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex=index
      this.$refs.tabControl2.currentIndex=index
    },
    // contentScroll:function(y){
    //   console.log(y);
    // },
   
    contentScroll(position){
      // return throttle(function(){
      //   console.log(position);
      // },1000)(position)
      //console.log(this.tabOffsetTop);
      this.isBackShow=Math.abs(position.y)>1000
      this.isTabShow=(-position.y)>= this.tabOffsetTop - 44
      //console.log(position.y);
      //console.log(this.$refs.tabControl1.$el.offsetTop);
    },
    backTop(){
     this.$refs.scroll.scrollTo(0,0,500)
    },
    async loadMore(){
      this.$loading.show()
     await this.getHomeGoods(this.currentType)
     this.$loading.hide()
     this.$refs.scroll.finishPullUp()
    },
    homeSwiperLoad(){
      //this.$refs.scroll.refresh();
      this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop
    },
    //请求数据的方法
    async getHomeMuitidata() {
      const { data } = await getHomeMuitidata();
      this.banners = data.banner.list;
      this.recommends = data.recommend.list;
    },
    async getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      const { data } = await getHomeGoods(type, page);
      this.goods[type].list.push(...data.list);
      this.goods[type].page++;
      //console.log(data);
    },
  },
  computed: {
    //收集会发生更新的页面数据
    changeData() {
      const { banners, recommends, goodsList } = this;
      return {
        banners,
        recommends,
        goodsList,
      };
    },
    goodsList() {
      return this.goods[this.currentType].list;
    },
   
  },
  watch: {
    //监视页面数据更新，及时refresh scroll组件
    changeData: {
      deep: true,
      //immediate:true,
      handler() {
        this.$nextTick(() => {
          this.$refs.scroll.refresh();
        });
      },
    },
  },
};
</script>

<style lang="less" scoped>
#home {
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 600;
  // position: fixed;
  // top: 0;
  // left: 0;
  // right: 0;
  // z-index: 9;
}
.home-scroll {
  overflow: hidden;
  height: calc(100% - 93px);
}
.deceitTap{
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  z-index: 999;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter,
.fade-leave {
  opacity: 0;
}
</style>>