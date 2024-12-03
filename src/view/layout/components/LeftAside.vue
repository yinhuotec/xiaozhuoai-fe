<script setup>
import { useRouter } from 'vue-router';
import {Plus, Search} from "@element-plus/icons-vue";
import {ElMessage} from "element-plus";

const router = useRouter();

const paths = {
  1: '/chat',
  2: '/search',
  3: '/product'
};

const navigateTo = (index) => {
  const path = paths[index];
  if (path) {
    router.push(path);
  }
};

const alert =()=>{
  ElMessage({
    message: '努力研发中',
    type: 'warning',
  })
}

</script>

<template>
  <div>
    <el-menu class="menu"
             default-active="1"
             background-color="#f3f4f6"
    >
      <el-menu-item index="1" @click="navigateTo('1')">
        <el-icon><Plus /></el-icon>
        <span style="display: flex;align-items: center;">
              新对话
            </span>
      </el-menu-item>
      <el-menu-item index="2" @click="alert">
        <el-icon><Search /></el-icon>
        <span >AI搜索</span>
      </el-menu-item>
      <el-menu-item index="3" @click="alert">
        <el-icon><Picture /></el-icon>
        <span >照片生成</span>
      </el-menu-item>
    </el-menu>
  </div>

</template>

<style scoped>
.icon-box{
  display: flex;
  align-items: center;
}

.el-menu-item.is-active  span {
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
.menu{
  border-right:0!important;
  text-align: center;
}
@media (max-width: 768px) {
  html,body{
    height: 100%;
    margin: 0;
    padding: 0;
  }
  .body {
    height: 100%;
    flex-direction: column;
  //align-items: stretch;
  }
}
/* 媒体查询结束 */
</style>
