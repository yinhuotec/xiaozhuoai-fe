import { defineStore } from "pinia";
import axios from "axios";

export const useXiaozhuoStore = defineStore({
    id:"XiaozhuoStore",
    state:()=>({
        // modulepath: "http://118.31.58.215:8888/api/chat",
        modulepath: "http://localhost:8888/api/chat",
        cachinglist: [],
        orContent: ''
    }),
    getters: {
        cachinglistData: state => state.cachinglist,
        orContentData: state => state.orContent
    },
    actions: {
        // 发送聊天请求
        async chat(text){
          const res = await axios.post(this.modulepath , {text:text} ,{
              headers: {
                  'Content-Type': 'application/json'
              }
              }
          ).then(res=>{
              if(res.data.code !== "200"){
                  console.log("系统内部异常")
              }else {
                  console.log("响应成功")
              }
              let jsonData = res.data.data
              const parseJsonData = JSON.parse(jsonData)
              const content = parseJsonData.choices[0].message.content
              this.orContent = content
              console.log(content)
          })
        }

    }
})
