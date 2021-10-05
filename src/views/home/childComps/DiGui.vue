<template>
  <div>
      <div v-for="(item,index) in list" :key="index">
        {{item.name}}
              <template v-if="item.cList">
                  <di-gui :list="item.cList"></di-gui>
              </template>
         
          
      </div>
  </div>
</template>

<script>
export default {
    name: "DiGui",
    props: {
        list:{
            type: Array,
        }
    }
}
</script>

<style lang="less" scoped>

</style>