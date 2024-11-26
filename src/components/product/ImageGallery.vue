<script setup>
const images = [
    'src/assets/gallery/black.png',
    'src/assets/gallery/people.png',
    'src/assets/gallery/carton.png',
    'src/assets/gallery/blue.png',
    'src/assets/gallery/dog.png',
    'src/assets/gallery/cat.png',
    'src/assets/gallery/white.png',
    'src/assets/gallery/girl.png',
    'src/assets/gallery/green.png',
//更多图片
];
</script>

<template>
  <div class="image-container">
    <img  v-for="(image, index) in images" :key="index" :src="image" :alt="{index}">
  </div>
</template>

<style scoped>
.image-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}
.image-container img {
  border-radius: 10%;
  width: 100%;
  height: auto;
}
</style>