<script setup lang="ts">
import { useLevelStore } from '../stores/quiz'
import Card from './Card.vue';
import AnswerComponent from './AnswerComponent.vue'

interface Answer {
  type: boolean
  text: string
}

const emit = defineEmits(['next'])

const props = defineProps({
  level: String,
  question: String,
  answers: Array<Answer>,
  questionCount: Number,
  displayQuest: Number,
  reachedQuest: Number,
  heading: String
})

const levelStore = useLevelStore()

const reachedNextLevel =
  levelStore.levels.indexOf(levelStore.level) > levelStore.levels.indexOf(props.level)
const reachedLevelAndQuest =
  (levelStore.reached(props.level) && props.reachedQuest > props.displayQuest) || reachedNextLevel

const correctAnswer = props.answers
  .map((answer, index) => ({ answer, index }))
  .find((answerPlusIndex) => answerPlusIndex.answer.type === true).index

</script>

<template>
  <Card>
    <!-- <div v-if="formState.success === true">
      <p>
        Richtig! 👨‍✈
      </p>
      <CelebrationAnimation v-if="props.level === 'final-riddle'" :duration="successDuration" />
    </div> -->
    <form>
      <h2>
        {{
          props.heading
            ? props.heading
            : props.displayQuest !== undefined
              ? `Frage Nummer ${props.displayQuest}`
              : 'Naechste Frage'
        }}
      </h2>
      <p class="question" v-html="props.question"></p>
      <AnswerComponent v-for="(item, index) in props.answers" :key="`andwer-${index}`" :answer="item" :index="index"
        :isCorrectAnswer="correctAnswer === index" @next="emit('next')"/>
    </form>
  </Card>
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

.question {
  margin: 1em 0;
  font-style: italic;
}

</style>
