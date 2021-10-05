<template>
  <div class="grid-view" ref="gridView">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: "Grid",
  props: {
    //每行item的个数
    cols: {
      type: Number,
      default: 2,
    },
    //grid组件内边距
    hPadding: {
      type: Number,
      default: 8,
    },
    wPadding: {
      type: Number,
      default: 8,
    },
    //item间的水平距离
    itemSpace: {
      type: Number,
      default: 20,
    },
    //每行的距离
    lineSpace: {
      type: Number,
      default: 10,
    },
  },
  mounted() {
    this.gridLayout();
  },
  updated() {
    this.gridLayout();
  },
  methods: {
    gridLayout() {
      let gridEl = this.$refs.gridView;
      let gridItems = gridEl.children;
      gridEl.style.padding = `${this.hPadding}px ${this.wPadding}px`;
      let itemWidth =(gridEl.clientWidth -
          2 * this.wPadding -
          (this.cols ) * this.itemSpace) /
        this.cols
        
      for (let i = 0; i < gridItems.length; i++) {
        let gridItem = gridItems[i];
        gridItem.style.width = itemWidth + "px";
        gridItem.style.marginRight=this.itemSpace+"px"
        if((i+1)%this.cols===0){
            gridItem.style.marginRight=0
        }
        if (i >= this.cols) {
          gridItem.style.marginTop = this.lineSpace + "px";
        }
      }
    },
  },
};
</script>

<style>
.grid-view {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
}
</style>