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
        <td>{{ statsStore.stats.length }}</td>
      </tr>
      <tr>
        <td>Fails:</td>
        <td>{{ statsStore.stats.length ? statsStore.stats.reduce((a, b) => ({ fails: a.fails + b.fails })).fails : '0' }}
        </td>
      </tr>
    </table>
  </Card>

</template>

<style lang="scss">
.stats {
  border-radius: 2rem;
  width: 200px;

  &__table {
    width: 100%;
  }

  .card__inner {
    padding: 2rem;
  }
}
</style>
