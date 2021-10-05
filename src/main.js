import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "assets/css/base.css"
import FastClick  from 'fastclick'
import VueLazyload from 'vue-lazyload'
import Scroll from "components/common/scroll/Scroll.vue";
import loading from "components/common/loading"
import toast from "components/common/toast"
Vue.config.productionTip = false
Vue.component(Scroll.name,Scroll)
Vue.use(loading).use(toast)
Vue.use(VueLazyload,{
  
  loading:require('./assets/img/common/placeholder.png')
})
FastClick.attach(document.body)
Vue.prototype.$bus=new Vue()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
