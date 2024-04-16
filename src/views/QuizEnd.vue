<script setup lang="ts">
import router from '@/router'
import { useLevelStore } from '../stores/quiz'
import { onMounted } from 'vue'
import ParchmentText from '../components/ParchmentText.vue'

const levelStore = useLevelStore()
if (!levelStore.reached('quiz-end') && !(import.meta.env.VITE_SKIP_ALLOWED === 'true')) {
  router.push('/final-riddle')
}

onMounted(() => {
  document.body.classList.remove(...levelStore.levels, 'start')
  document.body.classList.add('quiz-end', 'fantasy-quiz')
})

const geoAnswer = import.meta.env.VITE_GEO_ANSWER
</script>

<template>
  <main>
    <ParchmentText :fantasy="true">
      <h1>Ihr seid fast am Ziel!</h1>
      <p>
        <strong>{{ geoAnswer }}</strong> ist richtig.
      </p>
      <p>Doch was mag diese Verlautbarung bedeuten?</p>
      <br />
      <p>
        <cite>
          Erklimmet nun die Anhöhen der Schmiede und spürt die gefallenen Ahnen des Waldes unter
          euren Füßen. Wo das Tageslicht sich sanft im Horizont bettet, wird der Thymian euch den
          Weg zum kalten Metalle weisen.
        </cite>
      </p>
    </ParchmentText>
  </main>
</template>

<style>
strong {
  font-weight: bold;
}
</style>
