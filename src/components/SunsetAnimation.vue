<script setup lang="ts">
import { onMounted, reactive } from 'vue'
const fantasyQuizStart = import.meta.env.VITE_FANTASY_START || 'October 31, 2023 00:00:00'

const countDownDate = new Date(fantasyQuizStart).getTime()
const now = new Date().getTime()
const distance = countDownDate - now

const emit = defineEmits(['exceeded'])

const state = reactive({
  exceeded: false
})

document.body.style.setProperty('--duration', `${distance}ms`)

function endWaiting() {
  if (distance < 0) {
    emit('exceeded')
    state.exceeded = true
  }
}

onMounted(() => {
  if (distance < 0) {
    document.body.style.setProperty('--duration', `${import.meta.env.VITE_SUNSET || 60000}ms`)
  }
})
</script>
<template>
  <div class="container" :class="{ waiting: !state.exceeded }">
    <div class="sun" @animationend="endWaiting()"></div>
  </div>
</template>
<style lang="scss">
body.fantasy-quiz:not(.quiz-end) {
  animation: dusk var(--duration) linear;

  .container.waiting {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;

    .sun {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: white;
      opacity: 0.8;
      box-shadow: 0 0 100px 20px gold;
      position: absolute;
      left: 0;
      top: 0;
      transform: translate(0, 0);
      animation: sun-float var(--duration) linear;
    }

    @keyframes sun-float {
      60% {
        background-color: gold;
      }

      80% {
        background-color: rgb(215, 40, 40);
      }

      to {
        transform: translate(50vw, calc(120vh));
        background-color: rgb(123, 65, 65);
      }
    }

    @keyframes dusk {
      0% {
        background-color: skyblue;
        color: darkgreen;
      }
      40% {
        background-color: skyblue;
        color: darkgreen;
      }
      50% {
        background-color: rgb(235, 222, 135);
        color: black;
      }
      60% {
        background-color: rgb(228, 111, 52);
        color: var(--color-text);
      }
      70% {
        background-color: var(--color-background);
        color: var(--color-text);
      }
      100% {
        background-color: var(--color-background);
        color: var(--color-text);
      }
    }
  }
}
</style>
