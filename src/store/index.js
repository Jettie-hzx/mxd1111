import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList:[]
  },
  mutations: {
    addCart(state,payload){
      let oldProduct=null
      for(let item of state.cartList){
        if(item.iid==payload.iid){
          oldProduct=payload
        }
      }
      if(oldProduct){
        oldProduct.count++
      }else{
        payload.count=1
        state.cartList.push(payload)
        
      }
      localStorage.setItem("product",JSON.stringify(state.cartList))
     
    }
  },
  actions: {
    
  },
  modules: {
  }
})
