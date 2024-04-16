<script setup>
import FloatingObject from './FloatingObject.vue'
</script>
<template>
  <div class="container">
    <div class="animation-container">
      <FloatingObject
        src="https://res.cloudinary.com/dybkyzqxg/image/upload/v1698441614/davbjunbsmh1pxlwi6ty.svg"
      />
      <FloatingObject
        src="https://res.cloudinary.com/dybkyzqxg/image/upload/v1698441613/bjkkanpgh5weo20k8g8f.svg"
      />
      <FloatingObject
        src="https://res.cloudinary.com/dybkyzqxg/image/upload/v1698441613/p1f8fjpbzxqzsrrt2ap1.svg"
      />
      <FloatingObject
        src="https://res.cloudinary.com/dybkyzqxg/image/upload/v1683073217/E0A85FB7D22ED9C_dqn9ip.png"
      />
      <FloatingObject
        src="https://res.cloudinary.com/dybkyzqxg/image/upload/v1698441613/bjkkanpgh5weo20k8g8f.svg"
      />
    </div>
  </div>
</template>
<style scoped>
.container {
  pointer-events: none;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
}

.animation-container {
  position: absolute;
  height: 100%;
  width: 100%;
}

.main {
  position: absolute;
  top: 50%;
  left: 50%;
  translate: (-50%, -50%);
}
</style>
