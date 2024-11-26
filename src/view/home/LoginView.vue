<script setup>

import { RouterView } from 'vue-router'
import MainHeader from "@/components/mian/MainHeader.vue";
import LeftAside from "@/components/mian/LeftAside.vue";

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
  height: 7vh;
}
.aside{
  width: 18%;
  background-color: #f3f4f6;
}
.main{
  background-color: #ffffff;
  flex-grow: 1;
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
</style>