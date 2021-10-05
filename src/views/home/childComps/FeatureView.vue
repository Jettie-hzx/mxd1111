<template>
  <div class="ferture">
    <a href="https://act.moguji.com/zzlx67">
    <img src="@/assets/img/home/recommend_bg.jpg" alt="" @load="featureViewLoad"></a>
  </div>
</template>

<script>
export default {
  name: 'FeatureView',
  methods:{
    featureViewLoad(){
      this.$emit("featureViewLoad")
    }
  }
}
</script>

<style>
  .ferture img {
    width: 100%;
  }
</style>