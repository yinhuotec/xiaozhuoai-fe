<script setup>

import {Promotion} from "@element-plus/icons-vue";
import {useXiaozhuoStore} from "@/store/xiaozhuoStore.js";
import {ref} from "vue";
import {ElMessage} from "element-plus";
import {storeToRefs} from "pinia";


const xiaozhuoStore = useXiaozhuoStore()
const input = ref("")
const messagelistData = ref([]);
let firstTime = true;

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
</script>

<template>

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
          <div style="display: flex;align-items: center">
            <div v-if="index%2===0">

              <div class="user-img-div">
                <el-image class="user-img"  src="src/assets/user.JPG">
                </el-image>
                <div class="user-font">用户_ZR001</div>
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

</template>

<style scoped>


.ai-font{
  font-size: small;font-weight: bold
}
.ai-div-img{
  height: 25px;
  width: 25px;
  padding-right: 15px
}
.ai-div{
  display: flex;align-items: center;margin-top: 5px
}
.pre-font{
  margin-left: 39px
}
.user-font{
  font-size: small;
  font-weight: bold
}
.user-img{
  height: 25px;
  width: 25px;
  padding-right: 15px
}
.user-img-div{
  display: flex;
  align-items: center;
  margin-top: 5px
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
  height: 85%
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

</style>