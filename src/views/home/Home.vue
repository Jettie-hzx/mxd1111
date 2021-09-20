<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>购物街</template>
    </nav-bar>
    <tab-control
      :titles="titles"
      @itemClick="changeGoods"
      ref="tabControl1"
      v-show="isTabShow"
      class="deceitTap"
    ></tab-control>
    <!-- <di-gui :list="list"></di-gui> -->
    <scroll
      class="home-scroll"
      ref="scroll"
      :probeType="3"
      pullUpLoad
      @pullingUp="loadMore"
      @scroll="contentScroll"
    >
      <home-swiper :banners="banners" @homeSwiperLoad="tabUpImageLoad" />
      <home-recommend
        :recommends="recommends"
        @recommendLoad="tabUpImageLoad"
      />
      <feature-view @featureViewLoad="tabUpImageLoad" />
      <transition name="fade">
        <tab-control
          :titles="titles"
          @itemClick="changeGoods"
          ref="tabControl2"
        ></tab-control>
      </transition>
      <goods-list :goodsList="goodsList" />
    </scroll>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
//import Scroll from "components/common/scroll/Scroll.vue";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";

import HomeSwiper from "./childComps/HomeSwiper.vue";
import HomeRecommend from "./childComps/HomeRecommend.vue";
import FeatureView from "./childComps/FeatureView.vue";
//import DiGui from "./childComps/DiGui.vue";
import { getHomeMuitidata, getHomeGoods } from "network/home";

//import { debounce } from "common/util";

export default {
  name: "Home",

  components: {
    NavBar,
    TabControl,
    GoodsList,
    //BackTop,
    //Scroll,
    HomeSwiper,
    HomeRecommend,
    FeatureView,

    //DiGui,
  },
  data() {
    return {
      //home_swiper:0,
      banners: [],
      recommends: [],
      titles: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isTabShow: false,
      //isBackShow: false,
      tabOffsetTop: 0,
      // tabTopY: {
      //   pop: 0,
      //   new: 0,
      //   sell: 0,
      // },
      //saveY:0
    };
  },
  // filters:{
  //   cut(val){
  //     return Number(val/10000).toFixed(1)+"万"
  //   }
  // },
  created() {
    // this.throttleScroll=throttle(function(p){
    //   console.log(p);
    // },1000)
    this.getHomeMuitidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    //  setTimeout(() => {
    //    this.forceRerender()
    //  }, 400);
    //  const debounceRe=debounce(this.$refs.scroll.refresh,200)
    //  this.$bus.$on("itemImageLoad",()=>{
    //    debounceRe()
    //  })
  },
  //  activated(){
  //    this.$refs.scroll.scrollTo(0,this.saveY,0)
  //  },
  //  deactivated(){
  //    this.saveY=this.$refs.scroll.getScrollY()
  //  },
  methods: {
    //debounceRe:debounce(this.$refs.scroll.refresh,200),
    
    changeGoods(index) {
      // const cacheTopY=this.tabTopY[this.currentType]
      // const cacheType=this.currentType
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
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;

      //this.$refs.scroll.scrollTo(0, this.tabTopY[this.currentType], 0);
      //this.tabTopY[cacheType]=cacheTopY
    },
    // contentScroll:function(y){
    //   console.log(y);
    // },

    contentScroll(position) {
      //console.log(position);
      this.isTabShow = -position.y >= this.tabOffsetTop - 44;
      //console.log(position.y);
    
        // if (!this.isTabShow) {
        //  // this.$refs.scroll.refresh()
        //   for (let key in this.tabTopY) {
        //     this.tabTopY[key] = position.y;
        //   }
        // }
        // this.tabTopY[this.currentType] = position.y;
      
    },

    async loadMore() {
      this.$loading.show();
      await this.getHomeGoods(this.currentType);
      this.$loading.hide();
      this.$refs.scroll.finishPullUp();
    },
    tabUpImageLoad() {
      //this.$refs.scroll.refresh();
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      //console.log(this.tabOffsetTop);
      
    },
    // forceRerender(){
    //   this.home_swiper+=1
    // },
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
.deceitTap {
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