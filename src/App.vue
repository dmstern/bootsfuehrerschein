<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useLevelStore } from './stores/quiz'

const levelStore = useLevelStore()
function resetQuiz() {
  levelStore.restart()
}
</script>

<template>
  <RouterLink to="/" class="reset-button" @click="resetQuiz()"><span>Zum Anfang</span></RouterLink>

  <RouterView />
</template>

<style scoped lang="scss">
header {
  line-height: 1.5;
  max-height: 100vh;
}

.reset-button {
  position: absolute;
  bottom: 50px;
  left: 50px;
  width: 70px;
  height: 70px;
  background: url('/emerald.png') no-repeat;
  background-size: contain;
  border: none;
  background-color: transparent;
  outline: none;
  color: white;
  font-weight: bold;
  font-family: var(--heading-font);
  font-size: 18px;
  text-shadow: 1px 1px 8px black;
  line-height: 1em;
  cursor: pointer;
  transition: all 500ms ease;
  border-radius: 50%;
  box-shadow: 2px 2px 10px 1px rgba($color: #000000, $alpha: 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
  opacity: 0.7;

  .start & {
    background: radial-gradient(rgb(223, 165, 223), magenta);
    font-size: 15px;
  }

  &:hover {
    transform: scale(1.1);
    opacity: 1;
  }
}
</style>
