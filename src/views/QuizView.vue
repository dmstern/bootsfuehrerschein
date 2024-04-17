<script setup lang="ts">
import router from '@/router'
import QuizApp from '../components/QuizApp.vue'
import { useLevelStore } from '../stores/quiz'
import basisFragen from '../../questions/basis.json';
import binnenFragen from '../../questions/binnen.json';
import nameFragen from '../../questions/name.json';
import seeFragen from '../../questions/see.json';
import { onMounted } from 'vue'

const levelStore = useLevelStore()
if (!levelStore.reached('quiz') && !(import.meta.env.VITE_SKIP_ALLOWED === 'true')) {
  router.push('/')
}

onMounted(() => {
  document.body.classList.remove(...levelStore.levels)
  document.body.classList.add('quiz', 'start')
})

const questions = basisFragen.concat(binnenFragen);
</script>

<template>
  <main>
    <QuizApp :questions="questions" start-text="Leinen los!" level="quiz">
      <h1>Sportbootsführerschein Binnen Motor</h1>
      <p>
        Interaktives Quiz für den Sportbootsführerschein Binnen
      </p>
      <p>
        Quelle Fragenkatalog: <a href="https://github.com/koljabohne/Fragenkatalog_Sportboot/" target="_blank">github.com/koljabohne/Fragenkatalog_Sportboot</a>
      </p>
      <p>
        Offizieller Fragenkatalog: <a href="https://elwis.de/DE/Sportschifffahrt/Sportbootfuehrerscheine/Fragenkatalog-Binnen/Fragenkatalog-Binnen-neu-node.html" target="_blank">https://elwis.de/</a>
      </p>
    </QuizApp>
  </main>
</template>
