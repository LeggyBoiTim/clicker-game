<script setup lang="ts">
import type { Upgrade } from '../types/game'
import UpgradeItem from './UpgradeItem.vue'

defineProps<{ upgrades: Upgrade[]; points: number }>()

defineEmits<{ (e: 'buy', id: string): void }>()

function cost(upgrade: Upgrade): number {
  return Math.round(upgrade.baseCost * upgrade.costMultiplier ** upgrade.level)
}
</script>

<template>
  <div class="upgrade-shop">
    <UpgradeItem
      v-for="upgrade in upgrades"
      :key="upgrade.id"
      :upgrade="upgrade"
      :cost="cost(upgrade)"
      :points="points"
      @buy="$emit('buy', upgrade.id)"
    />
  </div>
</template>

<style scoped>
.upgrade-shop {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
}
</style>
