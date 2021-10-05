<template>
  <div>
    <grid :cols="3" :h-padding="20" :line-space="15">
      <div v-for="(item, index) in subCateList" :key="index" class="item">
        <a :href="item.link">
          <img class="item-img" 
          :src="item.image" alt=""
          @load="cateLoad" />
          <div class="item-text">{{ item.title }}</div>
        </a>
      </div>
    </grid>
  </div>
</template>

<script>
import Grid from "components/common/grid/Grid.vue";
export default {
  name: "CategoryShow",
  components: { Grid },
  props: {
    subCateList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods:{
      cateLoad(){
          this.$emit("cateLoad")
      }
  }
};
</script>

<style lang="less" scoped>
   .item{
       text-align: center;
       font-size: 12px;
   }
   .item-img{
       width: 80%;
   }
   .item-text{
       margin-top: 10px;
   }
</style>>
 
