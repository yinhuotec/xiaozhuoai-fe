<script setup>
import {onMounted, ref, watch} from "vue";
import {Promotion, Search, Top} from "@element-plus/icons-vue";
import {storeToRefs} from "pinia";
import { useXiaozhuoStore } from "@/store/xiaozhuoStore.js";
import {ElMessage} from "element-plus";
import LoginFrame from "@/components/LoginFrame.vue";

const LoginDialogVisible = ref(false);
const xiaozhuoStore = useXiaozhuoStore()
const input = ref("")
const messagelistData = ref([]);
let firstTime = true;
const login =()=>{
  LoginDialogVisible.value = true
}
 const sendMessage = async () =>{
   if(input.value===""){
     ElMessage({
       message: '请先输入信息',
       type: 'warning',
     })
   }else{
     messagelistData.value.push(input.value)
     if(firstTime){
       const orContentDiv = document.getElementById('orContentDiv');
       orContentDiv.classList.add('orContentDivHidden');
       firstTime = false
     }
     ElMessage({
       message: '小卓正在思考...请稍等',
       type: 'success',
     })
     await xiaozhuoStore.chat(input.value)
     messagelistData.value.push(orContentData.value)
     input.value= '';
   }
}
const { orContentData } = storeToRefs(useXiaozhuoStore())
const onpenElmessage=()=>{
  ElMessage({
    message: '登录之后小卓才能为您解答...',
    type: 'warning',
  })
}
</script>

<template>
  <LoginFrame v-model="LoginDialogVisible"></LoginFrame>
  <div class="body">
    <el-card class="el-card" body-style="padding:0;margin:0;">
        <el-container>
          <el-header class="header">

            <div class="logo-div">
              <el-image src="src/assets/logo.png" class="logo-img"></el-image>
              <div class="logo-font">小卓</div>
            </div>
            <div class="login">
              <el-button type="info"
                         style="background-color: black;border-radius: 10px;margin-right: 20px"
                 @click="login"
              >
                登录</el-button>
            </div>

          </el-header>
          <el-container>
            <el-aside width="18%" class="aside">
              <el-menu
                  default-active="1"
                  background-color="#f3f4f6"
              >
                  <el-menu-item index="1">
                    <span>新对话</span>
                  </el-menu-item>
                <el-menu-item @click="onpenElmessage" index="2">
                    <span>AI搜索</span>
                </el-menu-item>
                <el-menu-item @click="onpenElmessage" index="3">
                  <span>照片生成</span>
                </el-menu-item>
              </el-menu>
            </el-aside>
            <el-main class="main">
              <!--滚动区域-->
              <div class="scrolldiv">
                <el-scrollbar>
                  <div id="orContentDiv" class="orContentDiv"  v-if="messagelistData.length === 0">
                    <p class="welcometext">您好!</p>
                    <p class="welcometext">欢迎使用小卓AI.</p>

                    <div class="main-card-div" >
                      <el-card shadow="hover"  body-class="main-card1"
                            style="height: 60px;border-radius: 20px; margin-right: 10px;


                                     @media(max-width: 768px) {
                                                         width: auto;
                                                         border-radius: 20px;
                                                         margin-top: 10px;
                                                         margin-bottom: 10px;
                                                         margin-right: 0;
                                     }
                            ">
                          <div class="main-card-div2" >
                            <el-image src="src/assets/joinus.JPG" class="join-us-img"></el-image>
                            <p class="main-card-font" >
                              加入我们
                              <p class="main-card-font2">QQ群917731344</p>
                            </p>
                          </div>

                        </el-card>

                      <div style="padding-left: 5px;padding-right: 5px"></div>
                          <el-card shadow="hover"
                                   class="main-card2"
                                   style="height: 60px;
                               border-radius: 20px;
                               margin-left: 10px;
                               @media(max-width: 768px) {
                               width: auto;
                               border-radius: 20px;
                               margin-top: 10px;
                               margin-bottom: 10px;
                               margin-left: 0;
                               }">
                            <div class="main-card-div2" >
                          <el-image src="src/assets/api.JPG" class="api-img"></el-image>
                          <p class="main-card-font">
                            小卓API
                          </p>
                        </div>

                      </el-card>
                    </div>
                  </div>


                  <div v-if="messagelistData.length > 0">
                      <div v-for="(item,index) in messagelistData" :key="item">
                        <div style=
                                 "display: flex;align-items: center"
                        >

                          <div class="user-content" v-if="index%2===0">

                            <div class="user-img-div">
                              <div class="user-font">用户_ZR001</div>
                              <el-image class="user-img"  src="src/assets/user.JPG">
                              </el-image>

                            </div>

                            <pre class="pre-font">{{item}}</pre>
                          </div>

                          <div v-if="index%2!==0">
                            <div class="ai-div">
                              <el-image class="ai-div-img"  src="src/assets/ai.JPG">
                              </el-image>
                              <div class="ai-font" style="">小卓</div>
                            </div>
                            <pre class="pre-font" >{{item}}</pre>
                          </div>

                        </div>
                      </div>
                  </div>
                </el-scrollbar>
              </div>
              <el-input
                  class="el-input"
                  v-model="input"

                  :suffix-icon="Promotion"
                  style="width: 67.25%;
                  height: 7%;
                  margin-left: 16.375%;
                  "
                  @keyup.enter="sendMessage"
                  placeholder="按下ENTER发送消息" />
              <div class="bottom-text" style="margin-top: 1%">研发团队©卓软信息工作室 蜀ICP备2024111152号-1</div>

            </el-main>
          </el-container>
        </el-container>
    </el-card>
  </div>
