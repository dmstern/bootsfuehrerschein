<script setup lang="ts">
import router from '@/router'
import QuizApp from '../components/QuizApp.vue'
import { useLevelStore } from '../stores/quiz'
import { onMounted } from 'vue'

const levelStore = useLevelStore()
if (!levelStore.reached('final-riddle') && !(import.meta.env.VITE_SKIP_ALLOWED === 'true')) {
  router.push('/fantasy-quiz')
}

onMounted(() => {
  document.body.classList.remove(...levelStore.levels, 'start')
  document.body.classList.add('final-riddle')
})

const questions = [
  {
    q: `<code>
      <pre>
    function öffnePortal({purpur, saphire, smaragte, goldunzen, rubine}) {
      function verwandlung(drachenblut) {
        return drachenblut.charCodeAt(0).toString()
      }

      function magie(feenstaub) {
        return feenstaub.charCodeAt(0).toString(16)
      }

      const [a, d, A, l] = purpur.map(verwandlung);
      const [n, G, f] = saphire.map(magie);
      const [h, e, s] = smaragte;
      const [k, L, g] = goldunzen.map(verwandlung);
      const [o, I, ä] = rubine.map(magie);
      return n + "." + [G,a,n,d,A,l,f].join('') + ", " + h + "." + [k,L,e,g,o,I,ä,s].join('');
    }

    var schlüssel = {
      purpur: [🌿, 🔮, 🏰, 🗡️],
      saphire: [🦄, 🧙🏼‍♂️, ✨],
      smaragte: [⚔️, 🐉, 🐲],
      goldunzen: [🏹, 🧚‍♀, 📜],
      rubine: [📖, 🧝, 📚],
    }

    var magischeSequenz = öffnePortal(schlüssel);
    </pre>
    </code>

    Welche magische Sequenz offenbart euch das Portal, nachdem ihr alle auf eurer Reise gesammelten Schlüssel in die passenden Vertiefungen eingesetzt habt?`,
    a: btoa(import.meta.env.VITE_GEO_ANSWER),
    e: '🌌'
  }
]
</script>

<template>
  <main>
    <QuizApp
      :questions="questions"
      start-text="Tretet Näher!"
      level="final-riddle"
      heading="Willkommen am Portal von Wesoria"
    >
      <p>
        Mit dem Wissen und den Erkenntnissen, die ihr während eurer epischen Reise durch das Land
        gesammelt habt, steht ihr nun vor einem monumentalen, von magischem Leuchten durchzogenen
        Portal. Die Legenden sprechen davon, dass dieses Tor den letzten Hinweis zu eurer heiligen
        Mission beherbergt, aber es kann nicht von jedermann geöffnet werden. Nur diejenigen, die
        die Geheimnisse des Landes entschlüsselt haben, können die Macht dieses Portals freisetzen.
      </p>
      <p>
        Vor euch findet ihr einen antiken Steinpfeiler, in den ein seltsames Pult mit mehreren
        Vertiefungen gemeißelt wurde. Jede dieser Vertiefungen scheint genau die Form eines der
        Symbole und Zahlen zu haben, die ihr während eurer Abenteuer entdeckt habt.
      </p>
      <p>
        Flüsternd durch die Luft hallen die Worte einer alten Sage: "Die Antworten, die ihr sucht,
        sind der Schlüssel, den ihr besitzt. Fügt sie zusammen, vereint ihr Wissen und setzt sie in
        die richtige Reihenfolge, um die magische Sequenz zu vervollständigen."
      </p>
      <p>
        Während ihr die gesammelten Symbole und Zahlen in die Vertiefungen des Pults setzt, spürt
        ihr, wie die Energie des Portals reagiert, jedes Mal stärker werdend, wenn ein weiteres
        Stück des Puzzles an seinen Platz gesetzt wird.
      </p>
      <p>
        Sobald alles an seinem Platz ist, sollt ihr die uralten Worte sprechen, die das Portal euch
        Offenbart. Wenn ihr richtig liegt, wird sich das Portal zum Turm des Palastes von Wesoria
        öffnen und der letzte Hinweis wird euch enthüllt. Wenn nicht, muss das Rätsel von Neuem
        begonnen werden. Seid wachsam, denn eure Mission ist fast erfüllt. Es liegt nun an euch, die
        Antworten zu kombinieren und das Portal zu öffnen.
      </p>
    </QuizApp>
  </main>
</template>

<style>
code {
  font-size: 12px;
}
</style>
