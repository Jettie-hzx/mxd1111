<template>
  <div class="cart-item">
      <div class="item-selector">
          <check-button class="check-btn" 
          :is-checked="cartItem.isChecked"
          @click.native="checkClick(cartItem.iid)"/>
      </div>
      <div class="cart-img">
          <img :src="cartItem.img">
      </div>
    <div class="cart-info">
        <p class="title">{{cartItem.title}}</p>
        <p class="desc">{{cartItem.desc}}</p>
        <div class="info-bottom">
            <div class="price">￥{{cartItem.newPrice}}</div>
            <div class="count">x{{cartItem.count}}</div>
        </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton.vue"
//import {mapMutations} from "vuex"
export default {
    name:"CartListItem",
    components:{CheckButton},
    props:{
        cartItem:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        //...mapMutations(["checkClick"]),
        checkClick(iid){
           this.$store.commit("checkClick",iid)
        }
    }
}
</script>

<style lang="less" scoped>
    .cart-item{
        display: flex;
        height: 94px;
        width: 100%;
        padding: 5px;
        border-bottom: 1px solid #666;
       
        .item-selector{
            width: 30px;
            display: flex;
            align-items: center;
            .check-btn{
                width: 20px;
                height: 20px;
            }
        }
        .cart-img{
           flex: 1;
            
            img{
                
               height: 100%;
                border-radius: 5px;
            }
        }
        .cart-info{
            width: 220px;
            padding: 0 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            font-size: 14px;
            color: #333;
            .title,.desc{
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .desc{
                font-size: 12px;
                color: #666;
            }
            .info-bottom{
                display: flex;
                justify-content: space-between;
                padding-right: 40px;
                .price{
                    color: var(--color-high-text);
                }
            }
        }
    }
</style>>

