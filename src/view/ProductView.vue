<script setup>

import {Promotion} from "@element-plus/icons-vue";
import ImageGallery from "@/components/product/ImageGallery.vue";
</script>

<template>
  <div class="inner">
    <el-scrollbar height="600px" style="width: 70%">
      <div class="header">
        <div class="header-icon">
          <el-image src="src/assets/photo.png" style="width: 30px;height: 30px;margin-left: 10px">
          </el-image>
          <div class="header-font">照片生成</div>
        </div>
        <div class="header-foot">自定风格，搜集灵感，复制同款。</div>
      </div>

      <div class="gallery">
        <ImageGallery></ImageGallery>
      </div>
    </el-scrollbar>

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
.gallery{
  margin-top: 20px;
}
.inner{
  display: flex;
  justify-content: center;
}

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
  bottom: 20px;
  position: fixed;
  width: 80%;
}
.header-foot{
  margin-top: 10px;
  font-size: xx-small;
  color: #7f7f7f;
  margin-left: 10px;
}
.header-font{
  font-size: larger;
  font-weight: bold;
  margin-left: 10px;
}
.header-icon{
  display: flex;
  align-items: center;
}

</style>