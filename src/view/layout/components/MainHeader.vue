<script setup>
import {ref} from "vue";
import LoginFrame from "@/components/LoginFrame.vue";
const LoginDialogVisible = ref(false);

const login =()=>{
  LoginDialogVisible.value = true
}
</script>

<template>
  <LoginFrame v-model="LoginDialogVisible"></LoginFrame>
  <div class="logo-div">
    <el-image src="logo.png" class="logo-img"></el-image>
    <!--    <el-image src="src/assets/logo.png" class="logo-img"></el-image>-->
    <div class="logo-font">小卓</div>
  </div>
  <!--  <div class="user">-->
  <!--    <el-image src="src/assets/usericon.png" style="width: 23px;height: 23px"></el-image>-->
  <!--  </div>-->
  <!--  <div class="login">-->
  <!--    <el-button type="info"-->
  <!--               style="background-color: black;border-radius: 10px;margin-right: 20px"-->
  <!--               @click="login"-->
  <!--    >-->
  <!--      登录</el-button>-->
  <!--  </div>-->
</template>

<style scoped>
.login{
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 15px;
}
.user{
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 10px;
}
.logo-font{
  font-weight: bold;
}
.logo-img{
  width: 42px;
  height: 42px;
  margin-left: 0
}
.logo-div{
  display: flex;
  flex: 1;
  align-items: center;
  height: 100%;
}
@media (max-width: 768px) {
  html,body{
    height: 100%;
    margin: 0;
    padding: 0;
  }
  .logo-div {
    margin-bottom: 10px;
  }
}
/* 媒体查询结束 */
</style>
