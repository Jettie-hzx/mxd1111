<template>
  <swiper>
      <swiper-item v-for="item in banners" :key="item.acm">
        <a :href="item.link">
          <img :src="item.image" :alt="item.title" @load="imgLoad">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from "components/common/swiper"
export default {
    name:"HomeSwiper",
    props:{
        banners:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        Swiper,
        SwiperItem
    },
    methods:{
      imgLoad(){
        this.$emit("homeSwiperLoad")
      }
    }
}
</script>

<style lang="less" scoped>

</style>>

