<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const paths = {
  1: '/conversation',
  2: '/search',
  3: '/product'
};

const navigateTo = (index) => {
  const path = paths[index];
  if (path) {
    router.push(path);
  }
};

</script>

<template>
  <div>

      <el-menu class="menu"
          default-active="1"
          background-color="#f3f4f6"
      >
        <el-menu-item index="1" @click="navigateTo('1')">
          <span >新对话</span>
        </el-menu-item>
        <el-menu-item index="2" @click="navigateTo('2')">
          <span >AI搜索</span>
        </el-menu-item>
        <el-menu-item index="3" @click="navigateTo('3')">
          <span >照片生成</span>
        </el-menu-item>
      </el-menu>
  </div>

</template>

<style scoped>
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
.menu{
  border-right:0!important;
  text-align: center;
}
</style>