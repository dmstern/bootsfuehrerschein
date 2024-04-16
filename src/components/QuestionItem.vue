<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useLevelStore } from '../stores/quiz'
import ParchmentText from './ParchmentText.vue'
import CelebrationAnimation from './CelebrationAnimation.vue'

const emit = defineEmits(['next'])

interface Answer {
  type: boolean
  text: string
}

const props = defineProps({
  level: String,
  question: String,
  answers: Array<Answer>,
  questionCount: Number,
  displayQuest: Number,
  reachedQuest: Number,
  fantasy: Boolean,
  heading: String
})

const levelStore = useLevelStore()
const formState = reactive({ hasError: false, success: false })

const input = ref(null)

const reachedNextLevel =
  levelStore.levels.indexOf(levelStore.level) > levelStore.levels.indexOf(props.level)
const reachedLevelAndQuest =
  (levelStore.reached(props.level) && props.reachedQuest > props.displayQuest) || reachedNextLevel

let givenAnswer: Number

const correctAnswer = props.answers
  .map((answer, index) => ({ answer, index }))
  .find((answerPlusIndex) => answerPlusIndex.answer.type === true).index

const successDuration =
  props.level === 'final-riddle' ? 10000 : import.meta.env.VITE_SUCCESS_DURATION || 3000

function submit() {
  console.log('blasubmit')
  if (correctAnswer === givenAnswer || import.meta.env.VITE_SKIP_ALLOWED === 'true') {
    console.log('correct', correctAnswer, givenAnswer)
    formState.success = true
    document.body.classList.add('success')
    setTimeout(() => {
      formState.success = false
      emit('next')
      document.body.classList.remove('success')
    }, successDuration)
  } else {
    console.debug('wrong', correctAnswer, givenAnswer)
    formState.hasError = true
    setTimeout(() => {
      formState.hasError = false
    }, 1000)
  }
}
</script>

<template>
  <ParchmentText :fantasy="props.fantasy">
    <div v-if="formState.success === true">
      <p>
        Richtig! {{ props.level === 'fantasy-quiz' ? '🧙‍♂️' : '🥳' }} Bewahrt die Antwort gut auf...
      </p>
      <CelebrationAnimation v-if="props.level === 'final-riddle'" :duration="successDuration" />
    </div>
    <form v-else>
      <h1>
        {{
          props.heading
            ? props.heading
            : props.displayQuest !== undefined
            ? `Frage Nummer ${props.displayQuest}`
            : 'Naechste Frage'
        }}
      </h1>
      <p v-html="props.question"></p>
      <div class="answer" v-for="(item, index) in props.answers" :key="`andwer-${index}`">
        <input
          type="radio"
          name="answer"
          :id="`answer_${index}`"
          :value="index"
          v-model="givenAnswer"
          @change="submit"
        />
        <label :for="`answer_${index}`">{{ item.text }}</label>
      </div>
    </form>
  </ParchmentText>
</template>

<style lang="scss">
@keyframes shake {
  from {
    transform: translateX(-2px);
  }

  to {
    transform: translateX(2px);
  }
}

input {
  padding: 15px;
  border-radius: 4px;
  border: none;
  outline: 2px solid var(--outline-color);
  font-size: 22px;
  margin-top: 10px;
  color: white;
  background: var(--input-background-color);
  font-family: var(--base-font);
  transition: all 200ms ease-in-out;

  .final-riddle & {
    width: 500px;
  }

  &:focus {
    outline-width: 4px;
    outline-color: var(--outline-focus-color);
  }

  &.error {
    outline-color: red;
    animation: shake 100ms infinite;
  }
}
</style>
