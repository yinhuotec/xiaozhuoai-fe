<script setup>
import {reactive, ref} from "vue";
import {storeToRefs} from "pinia";
import {useUserStore} from "@/store/userStore.js";
import { onMounted } from 'vue'
import {ElMessage} from "element-plus";

const userStore = useUserStore()


const settingDialogVisble = ref(false)

async function method(){
await userStore.getCodeFromAccessToken(localStorage.getItem("accessToken"))
}
const { xiaoZhuoCode , nickname } = storeToRefs(userStore)
const form = reactive({
  name: "" ,
  code: ""
})
const edit =async ()=>{
  if( 3<=form.name.length && form.name.length<= 8){
    await userStore.modifyNickname(form)

    await userStore.getCodeFromAccessToken(localStorage.getItem("accessToken"))
  }else{
    ElMessage({
      message: '请确保昵称长度3-8之间',
      type: 'error',
    })
  }

}
onMounted(async ()=>{
  await method()
  form.code = xiaoZhuoCode.value
  form.name = nickname.value
})

</script>

<template>
  <el-dialog
      v-model="settingDialogVisble"
      title="设置"
      width="350"
      align-center
      style="border-radius: 20px"
  >
    <div class="title">
      <div class="title-body">个人资料</div>
    </div>
    <div class="avatar-box">
      <el-upload>
        <el-avatar class="avatar"
                   size="large"
                   src="user.png"
        />
      </el-upload>
    </div>
    <el-form :model="form">
      <div style="align-items: center">
        <div class="tip-box">
          <div>昵&nbsp;&nbsp;&nbsp;称*</div>
          <el-input v-model="form.name" class="setting-el-input"></el-input>
        </div>
        <div class="tip-box">
          <div>小卓号*</div>
          <el-input v-model="form.code" disabled class="setting-el-input"></el-input>
          <div class="noEditing">小卓号不可修改</div>
        </div>
      </div>
    </el-form>


    <div class="b-body">
      <el-button type="primary" style="width: 80%;height: 36px" @click="edit"
      >确认</el-button>
    </div>


  </el-dialog>
</template>

<style scoped>
.avatar{
  //transition: all 0.3s ease;
}
.avatar:hover{
  border: 1px solid black;
}
.setting-el-input{
  margin-top: 10px;
}
.noEditing{
  margin-top: 5px;
  color:gray;
  font-size: xx-small;
  font-weight: normal;
}
.tip-box{
  font-weight: bold;
  width: 80%;
  margin: 10px auto;
}
.avatar-box{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 20px auto;
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
  font-size: medium;
  font-weight: bold;
  color: black;
}
</style>
