<script setup>
// import { ref , onMounted} from 'vue'
defineProps({
  src: String
})

// const img = ref(null)

// let windowHeight

// function init() {
//   windowHeight = window.innerHeight
//   addEventHandlers()
//   checkImage()
// }

// function addEventHandlers() {
//   window.addEventListener('scroll', checkImage)
//   window.addEventListener('resize', init)
// }

// function checkImage() {
//   if (isInViewport(img)) {
//     loadImage(img)
//   }
// }

// function isInViewport(image) {
//   console.log(image.value);
//   const rect = image.value.getBoundingClientRect()
//   return rect.top >= 0 && rect.bottom <= windowHeight
// }

// function loadImage(image) {
//   const img = new Image()
//   img.src = image.value.getAttribute('data-src')
//   img.onload = () => {
//     image.value.setAttribute('src', img.src)
//     image.value.removeAttribute('data-src')
//     image.value.classList.add('loaded')
//     animateImage(image)
//   }
// }

// function animateImage(image) {
//   gsap.to(image, {
//     duration: 'random(40, 10)',
//     x: 'random(-100, 1000)',
//     y: 'random(-100, 1000)',
//     rotation: 'random(-180, 180)',
//     ease: 'power1.in.out',
//     onComplete: animateImage,
//     onCompleteParams: [image]
//   })
// }

// animateImage(img);
// onMounted(() => {
//   init()
// })
</script>
<template>
  <img ref="img" class="lazy" :src="src" alt="floating image" />
</template>
<style>
@keyframes move_y {
  from {
    bottom: -200px;
  }
  to {
    bottom: 100%;
  }
}

@keyframes oscil1 {
  from {
    translate: 0 0;
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0.3, 0.3, 1);
  }
  25% {
    translate: 10px 0;
    transform: rotate(3deg);
    animation-timing-function: cubic-bezier(0.7, 0, 0.9, 0.7);
  }
  50% {
    translate: 0 0;
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0.3, 0.3, 1);
  }
  75% {
    translate: -10px 0;
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.7, 0, 0.9, 0.7);
  }
  to {
    translate: 0 0;
    transform: rotate(0deg);
  }
}
.lazy {
  position: absolute;
  max-width: 300px;
  animation:
    move_y 30s linear forwards infinite,
    oscil1 6s infinite;

  &:first-of-type {
    max-width: 100px;
    left: 40vw;
  }

  &:nth-of-type(2) {
    max-width: 100px;
    left: 50vw;
    animation-duration: 20s;
  }

  &:nth-of-type(3) {
    max-width: 150px;
    left: 60vw;
    animation-duration: 15s;
  }

  &:nth-of-type(3) {
    left: 80vw;
    animation-duration: 15s;
  }

  &:nth-of-type(4) {
    left: 10vw;
  }

  &:nth-of-type(5) {
    max-width: 100px;
    opacity: 0;
  }
}
</style>
