//防抖函数
/**
 * 
 * @param {String} fn 
 * @param {Number} delay 
 * @returns 
 */
export function debounce(fn,delay=1000,immediate){
    let timer=null;
    let count=0;
    return function(...args){
      
        if(timer) clearTimeout(timer)
        if(immediate){
          if(!count){
            fn.apply(this,args)
            count++
            timer=setTimeout(() => {
              count=0
            }, delay);
          }else{
            count++
            timer=setTimeout(() => {
              fn.apply(this,args)
              count=0
              timer=null
            }, delay);
          }
        }else{
          timer=setTimeout(() => {
            fn.apply(this,args)
            timer=null
          }, delay);
        }
        // if(immediate){
        //   //console.log(timer);
        //   let canRun=!timer
        //   timer=setTimeout(() => {
        //     timer=null
            
        //   }, delay);
        //   if(canRun) fn.apply(this,args)
        // }else{
        //   timer=setTimeout(() => {
        //     timer=null
        //     fn.apply(this,args)
        // }, delay);
        // }
        
    }
}

//节流函数
/**
 * 
 * @param {String} fn 函数
 * @param {Number} delay 延时时间
 * @returns 
 */
export function throttle(fn,delay=100){
    let flag=true;
    //let args=arguments
    return function(...args){
        if(!flag) return
        
        flag=false
        setTimeout(() => {
            fn.apply(fn,args)
            //this[fn](args);
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
  export function padLeftZero (str) {
    return ('00' + str).substr(str.length);
  }
  // 去除对象中某个属性的方法
  export function exclude(keys) {
    return function excluded(obj) {
        return Object.keys(obj).reduce((res, k) => {
                if(!keys.includes(k)) res[k] = obj[k];
                return res;
        }, {})
    }
}