import Loading from "./Loading"
const obj={}

obj.install=function(Vue) {
    const loadingConstructor=Vue.extend(Loading)

    const loading=new loadingConstructor()

    loading.$mount(document.createElement('div'))

    document.body.appendChild(loading.$el)

    Vue.prototype.$loading=loading
}
export default obj