import BackTop from "components/content/backTop/BackTop.vue";
export const backTopMixin = {
    components:{BackTop},
    data(){
        return{
            isBackShow: false,
        }
    },
    methods:{
        backTop(){
            this.scroll &&this.scroll.scrollTo(0,0,500)
           },
    }
} 