<script setup lang="ts">
import type { PropType } from 'vue'
import { reactive, ref } from "vue";

interface Answer {
  type: boolean
  text: string
}

const props = defineProps({
  index: Number,
  answer: Object as PropType<Answer>,
  isCorrectAnswer: Boolean
})

const radioButton = ref(null);

const emit = defineEmits(['next'])

const formState = reactive({ hasError: false, success: false, hadError: false })

let givenAnswer: Number

const successDuration = 2000

function clickAnswer() {
  radioButton.value.click();
}

function submit() {
  if (props.isCorrectAnswer || import.meta.env.VITE_SKIP_ALLOWED === 'true') {
    formState.success = true
    setTimeout(() => {
      formState.success = false
      emit('next')
    }, successDuration)
  } else {
    formState.hasError = true
    formState.hadError = true
    setTimeout(() => {
      formState.hasError = false
    }, 1000)
  }
}
</script>

<template>
  <div class="answer" :class="formState.hasError ? 'error' : formState.success ? 'success' : formState.hadError ? 'had-error': ''" @click="clickAnswer">
    <input class="radio" type="radio" name="answer" :id="`answer_${props.index}`" :value="props.index"
      v-model="givenAnswer" @change="submit" ref="radioButton"/>
    <label class="label" :for="`answer_${props.index}`">{{ props.answer.text }}</label>
    <svg width="24" height="24" v-if="props.isCorrectAnswer" class="icon icon--checkmark" data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke-linecap="round"
        stroke-linejoin="round"></path>
    </svg>
  </div>
</template>

<style>
.answer {
  --state-color: 230, 230, 230, .5;
  display: flex;
  align-items: baseline;
  border: 2px solid rgb(var(--state-color));
  border-radius: 1rem;
  padding: 1em;
  margin: .8rem 0;
  background-color: rgba(var(--state-color), 0.3);
  transition: all 500ms ease;
  width: 100%;

  &.error {
    --state-color: var(--color-error);
    animation: shake 100ms infinite;
  }

  &.success {
    --state-color: var(--color-success);
  }

  &.had-error {
    opacity: 0.5;
  }
}

.radio {
  margin-right: 1rem;
  appearance: none;
  &::before {
    content: "⛵";
  }
}

.label {
  flex-grow: 1;
}

.icon {
  width: 32px;
  height: 32px;
  opacity: 0;
  transition: opacity 500ms ease;
  margin-left: 1rem;
  align-self: flex-start;

  .success & {
    opacity: 1;
  }
}
</style>