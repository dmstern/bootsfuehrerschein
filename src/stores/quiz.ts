import { defineStore } from 'pinia'
import { ref } from 'vue'
import router from '../router'

export const useLevelStore = defineStore('level', () => {
  const levels = ['quiz', 'quiz-end']

  const storedLevel = localStorage.getItem('level')
  const level = ref(storedLevel || 'quiz')

  set(level.value, false)

  function increment() {
    set(getNextLevel(level.value), true)
  }

  function set(newLevel: string, gotTo: boolean) {
    if (!levels.includes(newLevel)) {
      return
    }

    level.value = newLevel
    localStorage.setItem('level', level.value)

    const index = levels.indexOf(level.value)

    if (index > 0 && gotTo) {
      console.log('nagiating to newLevel', newLevel)
      router.push({ name: newLevel, params: { quest: 0 } })
    }
  }

  function getNextLevel(currentLevel: string) {
    const index = levels.indexOf(currentLevel)
    if (index < levels.length) {
      return levels[index + 1]
    }
  }

  function reached(searchLevel: string) {
    const index = levels.indexOf(level.value)
    const searchIndex = levels.indexOf(searchLevel)
    return searchIndex <= index
  }

  function restart() {
    set(levels[0], true)
    levels.forEach((l) => {
      localStorage.removeItem(l)
    })
  }

  return { increment, level, reached, set, levels, getNextLevel, restart }
})

export const useStatsStore = defineStore('stats', () => {
  const stats = ref([{ fails: -1 }])

  function wrong() {
    const currentValue = stats.value[stats.value.length - 1].fails
    stats.value[stats.value.length - 1].fails = currentValue + 1
  }

  function correct() {
    stats.value.push({
      fails: 0
    })
  }

  function reset() {
    stats.value = [];
  }

  return { wrong, correct, stats, reset }
})
