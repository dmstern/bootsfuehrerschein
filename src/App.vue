<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useLevelStore, useStatsStore } from './stores/quiz'

const levelStore = useLevelStore()
const statsStore = useStatsStore()
function resetQuiz() {
  levelStore.restart()
  statsStore.reset();
  document.body.classList.add('quiz', 'start')
}
</script>

<template>
  <RouterLink to="/" class="reset-button" @click="resetQuiz()"><span>Neustart</span></RouterLink>

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
  background-size: contain;
  border: 2px solid rgba(var(--outline-color), .1);
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
  border-radius: 1em;
  box-shadow: 2px 2px 10px 1px rgba($color: #000000, $alpha: 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1em;
  opacity: 0.7;

  &:hover {
    transform: scale(1.1);
    opacity: 1;
  }
}
</style>
