<template>
  <div id="detail">
      <detail-nav-bar/>
      <scroll class="detail-scroll"
      :probe-type="3"
      ref="scroll">
        <detail-swiper :topImages="topImages"/>
        <detail-base-info :goods="goods"/>
        <detail-shop-info :shop="shop" />
        <detail-goods-info
        :detail-info="detailInfo"
        @imageLoad="imageLoad"
        class="goods-info"
      />
      <!-- 尺码信息 -->
      <detail-param-info :param-info="paramInfo" ref="params" />
      <!-- 评论 -->
      <detail-comment-info :comment-info="commentInfo" ref="comment" />
      <!-- 推荐 -->
      <goods-list :goods-list="recommends" ref="recommend" />
      </scroll>
      
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue"
import DetailSwiper from "./childComps/DetailSwiper.vue"
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue"
import DetailShopInfo from "./childComps/DetailShopInfo.vue"
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import GoodsList from "components/content/goods/GoodsList.vue";

import {getDetail,getRecommend,Goods,Shop,GoodsParam} from "network/detail"


export default {
    name:"Detail",
    components:{
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodsInfo,
        DetailParamInfo,
        DetailCommentInfo,
        GoodsList
    },
    data(){
        return{
            iid:"",
            topImages:[],
            goods:{},
            shop:{},
            paramInfo:{},
            detailInfo:{},
            commentInfo:{},
            recommends:[]
        }
    },
    created(){
        this.iid=this.$route.params.iid
        this.getDetail()
        this.getRecommend()
    },
    mounted(){
        // setTimeout(()=>{
        //     this.$refs.scroll.refresh()
        // },500)
        
    },
    methods:{
        imageLoad(){
             this.$refs.scroll.refresh()
        },
        async getDetail(){
            const {result:data} =await getDetail(this.iid)
            console.log(data);
            this.topImages=data.itemInfo.topImages
            this.goods=new Goods(
                data.itemInfo,
                data.columns,
                data.shopInfo.services
            )
            this.shop=new Shop(data.shopInfo)
             this.detailInfo = data.detailInfo;
            this.paramInfo = new GoodsParam(
                data.itemParams.info,
                data.itemParams.rule
            );
            if(data.rate.cRate !==0){
                this.commentInfo=data.rate.list[0]
            }
        },
        async getRecommend(){
            const {data}=await getRecommend()
            this.recommends=data.list
        }
    }
}
</script>

<style lang="less" scoped>
    #detail{
        height: 100vh;
    }
    .detail-scroll{
        height: calc(100% - 44px);
        overflow: hidden;
    }
</style>>

