import axios from "axios";
import {ElMessage} from "element-plus";
import app from "@/App.vue";

let VUE_APP_BASE_DEV_API = 'http://localhost:8787/api'
let VUE_APP_BASE_PRODUCT_API = "https://www.yinhuotec.cn/api"


axios.defaults.baseURL = VUE_APP_BASE_DEV_API
//axios请求拦截器
axios.interceptors.request.use(
    config=>{// 正确的请求拦截器
        let token = null;
        let url = config.url
        // url.indexOf('/newToken')==-1  如果是刷新Token的请求 不用在拦截器里面加accessToken 这个请求已经在请求头中设置accessToken，加了会覆盖
        if(localStorage.getItem('accessToken')!=null && url.indexOf('/api/newToken')==-1){
            token = localStorage.getItem('accessToken')
            config.headers['accessToken'] = token
        }

        // 加入头信息的配置
        return config // 这句没写请求会发不出去
    },
    error=>{ // 出现异常的请求拦截器
        return Promise.reject(error)
    })
// axios响应拦截器
axios.interceptors.response.use(
    async res => {
        // 判断 401状态码 自动续期
        if (res.data.code == 401 && !res.config.isRefresh) {//!res.config.isRefresh  不是刷新Token的请求才拦截 是则不拦截
            // 1.自动续期
            const res2 = await getNewToken()
            if(res2.data.code == 200){
                console.log('自动续期成功'+new Date().toLocaleString())
                // 2.更新sessionStorage里面的Token   没有这一步会死循环
                localStorage.setItem('accessToken',res2.data.token.accessToken)
                localStorage.setItem('refreshToken',res2.data.token.refreshToken)
                //3.重新发送请求
                res = await axios.request(res.config)// res.config 代表请求的所有参数（这里是上一次请求的所有参数），包括url和携带的所有数据
            }else{
                ElMessage({
                    message: '登录状态过期，请重新登录！',
                    type: 'error',
                })
            }
        }
        return res     // 将重新请求的响应作为响应返回
    },
    error=>{
        return Promise.reject(error)
    })

function getNewToken(){
    // let url = "http://localhost:8787/api/newToken"
    let url = "https://www.yinhuotec.cn/api/newToken"
    let token = null

    if(localStorage.getItem('refreshToken')!=null){
        token = localStorage.getItem('refreshToken')
    }
    return axios.post(url,{code:sessionStorage.getItem("code")},{headers:{accessToken:token},isRefresh:true})
    // 注意这里参数是accessToken:token  因为后端过滤器里面获取的是accessToken，所以要写这个，不然过滤器通不过过滤器
}

export default axios
