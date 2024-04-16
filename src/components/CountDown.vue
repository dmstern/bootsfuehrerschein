<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useLevelStore } from '@/stores/quiz'
import router from '../router'

const levelStore = useLevelStore()

const daysElement = ref(null)
const hoursElement = ref(null)
const minutesElement = ref(null)
const secondsElement = ref(null)

// Set the date we're counting down to
const quizStart = import.meta.env.VITE_QUIZ_START || 'October 31, 2023 00:00:00'
const countDownDate = new Date(quizStart).getTime()

onMounted(() => {
  // Update the countdown every 1 second
  const x = setInterval(function () {
    const now = new Date().getTime()
    const distance = countDownDate - now

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    if (
      !daysElement.value ||
      !hoursElement.value ||
      !minutesElement.value ||
      !secondsElement.value
    ) {
      return
    }

    // Display the countdown
    ;(daysElement.value as HTMLSpanElement).innerText = formatTime(days)
    ;(hoursElement.value as HTMLSpanElement).innerText = formatTime(hours)
    ;(minutesElement.value as HTMLSpanElement).innerText = formatTime(minutes)
    ;(secondsElement.value as HTMLSpanElement).innerText = formatTime(seconds)

    // If the countdown is over, display a message
    if (distance < 0) {
      if (levelStore.level === 'countdown') {
        levelStore.increment()
      } else {
        router.push({ name: levelStore.getNextLevel('countdown') })
      }

      clearInterval(x)
      ;(daysElement.value as HTMLSpanElement).innerText = '00'
      ;(hoursElement.value as HTMLSpanElement).innerText = '00'
      ;(minutesElement.value as HTMLSpanElement).innerText = '00'
      ;(secondsElement.value as HTMLSpanElement).innerText = '00'
    }
  }, 1000)
  // })
})

// Add leading zero to numbers less than 10
function formatTime(time: number) {
  return time < 10 ? '0' + time : String(time)
}
</script>
<template>
  <!-- <QuizWelcome v-if="exceeded"/> -->
  <div class="countdown-container">
    <div class="countdown-item">
      <span ref="daysElement">00</span>
      <p>Tage</p>
    </div>
    <div class="countdown-item">
      <span ref="hoursElement">00</span>
      <p>Stunden</p>
    </div>
    <div class="countdown-item">
      <span ref="minutesElement">00</span>
      <p>Minuten</p>
    </div>
    <div class="countdown-item">
      <span ref="secondsElement">00</span>
      <p>Sekunden</p>
    </div>
  </div>
</template>

<style lang="scss">
@keyframes pulse {
  0% {
    background-color: #f0e6f6;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
    transform: scale(1) rotate(0);
  }
  25% {
    background-color: #ffffff;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
    transform: scale(1.03) rotate(3deg);
  }
  50% {
    background-color: #f0e6f6;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
    transform: scale(1) rotate(0);
  }
  75% {
    background-color: #ffffff;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
    transform: scale(1.03) rotate(-3deg);
  }
  100% {
    background-color: #f0e6f6;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
    transform: scale(1) rotate(0);
  }
}

@keyframes dim {
  0%,
  100% {
    background-color: #fba6d9;
  }
  50% {
    background-color: #fc91d1;
  }
}

body.start {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #d660a7;
  color: white;
}

body.countdown {
  font-family: 'Arial', sans-serif;
  font-size: 15px;
  animation: dim 1s infinite;
}

.countdown-container {
  display: flex;
  justify-content: space-around;
  width: 250px;
  padding: 20px;
  border-radius: 10px;
  animation: pulse 2s ease-in-out infinite;

  @media (min-width: 600px) {
    width: 440px;
  }

  @media (min-width: 1024px) {
    width: 630px;
  }
}

.countdown-item {
  text-align: center;
  margin-right: 1rem;
  font-family: 'Young Serif', serif;
}

.countdown-item span {
  display: block;
  font-size: 2em;
  color: #ff80cc;

  @media (min-width: 600px) {
    font-size: 3em;
  }

  @media (min-width: 1024px) {
    font-size: 6em;
  }
}

.countdown-item p {
  margin: 5px 0;
  color: #4d4dff;
  font-size: 12px;

  @media (min-width: 600px) {
    font-size: unset;
  }
}
</style>
