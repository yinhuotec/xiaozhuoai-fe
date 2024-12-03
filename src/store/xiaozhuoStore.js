import { defineStore } from 'pinia'
import axios from "axios";

export const useXiaozhuoStore = defineStore(
    'xiaozhuoStore',
    {
        state: () => ({
            //定义数据的地方
            modulePath: "https://www.yinhuotec.cn/api/chat",
            orContent: ''
        }),
        getters: {
            //获取计算属性的地方
            orContentData : state => state.orContent
        },
        actions:{
             //写方法的地方
             //聊天方法
            async chat(text){
              const res = await axios.post(this.modulePath,{text:text},{
                  headers:{
                      'Content-Type':'application/json'
                  }
              }).then(res=>{
                  //res.data 是一直整个响应 所以res.data.data就是响应结果json字符串
                  //但是json字符串不能以 java中 xxx.xxx获取它的属性值,所以我们先要把他转换成一个对象
                  let jsonString = res.data.data
                  const content = jsonString.choices[0].message.content
                  this.orContent = content
              })
            }
        }
}
)
