<script setup>
import {ref} from "vue";
const centerDialogVisible = ref(false)

const checked1 = ref(false)
const input = ref("")
const password = ref("")

</script>

<template>
  <el-dialog
      v-model="centerDialogVisible"
      width="400"
      align-center
      style="border-radius: 20px"
  >
    <div class="title">
      <div class="title-body">登录以解锁更多功能</div>
    </div>
    <div class="i-body">
      <el-input v-model="input" style="width: 240px;height: 40px" placeholder="请输入手机号" />
    </div>
    <div class="i-body2">
      <el-input v-model="password" type="password"
                style="width: 240px;height: 40px" placeholder="请输入密码" />
    </div>
    <div class="b-body">
      <el-button type="primary" style="width: 240px;height: 40px">注册</el-button>
    </div>

  </el-dialog>

</template>

<style scoped>
.regist-box{
  height: 100%;
}
.regist-box:hover{
  border-bottom: #40a7e8 solid 2px;
}
.regist{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.b-body{
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.i-body2{
  display: flex;
  justify-content: center;
  margin-top: 18px;
}
.i-body{
  display: flex;
  justify-content: center;
  margin-top: 35px;
}
.title{
  display: flex;
  justify-content: center;
}
.title-body{
  font-size: large;
  font-weight: bold;
  color: black;
}
</style>