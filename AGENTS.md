# AGENTS.md - Clicker Game

## Goal
Clicker game: click for points, buy upgrades/auto-clickers that generate points/sec, persist progress in localStorage.

## Component Architecture
- components/
    - GameButton.vue: click target, emits `click`
    - ScoreDisplay.vue: shows points & points/sec
    - UpgradeShop.vue: lists upgrades, emits `buy`
    - UpgradeItem.vue: single upgrade info + buy button
- composables/
    - useGameState.ts (composable): all state, logic, persistence, auto-click loop
- types/
    - game.ts: Upgrade interface, GameState interface
- ClickerGame.vue: root layout, wires components

## TypeScript Interfaces
```ts
interface Upgrade { id: string; name: string; description: string; baseCost: number; costMultiplier: number; level: number; pointsPerSecond: number; }
interface GameState { points: number; upgrades: Upgrade[]; totalClicks: number; }
```

## Vue 3 Best Practices
- Composition API with `<script setup lang="ts">`
- Keep state in `useGameState`; components use props down, events up
- Use `computed` for derived values (cost, total points/sec)
- Use `watch` to persist state to localStorage
- Use `onMounted`/`onUnmounted` for interval lifecycle

## Key Rules
- Exponential cost: `cost = baseCost * costMultiplier ** level`
- Clean up `setInterval` in `onUnmounted`; store interval id
- Wrap localStorage read/write in try/catch; validate JSON; fall back to defaults
