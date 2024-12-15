<script setup>
import {ref} from "vue";
import VcodeFrame from "@/components/VcodeFrame.vue";
import {ElMessage} from "element-plus";

const centerDialogVisible = ref(false)

const VcodeDialogVisible = ref(false)
const checked1 = ref(false)
// const input = ref("")

const isPhoneNumber =(input) =>{
  const regex = /^1[3-9]\d{9}$/;
  return regex.test(input)
}
const verify =() =>{
      VcodeDialogVisible.value=true

}

</script>

<template>
<!--  <el-alert title="验证码已发送" type="success" :closable="false" center show-icon-->
<!--             class="alert"/>-->
    <el-dialog
      v-model="centerDialogVisible"

      width="350"
      align-center
      style="border-radius: 20px"
  >
    <div class="title">
      <div class="title-body">登录以解锁更多功能</div>
    </div>
      <div class="qr-img">
        <el-image src="qrcode.png">

        </el-image>
      </div>
      <div>
        <div class="tip-box">
          <div>扫码关注【小卓AI】公众号</div>
        </div>
        <div class="tip-box">
          <div>回复关键字【验证码】，获取验证码</div>
        </div>

      </div>
<!--    <div class="i-body">-->
<!--      <el-input v-model="input" style="width: 240px;height: 40px" placeholder="请输入手机号" />-->
<!--    </div>-->

    <div class="b-body">
      <el-button type="primary" style="width: 240px;height: 36px" :disabled="!checked1"
      @click="verify"
      >下一步</el-button>
      <VcodeFrame v-model="VcodeDialogVisible"></VcodeFrame>
    </div>

    <div class="title" style="margin-top: 30px">
      <el-checkbox v-model="checked1" label="已阅读并同意 小卓AI 的使用协议和隐私政策。" size="small" />
    </div>
<!--    <div class="title">-->
<!--      <span style="font-size: xx-small">无法登录？</span>-->
<!--      <span style="font-size: xx-small">提交反馈</span>-->
<!--    </div>-->
  </el-dialog>

</template>

<style scoped>
.tip-box{
  display: flex;
  justify-content: center;
}
.qr-img{
  display: flex;
  align-items: center;
  justify-content: center;
}
.alert:first-child{
  margin: 0;
}
.alert{
  margin: 20px 0 0;

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
