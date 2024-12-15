import axios from "axios";
import {defineStore} from "pinia";
import router from "@/router/router.js";
import {ElMessage} from "element-plus";

export const useUserStore = defineStore(
    "userStore",
    {
        state:()=>({
                // modulePath:"https://www.yinhuotec.cn/api/user",
                codeData:"",
                nicknameData:""
        }),
        getters:{
            xiaoZhuoCode: state => state.codeData,
            nickname: state => state.nicknameData
        },
        actions:{
            //修改用户昵称
            async modifyNickname(form){
                const path = "/user/updateNickname"
                await axios.post(path,{
                    nickname:form.name,
                    code:form.code
                }).then(res => {
                    if (res.data.code === "200") {
                        ElMessage({
                            message: '修改成功',
                            type: 'success',
                        })
                    } else {
                        ElMessage({
                            message: '系统内部异常',
                            type: 'error',
                        })
                    }

                })
            },
                //从accessToken中解析小卓号
              async getCodeFromAccessToken(accessToken){
                        if(accessToken === undefined || accessToken === null){
                        }else{
                                const parts = accessToken.split('.');
                                //获取荷载
                                const payload = parts[1]
                                const decodePayload = atob(payload)
                                //将decodePayload转换成json对象
                                const parsePayload = JSON.parse(decodePayload)
                                const code = parsePayload.code
                                this.codeData = code
                                sessionStorage.setItem("code",code)
                                await this.getNikenameFromXiaozhuoConde(code)
                        }
                        },
             async getNikenameFromXiaozhuoConde(code){
                        const path = "/user/getUserInfo"
                         const res = await axios.post(path, {code:code},
                            {
                                headers:{
                                    'Content-Type':'application/json'
                                }
                            })
                         this.nicknameData = res.data.data.nickname
                         sessionStorage.setItem("nickname",res.data.data.nickname)

                }
                }

    }
)
