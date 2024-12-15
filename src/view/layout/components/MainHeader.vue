<script setup>
import {ref, watchEffect} from "vue";
import LoginFrame from "@/components/LoginFrame.vue";
import SettingFrame from "@/components/SettingFrame.vue";
import {useAuthStore} from "@/store/authStore.js";
import {useUserStore} from "@/store/userStore.js";
const userStore = useUserStore()
import {storeToRefs} from "pinia";
import { onMounted } from 'vue'
const authStore = useAuthStore()
const {getTokenCode} = storeToRefs(authStore)


const method = async()=>{
  await authStore.isLogin();
}
const settingDialogVisible = ref(false)
const LoginDialogVisible = ref(false);

const login =()=>{
  LoginDialogVisible.value = true
}
const logout =()=>{
  authStore.logout()
}
const setting =()=>{
  settingDialogVisible.value = true
}
onMounted(() => {
  method()
  // userStore.getCodeFromAccessToken(localStorage.getItem("accessToken"))
})

</script>

<template>
  <SettingFrame v-model="settingDialogVisible"></SettingFrame>
  <LoginFrame v-model="LoginDialogVisible"></LoginFrame>
  <div class="logo-div">
        <el-image src="logo.png" class="logo-img"></el-image>
    <div class="logo-font">小卓</div>
  </div>

    <div class="login">
      <div v-if="getTokenCode===undefined" class="user">
        <el-dropdown>
          <el-avatar  :size="35" src="user.png" />
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="setting">
                <div>
                  设置
                </div>
              </el-dropdown-item>
              <el-dropdown-item  @click="logout">
                  退出登录
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

<!--        <el-image src="src/assets/usericon.png" style="width: 23px;height: 23px"></el-image>-->
      </div>
      <el-button v-if="getTokenCode===500" type="info"
                 style="background-color: black;border-radius: 10px;"
                 @click="login"
      >
        登录</el-button>
    </div>
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
