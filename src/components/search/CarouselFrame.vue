<script setup>

const images = [
  { src: 'src/assets/carousel/carousel01.png',
    description: '《电锯惊魂》系列则开创了犯罪恐怖 IP 的先河。' },
  { src: 'src/assets/carousel/carousel02.png',
    description: '《速度与激情》系列是成功的赛车题材商业片。自 2001 年问世，凭借刺激的赛车场面和角色塑造赢得观众喜爱，不断引入新明星保持高人气。' },
  { src: 'src/assets/carousel/carousel03.png',
    description: '《生化危机》系列是丧尸题材的代表，也是成功的游戏改编电影。讲述主角爱丽丝与丧尸等的斗争，虽故事完结但 IP 将继续开发，女主米拉・乔沃维奇还与导演因戏结缘。' },
  { src: 'src/assets/carousel/carousel04.png',
    description: '《洛奇》在拳击电影中地位崇高，改编自真实经历，主演史泰龙凭借此系列跻身一线，还获奥斯卡奖项，他自编自演并执导多部续集。' },
  // 更多图片
];

</script>

<template>
  <el-carousel
      height="440px"
      direction="vertical"
      type="card"
      :autoplay="false"
  >
    <el-carousel-item v-for="(image, index) in images" :key="index">
      <img :src="image.src" alt="Image" class="carousel-img">
      <div class="carousel-header">
        <div class="image-description">
          {{ image.description }}
        </div>
      </div>

    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>

.carousel-img{
  width: 820px;
}
.image-description {
  color: white;
  position: absolute;
  top: 160px;
  left: 10px;
  font-weight: bold;
  font-size: larger;
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