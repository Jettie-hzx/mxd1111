import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "assets/css/base.css"
import Scroll from "components/common/scroll/Scroll.vue";
import loading from "components/common/loading"
import toast from "components/common/toast"
Vue.config.productionTip = false
Vue.component(Scroll.name,Scroll)
Vue.use(loading).use(toast)
Vue.prototype.$bus=new Vue()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
