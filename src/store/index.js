import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import mutations from "./mutations"
import actions from "./actions"
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)
const state = {
  cartList:[]
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  plugins:[
    createPersistedState({
      storage:localStorage,
      key:"product",
      render(state){
        return {...state}
      }
    })
  ],
  modules: {
  }
})
