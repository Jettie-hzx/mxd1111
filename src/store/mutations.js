import {
    ADD_COUNTER,
    ADD_TO_CART
} from "./mutation-types"
export default {
    //mutations唯一目的就是修改state中的状态
    //mutations中的每个方法尽可能完成的事情比较单一
    [ADD_COUNTER](state,payload){
      payload.count++
      //localStorage.setItem("product",JSON.stringify(state.cartList))
    },
    [ADD_TO_CART](state,payload){
      state.cartList.push(payload)
      //localStorage.setItem("product",JSON.stringify(state.cartList))
    },
    checkClick(state,payload){
     const product=state.cartList.find(item=>item.iid===payload)
      product.isChecked=!product.isChecked
    },
    checkAllClick(state,payload){
      state.cartList.forEach(item=>item.isChecked=!payload)
    }
  }