<script setup lang="ts">
defineProps<{
  points: number
  pointsPerSecond: number
}>()
</script>

<template>
  <div class="score-display">
    <p class="score">Points: {{ points }}</p>
    <p class="rate">Points/sec: {{ pointsPerSecond }}</p>
  </div>
</template>

<style scoped>
.score-display {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem 1.5rem;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--accent-bg);
  min-width: 220px;
}

.score {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-h);
}

.rate {
  font-size: 1rem;
  color: var(--text);
}
</style>
