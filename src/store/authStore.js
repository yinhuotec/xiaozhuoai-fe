import axios from "axios";
import {defineStore} from "pinia";
import router from "@/router/router.js";
import {ElMessage} from "element-plus";

export const useAuthStore = defineStore(
    "authStore",
    {
        state:() =>({

            // modulePath: "https://www.yinhuotec.cn/api",
            tokenCode:"",
        }),
        getters:{
            getTokenCode: state => state.tokenCode
        },
        actions:{
            //检测登录状态
          async isLogin(){
              const path = "/verifyToken"
              const res = await axios.get(path)
              this.tokenCode = res.data.code
          },
            //    双token登录
          async login(captcha){
              const path = "/login"
                await axios.post(path, {
                    captcha:captcha
                },{
                        headers:{
                            'Content-Type':'application/json'
                        }
                    }
                    ).then(response =>{
                    if (response.data.code==200){
                        localStorage.setItem("accessToken",response.data.token.accessToken)
                        localStorage.setItem("refreshToken",response.data.token.refreshToken);
                        // router.push("/chat")
                        ElMessage({
                            message: '登录成功',
                            type: 'success',
                        })
                        setTimeout(()=>{
                            location.reload()
                        },500)
                    }else if(response.data.code == 500){
                        ElMessage({
                            message: '验证码错误',
                            type: 'error',
                        })
                    }
                }).catch(error => {
                    console.error(error)
                })
            },
            // 登出系统
            logout(){
              //清楚本地token
                localStorage.removeItem("accessToken")
                localStorage.removeItem("refreshToken")
                sessionStorage.removeItem("code")
                sessionStorage.removeItem("nickname")
                ElMessage({
                    message: '已退出账号',
                    type: 'success',
                })
                setTimeout(()=>{
                    location.reload()
                },500)
            }
        }
    }

)
