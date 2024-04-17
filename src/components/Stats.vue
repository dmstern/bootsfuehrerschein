<script setup lang="ts">
import { useStatsStore } from "../stores/quiz.ts"
import Card from "./Card.vue"
const statsStore = useStatsStore();
</script>
<template>
  <Card class="stats">
    <h2>Stats</h2>
    <table class="stats__table">
      <tr>
        <td>Fragen:</td>
        <td>{{ statsStore.stats.length - 1 }}</td>
      </tr>
      <tr>
        <td>Fails:</td>
        <td>
          {{ statsStore.stats.length ? statsStore.stats.reduce((a, b) => ({ fails: a.fails + b.fails, success: false })).fails : 0 }}
        </td>
      </tr>
      <tr>
        <td>Richtig:</td>
        <td>
          {{ statsStore.stats.length ? statsStore.stats.filter(q => q.success).length : 0 }}
        </td>
      </tr>
      <tr class="stats__percentage"
        :class="Math.round((statsStore.stats.length ? statsStore.stats.filter(q => q.success).length : 0) / (statsStore.stats.length - 1) * 100) >= 80 ? 'success' : ''">
        <td>Anteil richtig:</td>
        <td>
          {{ Math.round((statsStore.stats.length ? statsStore.stats.filter(q => q.success).length : 0) / (statsStore.stats.length - 1) * 100) }}%
        </td>
      </tr>
    </table>
  </Card>

</template>

<style lang="scss">
.stats {
  border-radius: 2rem;
  width: 300px;

  &__table {
    width: 100%;
  }

  &__percentage {
    color: rgb(var(--color-error));

    &.success {
      color: rgb(var(--color-success));
    }
  }

  .card__inner {
    padding: 2rem;
  }
}
</style>