</template>

<style scoped>
.user-content{
  margin-left: auto;
}
.logo-font{
  font-weight: bold;
}
.login{
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 15px;
}
.ai-font{
  font-size: small;font-weight: bold
}
.ai-div-img{
  height: 25px;
  width: 25px;
  padding-right: 15px
}
.ai-div{
  display: flex;
  align-items: center;
  margin-top: 5px;
  margin-right: auto;
}
.pre-font{
  margin-left: 39px
}
.user-font{
  font-size: small;
  font-weight: bold;
  margin-right: 15px;
}
.user-img{
  height: 25px;
  width: 25px;
}
.user-img-div{
  display: flex;
  align-items: center;
  margin-top: 5px;
}
.api-img{
  height: 22px;
  width: 22px;
  margin-top: -9px;
  margin-right: 5px
}
.join-us-img{
  height:22px;
  width: 22px;
  margin-top: -9px;
  margin-right: 5px
}
.main-card-div2{
  display: flex
}
.main-card-div{
  display: flex;
}
.orContentDiv{
  margin-top: 30%;
}
.scrolldiv{
  margin-left: 16.5%;
  padding: 0;
  width: 67%;
  height: 75%
}
.main{
  padding: 0;
  height: 100vh
}
pre {
  white-space: pre-wrap; /* 保留空白字符序列，但是正常地进行换行 */
  word-wrap: break-word; /* 允许长单词换行 */
}
#orContentDiv {
  transition: transform 0.2s ease-out, opacity 0.2s ease-out;
}
.orContentDivHidden {
  transform: translateY(-80px);
  opacity: 0;
}
.el-menu{
  border-right: 0;
}
.main-card1{
  border-bottom-color: #e0e0e0;

}
.main-card2{
  border-bottom-color: #e0e0e0;

}
.main-card-font2{
  font-size: medium;
  font-weight: normal;
  color: #7f7f7f;
  margin: 0;
}
.main-card-font{
  font-size: small;
  font-weight: bold;
  margin-top: -10px;
}
.welcometext{
  font-size: 30px;
  font-weight: bold;
}
.el-input__inner {
  height: auto!important;
}
.el-input__inner {
        border-radius: 10px;
      }
.el-input /deep/.el-input__suffix {
  font-size: 30px;
  color: #40a7e8;
}
.el-menu-item.is-active span {
  border-bottom: 2px solid #40a7e8;
}
.el-menu-item:hover{
  background-color: #e9eaec;
}
.el-menu-item span{

}
.el-menu-item{
  height: 50px;
  margin: 10px;
  border-radius: 10px;
}
:root{
  --width: - percentage 100vw;
  --height: - percentage 100vh;
}
.bottom-text{
  font-size: small;
  color: #c0c5cd;
  width: 28%;
  margin-left: 36.5%;
}
.aside{
  height: 100vh;
  background-color: #f3f4f6;
}
.logo-img{
  width: 42px;
  height: 42px;
  margin-left: 15px
}
.logo-div{
  display: flex;
  flex: 1;
  align-items: center;
  height: 100%;
}
.header{
  display: flex;
  margin: 0;
  padding: 0;
  background-color: #f5f7fa;

}
.body{
  background-color: #f4f6fa;
  display: flex;
  justify-content: center;
  align-items: center;
  //height: 99vh;
  //width: 99vw;
  padding: 0px;
  margin: 0px;
  height: 100%;
}
.el-card{
  //margin: 0;
  //padding:0;
  //width: 60vw;
  //height: 75vh;
  height: 100%;
  flex: 1;
  //border-radius: 3%;
}
.el-card_body{
  padding: 0px;
}

/* 媒体查询开始 */
/* 当屏幕宽度小于等于 768px（一般为手机屏幕尺寸） */
@media (max-width: 768px) {
  html,body{
    height: 100%;
    margin: 0;
    padding: 0;
  }
  .pre-font{
    padding-left: 10px;
  }
  .user-img-div{
    padding-left: 10px;
  }
  .ai-div{
    padding-left: 10px;
  }

  .welcometext{
     margin-left: 30px;
  }
  .main-card-div{
     flex-direction: column;
  }
  .body {
    height: 100%;
    flex-direction: column;
    //align-items: stretch;
  }
  .el-card {
    width: 100vw;
    height: 100vh;
    border-radius: 0;
  }
  .el-header {
    padding: 10px;
  }
  .logo-div {
    margin-bottom: 10px;
  }
  .el-container {
    flex-direction: column;
  }
  .el-aside {
    width: 100%;
    height: 0;
    margin-bottom: 10px;

  }
  .el-menu {
    height: 0;
    border-right: none;
    border-bottom: 1px solid #ccc;
  }
  .el-main {
    height: 100vh;
    width: 100vw;
    padding: 0px;
  }
  .scrolldiv {
    margin-left: 0;
    width: 100%;
    height: 80%;
  }
  .orContentDiv {
    margin-top: 35%;

  }
  .bottom-text {
    width: 100%;
    margin-left: 0;
    text-align: center;
  }
}
/* 媒体查询结束 */
</style>
