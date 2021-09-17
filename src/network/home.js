import { request } from "./request"
export function getHomeMuitidata(){
    return request({
        method:"get",
        url:'/home/multidata',

    })
}
export function getHomeGoods(type,page=1){
    return request({
        method:"get",
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}