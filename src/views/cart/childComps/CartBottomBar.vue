<template>
  <div class="bottom-bar">
      <div class="check-content">
          <check-button class="check-btn" :is-checked="isCheckAll" 
          @click.native="checkAllClick" />
          <span>全选</span>
      </div>
      <div class="price">
          合计: ￥{{totalPrice}}
      </div>
      <div class="settlement">
          去结算({{checkedCount}})
      </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
import CheckButton from "components/content/checkButton/CheckButton.vue"
export default {
    name:"CartBottomBar",
    components:{
        CheckButton
    },
    computed:{
        ...mapGetters(["cartList"]),
        isCheckAll(){
            return this.cartList.every(item=>item.isChecked)
        },
        checkedCount(){
            return this.cartList.filter(item=>item.isChecked).length
        },
        totalPrice(){
            let checkedList=this.cartList.filter(item=>item.isChecked)
            return checkedList.reduce((preVal,item)=>preVal+item.count*item.newPrice,0).toFixed(2)
            
        }
    },
    methods:{
        checkAllClick(){
            this.$store.commit("checkAllClick",this.isCheckAll)
        }
    }
}
</script>

<style lang="less" scoped>
    .bottom-bar{
        background-color: #eee;
        height: 34px;
        display: flex;
        align-items: center;
        position: fixed;
        bottom: 47px;
        left: 0;
        right: 0;
         font-size: 12px;
        .check-content{
            display: flex;
            width: 80px;
            align-items: center;
            padding: 0 10px;
            .check-btn{
                width: 18px;
                height: 18px;
                margin-right: 6px;
                //background-color: #eee;
            }
        }
        .price{
            flex: 1;
        }
        .settlement{
            width: 85px;
            line-height: 34px;
            text-align: center;
            color: #fff;
           
            background-color: var(--color-high-text);
        }

    }
</style>>

