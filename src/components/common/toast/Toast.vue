<template>
  <div class="toast" v-if="isShow">{{message}}</div>
</template>

<script>
export default {
    name:"Toast",
    data(){
        return{
            isShow:false,
            message:""
        }
    },
    methods:{
        show(message,duration=1000){
            this.message=message
            this.isShow=true
            setTimeout(()=>{
                this.message=""
                this.isShow=false
            },duration)
        }
    }
}
</script>

<style lang="less" scoped>
    .toast{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index:99;
        border-radius: 15px;
        padding: 8px 10px;
        color: #fff;
        background-color: rgba(0,0,0,.75);
    }
</style>>

