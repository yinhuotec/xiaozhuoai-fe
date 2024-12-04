<script setup>

import LeftAside from "@/view/layout/components/LeftAside.vue";
import {RouterView} from "vue-router";
import MainHeader from "@/view/layout/components/MainHeader.vue";
</script>

<template>
  <div class="common-layout">
    <el-container class="container">
      <el-header class="header"><MainHeader></MainHeader></el-header>
      <el-container class="content">
        <el-aside class="aside"><LeftAside></LeftAside></el-aside>
        <el-main class="main"><router-view></router-view></el-main>
      </el-container>

    </el-container>
  </div>
</template>

<style scoped>
.header{
  display: flex;
  background-color: #f5f7fa;
  height: 6vh;
}
.aside{
  width: 17%;
  background-color: #f3f4f6;
}
.main{
  height: 94vh;
  background-color: #ffffff;
  flex-grow: 1;
  padding: 0;
}
.container{
  display: flex;
  flex-direction: column;
  height: 100%;
}
.content{
  flex-grow: 1;
}
.common-layout{
  padding: 0px;
  margin: 0px;
  height: 100%;
}
@media (max-width: 768px) {
  html,body{
    height: 100%;
    margin: 0;
    padding: 0;
  }
  .user-img-div{
    padding-left: 10px;
  }
  .body {
    height: 100%;
    flex-direction: column;
  //align-items: stretch;
  }
  .header{
    display: flex;
    background-color: #f5f7fa;
    height: 6vh;
  }
  .el-container {
    flex-direction: column;
  }
  .el-aside {
    width: 100%;
    height: 0;
    margin-bottom: 10px;
  }
  .main{
    height: 94vh;
    background-color: #ffffff;
    flex-grow: 1;
    padding: 0;
  }
}
/* 媒体查询结束 */
</style>
