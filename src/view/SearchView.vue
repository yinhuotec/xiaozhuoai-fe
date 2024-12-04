<script setup>

import CarouselFrame from "@/components/search/CarouselFrame.vue";
import {Promotion} from "@element-plus/icons-vue";

</script>

<template>

  <div class="search-main">
    <div class="scrolldiv">
      <el-scrollbar>
        <div class="header">
          <el-image src="src/assets/search.png" style="height: 25px;width: 25px"></el-image>
          <span class="header-font">AI搜索</span>
        </div>
        <div class="header-foot">连接全网内容，精准搜索，快速分析并总结的智能助手。</div>
        <div class="content"><CarouselFrame></CarouselFrame></div>
      </el-scrollbar>
    </div>

    <div class="foot">
      <el-input class="foot-input" v-model="input"
      :suffix-icon="Promotion"
                style="width: 67.25%;height: 50px;margin-left: 16.375%"
                placeholder="按下ENTER发送消息"
      >
      </el-input>
      <div class="bottom-text" style="margin-top: 0.95%">研发团队©卓软信息工作室 蜀ICP备2024111152号-1</div>
    </div>
  </div>

</template>

<style scoped>

.el-input__inner {
  height: auto!important;
}
.el-input__inner {
  border-radius: 10px;
}
.el-input /deep/.el-input__suffix {
  font-size: 30px;
  color: #40a7e8;
}
.bottom-text{
  font-size: small;
  color: #c0c5cd;
  width: 28%;
  margin-left: 36.5%;
}
.foot{
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 63px;
}
.content{
  margin-top: 50px;
}
.header-foot{
  margin-top: 10px;
  font-size: xx-small;
  color: #7f7f7f;
  text-align: center;
}
.header-font{
  font-weight: bold;
  font-size: larger;
  margin-left: 10px;
}
.header{
  display: flex;
  justify-content: center;
}
.scrolldiv{
  margin-left: 16.5%;
  padding: 0;
  width: 67%;
  height: 85%;
}
.search-main{
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>