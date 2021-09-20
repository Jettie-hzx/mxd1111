<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
    <back-top v-if="isComShow&&isBackShow" 
    @click.native="backTop"/>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import {backTopMixin} from "common/mixin"
//import {throttle} from "common/util"
export default {
  name: "Scroll",
 mixins:[backTopMixin],
  props:{
    probeType:{
      type:Number,
      default:1
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    },
    isComShow:{
      type:Boolean,
      default:false
    },
    observeImage:{
      type:Boolean,
      default:false
    }
  },
  data() {
    //const throttleRefresh=throttle(this.refresh,2000)
    return {
      scroll: null,
      //throttleRefresh
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        mouseWheel: true,
        probeType:this.probeType,
        pullUpLoad:this.pullUpLoad,
        observeImage:this.observeImage,
        observeDOM:true
        //pullDownRefresh:true
        // pullUpLoad: {
        //   threshold: 50,
        // },
      });
      //const scrollThrottle=throttle(this.scrollEmit,200)
      if(this.probeType===2||this.probeType===3){
        this.scroll.on("scroll",position=>{
          this.$emit("scroll",position)
          //scrollThrottle(position)
          this.isBackShow=Math.abs(position.y)>1000
          })
        
      }
      if(this.pullUpLoad){
        this.scroll.on("pullingUp",()=>this.$emit("pullingUp"))
      }
      
    });

    // this.scroll.on('pullingUp',()=>{
    //     console.log(1);

    // })
    // this.scroll.on("pullingDown", () => {
    // console.log(1);
    // });
  },
  methods: {
    // scrollEmit(position){
    //   this.$emit("scroll",position)
    // },
    refresh() {
      console.log("我刷新了");
      this.scroll && this.scroll.refresh();
    },
    scrollTo(x,y,time){
      this.scroll &&this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll&&this.scroll.finishPullUp()
    },
    getScrollY(){
      return this.scroll?this.scroll.y : 0
    }
  },
};
</script>

<style lang="less" scoped>
</style>>

