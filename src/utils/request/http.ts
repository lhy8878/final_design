import axios from "axios";
// import {ElMessage} from "element-plus";
// import { useUserStore } from '@/stores/user'
// import router from "@/router";



const instance = axios.create({
    baseURL: "http://127.0.0.1:8081",
    timeout: 3000
})

//axios请求拦截器
instance.interceptors.request.use(config => {
    // const userStore = useUserStore()
    // const token = userStore.userInfo.token
    // if(token){
    //     config.headers.Authorization = `Bearer ${token}`
    // }
    return config
}, e => Promise.reject(e))

//axios响应拦截器
instance.interceptors.response.use(res => res.data, e => {
    // const userStore = useUserStore()
    // ElMessage({ type: 'warning', message: e.response.data.message })
    if(e.response.status === 401){
        // userStore.clearUser()
        router.replace('/login')
    }
    return Promise.reject(e)
})

export const $get = async(url:string, params?:object ) => {
    return await instance.get(url, {params})
}
export const $post = async(url:string, params?:object ) => {
    return await instance.post(url, params)
}
export const $postData = async(url:string, params?:object ) => {
    return await instance.post(url, params)
}
export const $login = async(url:string, user?:object ) => {
    return await instance.post(url, user)
}
export const $put = async(url:string, params?:object ) => {
    return await instance.put(url, {params})
}
export const $delete = async(url:string, params?:Array<string> ) => {
    return await instance.delete(url, {data: {ids: params}})
}

// export default instance
