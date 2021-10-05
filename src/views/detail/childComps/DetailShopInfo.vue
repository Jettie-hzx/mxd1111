<template>
  <div class="shop-info">
      <div class="shop-info-top">
          <img :src="shop.shopLogo" alt="">
          <span>{{shop.name}}</span>
      </div>
      <div class="shop-info-middle">
          <div class="shop-info-left">
              <div class="total-sell total">
                  <p>{{totalSell}}</p>
                  <p>总销量</p>
              </div>
              <div class="total-goods total">
                  <p>{{shop.cFans}}</p>
                  <p>全部宝贝</p>
              </div>
          </div>
          <div class="shop-info-right">
              <ul class="shop-score">
                  <li v-for="(item,index) in shop.score" :key="index">
                      <span class="name">{{item.name}}</span>
                      <span class="score"
                      :class="item.isBetter?'high-test':'low-test'">{{item.score}}</span>
                      <span class="better" 
                      :class="item.isBetter?'high-bg':'low-bg'">{{item.isBetter?'高':'低'}}</span>
                  </li>
              </ul>
          </div>
      </div>
      <div class="shop-info-bottom">
          <div>进店逛逛</div>
      </div>
  </div>
</template>

<script>
export default {
    name:"DetailShopInfo",
    props:{
        shop:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    computed:{
        totalSell(){
            const cSells=this.shop.cSells
            if(cSells<10000) return cSells
            return (cSells/10000).toFixed(1)+"万"
        }
    }
}
</script>

<style lang="less" scoped>
    .shop-info{
        background-color: #fff;
        padding: 20px 8px;
        .shop-info-top{
            height: 40px;
            display: flex;
            align-items: center;
            img{
                width: 38px;
                height: 38px;
                border-radius: 50%;
                border: 1px solid #eee;
                
                margin-right: 8px;
            }
            span{
                color: #666;
            }
        }
        .shop-info-middle{
            margin-top: 13px;
            display: flex;
            .shop-info-left{
                flex: 1;
                border-right: 1px solid #eee;
                display: flex;
                justify-content: space-around;
                align-items: center;
                .total{
                     color: #333;
                    p:first-child{
                        font-size: 16px;
                       
                    }
                    p:last-child{
                        margin-top: 9px;
                        font-size: 12px;
                        text-align: center;
                    }
                }
            }
            .shop-info-right{
               flex: 1;
               display: flex;
               justify-content: center;
                .shop-score{
                    
                    li{
                        font-size: 12px;
                        padding: 4px 0;
                        .name{
                            color: #333;
                        }
                        .score{
                            margin: 0 5px;
                            display: inline-block;
                            width: 24px;
                        }
                        .better{
                            color: #fff;
                        }
                        .low-bg{
                            background-color: #5ea732;
                        }
                        .high-bg{
                            background-color: #f13e3a;
                        }
                        .low-test{
                           color: #5ea732;
                        }
                        .high-test{
                            color: #f13e3a;
                        }
                    }
                }
            }
        }
        .shop-info-bottom{
            margin-top: 15px;
            div{
                background-color: #f2f5f8;
                color: #666;
                border-radius: 8px;
                width: 118px;
                font-size: 12px;
                padding: 8px 0;
                text-align: center;
                margin: 0 auto;
            }
        }
    }
</style>>

