<template>
  <div id="detail">
    <detail-nav-bar @tabClick="tabClick" ref="nav"/>
    <scroll
      class="detail-scroll"
      :probe-type="3"
      observeImage
      isComShow
      ref="scroll"
      @scroll="contentScroll"
    >
      <detail-swiper :topImages="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info
        :detail-info="detailInfo"
        @imageLoad="imageLoad"
        class="goods-info"
      />
      <!-- 尺码信息 -->
      <detail-param-info :param-info="paramInfo" ref="params" />
      <!-- 评论 -->
      <detail-comment-info :comment-info="commentInfo" ref="comment" 
      @commentFinish="commentFinish"/>
      <!-- 推荐 -->
      <goods-list :goods-list="recommends" ref="recommend" />
    </scroll>
    <detail-bottom-bar @addToCart="addToCart" />
 
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import GoodsList from "components/content/goods/GoodsList.vue";
import DetailBottomBar from "./childComps/DetailBottomBar.vue";

import {mapActions} from "vuex"
import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParam,
} from "network/detail";

export default {
  name: "Detail",
 
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailBottomBar,
    DetailCommentInfo,
    GoodsList,
  },
  data() {
    return {
      iid: "",
      topImages: [],
      goods: {},
      shop: {},
      paramInfo: {},
      detailInfo: {},
      commentInfo: {},
      recommends: [],
      
      themeTopY:[],
      currentIndex:0
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    this.getDetail();
    this.getRecommend();
  },
  mounted() {
    this.$nextTick(()=>{
      this.getThemeTopY=()=>{
        this.themeTopY=[];
      this.themeTopY.push(0)
      this.themeTopY.push(this.$refs.params.$el.offsetTop-44)
      this.themeTopY.push(this.$refs.comment.$el.offsetTop-44)
      this.themeTopY.push(this.$refs.recommend.$el.offsetTop-44)
      this.themeTopY.push(Number.MAX_VALUE)
      console.log(this.themeTopY);
      }
    })
  },
  methods: {
   ...mapActions(['addCart']),
    imageLoad() {
      this.$refs.scroll.refresh();
      this.getThemeTopY()
    },
    commentFinish(){
      this.getThemeTopY()
    },
    tabClick(index){
      this.$refs.scroll.scrollTo(0,-this.themeTopY[index],500)
    },
    contentScroll(position){
      const positionY=-position.y;
      const length=this.themeTopY.length
      for(let i=0;i<length-1;i++){
        if(this.currentIndex!==i&&positionY>=this.themeTopY[i]&&positionY<this.themeTopY[i+1]){
          this.currentIndex=i
          this.$refs.nav.currentIndex=this.currentIndex
          // console.log(1);
        }
      }

    },
    addToCart() {
      const product={}
      product.iid = this.iid;
      product.img = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.newPrice = this.goods.realPrice;
      //this.$store.commit("addCart",this.product)
      //.then(res=>this.$toast.show(res))
      this.addCart(product).then(res=>this.$toast.show(res))
      //this.$store.dispatch("addCart",product).then(res=>this.$toast.show(res))
    },
    async getDetail() {
      const { result: data } = await getDetail(this.iid);
      //console.log(data);
      this.topImages = data.itemInfo.topImages;
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shop = new Shop(data.shopInfo);
      this.detailInfo = data.detailInfo;
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    },
    async getRecommend() {
      const { data } = await getRecommend();
      this.recommends = data.list;
    },
  },
};
</script>

<style lang="less" scoped>
#detail {
  height: 100vh;
}
.detail-scroll {
  height: calc(100% - 94px);
  overflow: hidden;
}
</style>>

