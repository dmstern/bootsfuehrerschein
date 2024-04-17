<script setup lang="ts">
import router from '@/router'
import QuizApp from '../components/QuizApp.vue'
import { useLevelStore } from '../stores/quiz'
import fragen from '../../bootsfuehrerschein-fragen.json';
import { onMounted } from 'vue'

const levelStore = useLevelStore()
if (!levelStore.reached('quiz') && !(import.meta.env.VITE_SKIP_ALLOWED === 'true')) {
  router.push('/')
}

onMounted(() => {
  document.body.classList.remove(...levelStore.levels)
  document.body.classList.add('quiz', 'start')
})

</script>

<template>
  <main>
    <QuizApp :questions="fragen" start-text="Los geht's!" level="quiz">
      <h1>Sportbootsführerschein Binnen Motor</h1>
      <p>
        Interaktives Quiz für den Sportbootsführerschein Binnen
      </p>
      <p>
        Quelle Fragenkatalog: <a href="https://github.com/koljabohne/Fragenkatalog_Sportboot/" target="_blank">https://github.com/koljabohne/Fragenkatalog_Sportboot</a>
      </p>
    </QuizApp>
  </main>
</template>
