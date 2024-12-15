import { defineStore } from 'pinia'
import axios from "@/axios/axios.js";

export const useXiaozhuoStore = defineStore(
    'xiaozhuoStore',
    {
        state: () => ({
            //定义数据的地方
            // modulePath: "https://www.yinhuotec.cn/api/chat",
            orContent: '',
            base64Image: ''
        }),
        getters: {
            //获取计算属性的地方
            orContentData : state => state.orContent,
            base64ImageData : state => state.base64Image
        },
        actions:{
             //写方法的地方
             //聊天方法
            async chat(text){
                const path = "/chat"
              const res = await axios.post(path,{text:text},{
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
            },
            //文生图
            async wordToPicture(content){
                const path = "/wordToPicture"
                const res = await axios.post(path,{content:content},{
                    headers:{
                        'Content-Type':'application/json'
                    }
                }).then(res =>{
                    let base64 = res.data.payload.choices.text[0].content
                    let base64_Image = 'data:image/png;base64,'+base64;
                    this.base64Image = base64_Image
                    // //将64为编码转换为图片
                    // let binaryData = atob(base64);
                    // let arrayBuffer = new ArrayBuffer(binaryData.length);
                    // let uint8Array = new Uint8Array(arrayBuffer);
                    // for(let i =0 ;i<binaryData.length;i++){
                    //     uint8Array[i] = binaryData.charCodeAt(i);
                    // }
                    // let blob = new Blob([uint8Array],{type:'image/png'});
                    // let url = URL.createObjectURL(blob)
                })
            }
        }
}
)
