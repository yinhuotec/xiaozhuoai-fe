<script setup>

const images = [
  { src: 'src/assets/carousel/carousel01.png', description: '图片 1 介绍' },
  { src: 'src/assets/carousel/carousel02.png', description: '图片 2 介绍' },
  { src: 'src/assets/carousel/carousel03.png', description: '图片 3 介绍' },
  { src: 'src/assets/carousel/carousel04.png', description: '图片 4 介绍' },
  // 更多图片
];

</script>

<template>
  <el-carousel
      height="400px"
      direction="vertical"
      type="card"
      :autoplay="false"
  >
    <el-carousel-item v-for="(image, index) in images" :key="index">
      <img :src="image.src" alt="Image">
      <div class="image-description">
        {{ image.description }}
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>
.image-description {

  cursor: pointer;
  text-decoration: none;
}
.image-description:hover {
  text-decoration: underline;
}


.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

</style>