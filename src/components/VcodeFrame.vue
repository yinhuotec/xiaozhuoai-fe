<script setup>
import {ref} from "vue";
import { useRouter } from 'vue-router';


const centerDialogVisible = ref(false)
const phoneNumber = localStorage.getItem("phoneNumber")

const inputs = ref(Array(6).fill('')); // 创建一个包含6个空字符串的响应式数组
const inputRefs = ref([]); // 创建一个空数组来存储输入框的引用

const router = useRouter();

const close =()=>{
  inputs.value=Array(6).fill('');
}
    const handleKeyup = (event, index) => {
      // 检查是否是数字并且不是退格键（keyCode 8）
      if (/\d/.test(event.key) && event.keyCode !== 8) {
        // 如果不是最后一个输入框，则聚焦到下一个输入框
        if (index < inputs.value.length - 1) {
          inputRefs.value[index + 1].focus();
        }
      } else if (event.keyCode === 8 && index > 0) {
        // 如果是退格键并且不是第一个输入框，则聚焦到前一个输入框
        inputRefs.value[index - 1].focus();
      }

      if (index === 5 && inputs.value[index] !== '') {
        // 检查第六个输入框是否已经有输入
        // 如果有输入，则跳转到 LoginView

        router.push("/login");
      }

    }

const back =()=>{

  centerDialogVisible.value = false;
}
</script>

<template>
  <el-dialog
      @close="close"
      v-model="centerDialogVisible"
      width="380"
      align-center
      title="" :show-close="false"
      style="border-radius: 20px"
  >
    <div class="body">
      <div class="title">
        <div class="back">
          <el-button type="info" plain style="border: none;width: 10px;border-radius: 10px" @click="back">
            <el-icon><ArrowLeftBold /></el-icon>
          </el-button>
        </div>
        <div style="font-weight: bold;color: black;font-size: 15px">&nbsp;&nbsp;输入6位验证码</div>
      </div>

      <div class="content">
        <div class="bigtitle">输入6位验证码</div>
        <div class="reminder">验证码已发送至&nbsp;+86&nbsp;{{phoneNumber}}</div>
        <div class="code">
<!--          <input class="input">-->
<!--          <input class="input">-->
<!--          <input class="input">-->
<!--          <input class="input">-->
<!--          <input class="input">-->
<!--          <input class="input">-->
          <input
              class="input"
              v-for="(input, index) in inputs"
              :key="index"
              :ref="el => { if (el) inputRefs[index] = el }"
              v-model="inputs[index]"
              @keyup="handleKeyup($event, index)"
              type="text"
              maxlength="1"
          />
        </div>
        <div class="resend">重新发送</div>
      </div>
    </div>


  </el-dialog>

</template>

<style scoped>
.resend {
  font-size: 12px;
  cursor: pointer;
}
.resend{
  margin-top: 20px;
}
.input{
  text-align: center;
  width: 40px;
  height: 40px;
  border-radius: 13px;
  margin-left: 3px;
  margin-right: 3px;
  background-color: #f6f6f6 ;
  border: none;
}
.code{
  margin-top: 30px;
}
.reminder{
  font-size: 12px;
  color: #7f7f7f;
}
.bigtitle{
  font-size: 25px;
  font-weight: bold;
  color: black;
  margin-top: 20px;
}
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.title{
  display: flex;
  margin-right: auto;
  align-items: center;
}
.body{
  justify-content: center;
}

</style>