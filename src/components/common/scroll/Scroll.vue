<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props:{
    probeType:{
      type:Number,
      default:1
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        mouseWheel: true,
        probeType:this.probeType,
        pullUpLoad:this.pullUpLoad
        //pullDownRefresh:true
        // pullUpLoad: {
        //   threshold: 50,
        // },
      });
      if(this.probeType===2||this.probeType===3){
       
        this.scroll.on("scroll",position=>this.$emit("scroll",position))
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
    refresh() {
      console.log("-------");
      this.scroll && this.scroll.refresh();
    },
    scrollTo(x,y,time){
      this.scroll &&this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll&&this.scroll.finishPullUp()
    }
  },
};
</script>

<style lang="less" scoped>
</style>>

