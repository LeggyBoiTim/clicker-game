# tasks.md - Clicker Game

## Phase 1: Project Setup
- [ ] Verify Vite + Vue 3 + TypeScript project runs (`npm run dev`)
- [ ] Remove HelloWorld boilerplate; create empty `src/components/`, `src/composable/`, `src/types/`
- [ ] Configure `tsconfig` paths if needed; confirm `npm run build` passes
- [ ] Test: project builds and dev server starts without errors

## Phase 2: Types
- [ ] Create `src/types/game.ts` with `Upgrade` and `GameState` interfaces
- [ ] Export default upgrade list (id, name, description, baseCost, costMultiplier, level=0, pointsPerSecond)
- [ ] Test: TypeScript compiles `game.ts` with no type errors

## Phase 3: Composable (useGameState)
- [ ] Create `src/composable/useGameState.ts` with reactive `points`, `upgrades`, `totalClicks`
- [ ] Implement `click()` incrementing points and totalClicks
- [ ] Implement `upgradeCost(upgrade)` computed exponential formula
- [ ] Implement `totalPointsPerSecond` computed
- [ ] Implement `buyUpgrade(id)` with affordability check and level increment
- [ ] Implement auto-click `setInterval` (1s) adding pointsPerSecond; store interval id
- [ ] Add `onMounted`/`onUnmounted` lifecycle to start/stop interval
- [ ] Add localStorage load on init with try/catch + JSON validation + defaults
- [ ] Add `watch` to persist state to localStorage with try/catch
- [ ] Test: composable logic manually verified (click, buy, auto-click, persistence)

## Phase 4: Components
- [ ] Create `src/components/GameButton.vue` (emits `click`)
- [ ] Create `src/components/ScoreDisplay.vue` (props points, pointsPerSecond)
- [ ] Create `src/components/UpgradeItem.vue` (props upgrade, cost; emits `buy`)
- [ ] Create `src/components/UpgradeShop.vue` (props upgrades; emits `buy`)
- [ ] Test: each component renders without runtime errors

## Phase 5: Root Wiring
- [ ] Create `src/ClickerGame.vue` importing components and composable
- [ ] Wire GameButton click -> `click()`
- [ ] Wire ScoreDisplay to computed values
- [ ] Wire UpgradeShop buy -> `buyUpgrade(id)`
- [ ] Test: full click/buy flow works end-to-end in browser

## Phase 6: Styling & UX
- [ ] Add basic CSS layout for button, score, shop
- [ ] Disable buy button when unaffordable
- [ ] Show current level and cost per upgrade
- [ ] Test: UI displays correctly and buttons enable/disable as expected

## Phase 7: Verification
- [ ] Run `npm run build` (typecheck + build) with zero errors
- [ ] Manual test: click increases points; buy upgrade deducts points; auto-click adds points/sec
- [ ] Manual test: refresh page retains progress via localStorage
- [ ] Manual test: corrupt localStorage -> falls back to defaults without crash
- [ ] Test: all verification scenarios pass
