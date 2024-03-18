import {$get, $post} from "../../utils/request/http.ts";


export function $Login(params:object){
    return $post('user/login',params)
    // return $login('/login',{account:"xiaotuxian001",password:"123456"})
}
export function getLikeList(params:object){
    return $get('/goods/relevant',params)
    // return $login('/login',{account:"xiaotuxian001",password:"123456"})
}

export function getUserOrder(params:object){
    return $get('/member/order',params)
    // return $login('/login',{account:"xiaotuxian001",password:"123456"})
}


