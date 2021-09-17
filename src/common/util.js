//防抖函数
export function debounce(fn,delay=1000){
    let timer=null;
    return function(){
        if(timer) clearTimeout(timer)
        let args=arguments
        timer=setTimeout(() => {
            fn.apply(this,args)
        }, delay);
    }
}

//节流函数
export function throttle(fn,delay=100){
    let flag=true;
    
    return function(){
        if(!flag) return
        let args=arguments
        flag=false
        setTimeout(() => {
            fn.apply(fn,args)
            flag=true
            
        }, delay);
    }
}
// 时间戳转化
export function formatDate(date, fmt) {
    if(/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    };
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + '';
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
      }
    }
    return fmt;
  }
  function padLeftZero (str) {
    return ('00' + str).substr(str.length);
  }