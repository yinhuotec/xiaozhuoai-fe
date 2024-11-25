<script setup>

</script>

<template>
  <div class="logo-div">
    <el-image src="src/assets/logo.png" class="logo-img"></el-image>
    <div class="logo-font">小卓</div>
  </div>
  <div class="user">
    <el-image src="src/assets/usericon.png" style="width: 23px;height: 23px"></el-image>
  </div>
</template>

<style scoped>
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
</style>