import axios from "axios"
export function request(config){
    const service=axios.create({
        //baseURL: 'http://152.136.185.210:7878/api/m5',
        //baseURL: 'http://123.207.32.32:8000',
       baseURL:'http://152.136.185.210:7878/api/hy66',
        timeout: 10000
    })
    service.interceptors.request.use(config=>{
        return config
    },err=>{
        return Promise.reject(err)
    })
    service.interceptors.response.use(res=>{
        return res.data
    },err=>{
        return Promise.reject(err)
    })
    return service(config)
}
