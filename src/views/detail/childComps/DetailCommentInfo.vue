<template>
  <div
    v-if="isReady"
    class="comment-info"
  >
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">
        更多
        <i class="arrow-right"></i>
      </div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt="" 
      />
      <span>{{ commentInfo.user.uname }}</span>
    </div>
    <div class="info-detail">
      <p>{{ commentInfo.content }}</p>
      <div class="info-other">
        <span class="data">{{ date }}</span>
        <span>{{ commentInfo.style }}</span>
      </div>
      <div class="info-imgs" >
        <img
          :src="item"
          v-for="(item, index) in commentInfo.images"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
//import {formatDate} from 'common/util'
import dayjs from "dayjs"
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data(){
    return{
      isReady:false
    }
  },
  created(){
    //解决一开始子组件创建成功，但父组件赋值操作未完成，传给
    //子组件的对象为空，获取对象里面属性控制台报错的问题
    //因为父组件是通过网络请求进行赋值，是异步操作
    const timer=setInterval(()=>{
      if(Object.keys(this.commentInfo).length){
        this.isReady=true
        
      }
     
    },200)
    setTimeout(()=>{
      clearInterval(timer)
      this.$emit("commentFinish")
    },601)
  },
  computed: {
    date() {
      // 1.将时间戳转化成Date对象
      //const date = new Date( this.commentInfo.created * 1000)
      return dayjs(this.commentInfo.created * 1000).format('YYYY-MM-DD')
      // return formatDate(date, 'yyyy-MM-dd')
    }
  },
};
</script>

<style scoped>
.comment-info {
  padding: 5px 12px;
  color: #333;
  border-bottom: 5px solid #f2f5f8;
  background-color: #fff;
}
.info-header {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.header-title {
  float: left;
  font-size: 15px;
}
.header-more {
  float: right;
  margin-right: 10px;
  font-size: 13px;
}

.info-user {
  padding: 10px 0 5px;
}
.info-user img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
}
.info-user span {
  position: relative;
  font-size: 15px;
  top: -15px;
  margin-left: 10px;
}

.info-detail {
  padding: 0 5px 15px;
}
.info-detail p {
  font-size: 14px;
  color: #777;
  line-height: 1.5;
}
.info-detail .info-other {
  font-size: 12px;
  color: #999;
  margin-top: 10px;
}
.info-detail .data {
  margin-right: 8px;
}
.info-imgs img {
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>