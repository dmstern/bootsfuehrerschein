<template>
  <div class="card">
    <div class="card__inner">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.card {
  border-radius: 50px;
  border: 2px solid var(--outline-color);
  background: linear-gradient(0deg, var(--plane-color) 0%, var(--plane-color--bright) 100%);

  &__inner {
    padding: 100px;

    .quiz-end & {
      padding-top: 170px;
      padding-bottom: 170px;
    }
  }
}
</style>
