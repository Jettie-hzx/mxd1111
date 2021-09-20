<template>
  <div id="category">
    <nav-bar class="cate-nav"> <template #center>商品分类</template>> </nav-bar>
    <div class="content">
      <scroll class="scroll tab-menu" 
      >
          <div class="tab-menu-item" :class="{active:index===currentIndex}"
           v-for="(item,index) in cateList"
           :key="index"
           @click="menuItemClick(index)">
           {{item.title}}</div>
      </scroll>

      <scroll class="scroll tab-content"
      isComShow
      :probeType="3"
      ref="scroll">
          <category-show :sub-cate-list="subCateList" @cateLoad="cateLoad" />
          <tab-control :titles="titles"
           />
          
          <goods-list :goods-list="detailCateList" />
      </scroll>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import TabControl from "components/content/tabControl/TabControl.vue"
import GoodsList from "components/content/goods/GoodsList"
import CategoryShow from "./childComps/CategoryShow.vue"

import {
  getCategory,
  getSubCategory,
  getCategoryDetail,
} from "network/category";

import {exclude,debounce} from "common/util"

export default {
  name: "Category",
  components: {
    NavBar,
    TabControl,
    GoodsList,
    CategoryShow
  },
  data(){
    return {
      currentIndex:0,
      titles:["流行","新品","销量"],
      cateList:[],
      subCateList:[],
      detailCateList:[]
    }
  },
  created() {
    this.getCategory()
    
    //getCategoryDetail("50003", "pop").then((res) => console.log(res));
  },
  computed:{
    curMaitKey(){
      return this.cateList[this.currentIndex].maitKey
    },
    curMiniWallkey(){
      return this.cateList[this.currentIndex].miniWallkey
    }
  },
  watch:{
    //监视cateList,数据改变说明getCategory()请求返回了值，再发起getSubCategory请求
    cateList(){
      this.getSubCategory(this.curMaitKey)
      //console.log(this.cateList[this.currentIndex].miniWallkey,this.curMaitKey);
      this.getCategoryDetail(this.curMiniWallkey)
    },
    // subCateList(){
    //   this.$refs.scroll.refresh()
    // }
  },
  methods:{
    menuItemClick(index){
      this.currentIndex=index
      this.subCateList=[]
      //console.log(this.curMaitKey,this.curMiniWallkey);
      this.getSubCategory(this.curMaitKey)
     this.getCategoryDetail(this.curMiniWallkey)
      this.$refs.scroll.scrollTo(0,0,0)
    },
    refresh:debounce(function(){
      
      this.$refs.scroll.refresh()
    },300),
    cateLoad(){
      
      this.refresh()
    },
    //网络请求相关
    async getCategoryDetail(miniWallkey,type="pop"){
      this.detailCateList=await getCategoryDetail(miniWallkey,type)
      
    },
    async getSubCategory(maitKey){
      const {data}=await getSubCategory(maitKey)
      //console.log(data);
      this.subCateList=data.list
    },
    async getCategory(){
      const {data}=await getCategory()
     // console.log(data);
      this.cateList=data.category.list.map(exclude(['acm']))
      
    }
  }
};
</script>

<style lang="less" scoped>
#category {
  height: 100vh;
}
.cate-nav {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 600;
}
.content {
  height: calc(100% - 93px);
  display: flex;
  .scroll {
    height: 100%;
    overflow: hidden;
  }
  .tab-menu {
    width: 85px;
    font-size: 12px;
    .tab-menu-item{
      height: 40px;
      line-height: 40px;
      text-align: center;
      //box-sizing: border-box;
    }
    .active{
      border-left: 3px solid var(--color-high-text);
      background-color: #fff;
      color: var(--color-high-text);
      font-weight: 600;
    }
  }
  .tab-content {
    flex: 1;
    background-color: #fff;
  }
}
</style>>

