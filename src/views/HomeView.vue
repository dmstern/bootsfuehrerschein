<script setup lang="ts">
import CountDown from '../components/CountDown.vue'
import { useLevelStore } from '@/stores/quiz'
import { onMounted } from 'vue'

const levelStore = useLevelStore()

onMounted(() => {
  document.body.classList.remove(...levelStore.levels)
  document.body.classList.add('countdown', 'start')
})
</script>

<template>
  <main>
    <CountDown />
  </main>
</template>
