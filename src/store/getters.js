export default {
    // getProduct(state){
    //   localStorage.getItem("product")?
    //   state.cartList=JSON.parse(localStorage.getItem("product")):""
    //   return state.cartList
    // },
    cartList(state){
      return state.cartList
    },
    cartLength(state){
        return state.cartList.length
    }
  }