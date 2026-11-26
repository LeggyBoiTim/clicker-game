<script setup lang="ts">
import type { Upgrade } from '../types/game'

defineProps<{
  upgrade: Upgrade
  cost: number
  points: number
}>()

defineEmits<{ (e: 'buy'): void }>()
</script>

<template>
  <div class="upgrade-item">
    <div class="upgrade-info">
      <h3>{{ upgrade.name }}</h3>
      <p class="description">{{ upgrade.description }}</p>
      <p class="stats">Level: {{ upgrade.level }} · Cost: {{ cost }} · +{{ upgrade.pointsPerSecond }} points/sec</p>
    </div>
    <button type="button" :disabled="points < cost" @click="$emit('buy')">Buy</button>
  </div>
</template>

<style scoped>
.upgrade-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.75rem 1rem;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: var(--bg);
}

.upgrade-info {
  text-align: left;
}

.upgrade-info h3 {
  margin: 0 0 0.25rem;
  font-size: 1.1rem;
  color: var(--text-h);
}

.description {
  margin: 0 0 0.25rem;
  font-size: 0.9rem;
  color: var(--text);
}

.stats {
  margin: 0;
  font-size: 0.85rem;
  color: var(--text);
}

button {
  padding: 0.5rem 1rem;
  border: 1px solid var(--accent-border);
  border-radius: 8px;
  background: var(--accent-bg);
  color: var(--accent);
  cursor: pointer;
  white-space: nowrap;
}

button:hover {
  background: var(--accent);
  color: #fff;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
