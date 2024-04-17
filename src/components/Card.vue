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
  border: 2px solid rgb(var(--outline-color));
  background: linear-gradient(-3deg, var(--plane-color) 0%, var(--plane-color--bright) 60%, rgb(var(--outline-color)) 100%);
  box-shadow: 5px 10px 100px rgba(0,0,0, 0.3);

  &__inner {
    padding: 100px;

    .quiz-end & {
      padding-top: 170px;
      padding-bottom: 170px;
    }
  }
}
</style>
