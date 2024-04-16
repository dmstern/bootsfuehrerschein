<script setup>
defineProps({
  fantasy: Boolean
})
</script>

<template>
  <div class="parchment-text" :class="{ fantasy }">
    <div class="parchment-text__inner">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.parchment-text {
  &.fantasy {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('/pergament.png') no-repeat;
    background-size: 100% 100%;
    max-width: 100%;
    max-height: 100%;
    color: var(--color-background);

    input {
      background-color: transparent;
      outline: none;
      border-bottom: 2px var(--color-background);
      border-bottom-style: dotted;
      color: var(--color-background);
    }
  }

  &__inner {
    padding: 100px 220px;

    .quiz-end & {
      padding-top: 170px;
      padding-bottom: 170px;
    }

    .success & {
      padding-top: 200px;
      padding-bottom: 200px;
    }
  }
}
</style>
