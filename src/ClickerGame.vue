<script setup lang="ts">
import { useGameState } from './composables/useGameState'
import GameButton from './components/GameButton.vue'
import ScoreDisplay from './components/ScoreDisplay.vue'
import UpgradeShop from './components/UpgradeShop.vue'

const { points, upgrades, totalPointsPerSecond, click, buyUpgrade } = useGameState()
</script>

<template>
  <main class="clicker-game">
    <ScoreDisplay :points="points" :points-per-second="totalPointsPerSecond" />
    <GameButton @click="click" />
    <UpgradeShop :upgrades="upgrades" :points="points" @buy="buyUpgrade" />
  </main>
</template>

<style scoped>
.clicker-game {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem 1rem;
  max-width: 480px;
  margin: 0 auto;
}
</style>
