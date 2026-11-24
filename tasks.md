# tasks.md - Clicker Game

## Phase 1: Project Setup
1. [ ] Verify Vite + Vue 3 + TypeScript project runs (`npm run dev`)
2. [ ] Remove HelloWorld boilerplate; create empty `src/components/`, `src/composable/`, `src/types/`
3. [ ] Configure `tsconfig` paths if needed; confirm `npm run build` passes
4. [ ] Test: project builds and dev server starts without errors

## Phase 2: Types
1. [ ] Create `src/types/game.ts` with `Upgrade` and `GameState` interfaces
2. [ ] Export default upgrade list (id, name, description, baseCost, costMultiplier, level=0, pointsPerSecond)
3. [ ] Test: TypeScript compiles `game.ts` with no type errors

## Phase 3: Composable (useGameState)
1. [ ] Create `src/composable/useGameState.ts` with reactive `points`, `upgrades`, `totalClicks`
2. [ ] Implement `click()` incrementing points and totalClicks
3. [ ] Implement `upgradeCost(upgrade)` computed exponential formula
4. [ ] Implement `totalPointsPerSecond` computed
5. [ ] Implement `buyUpgrade(id)` with affordability check and level increment
6. [ ] Implement auto-click `setInterval` (1s) adding pointsPerSecond; store interval id
7. [ ] Add `onMounted`/`onUnmounted` lifecycle to start/stop interval
8. [ ] Add localStorage load on init with try/catch + JSON validation + defaults
9. [ ] Add `watch` to persist state to localStorage with try/catch
10. [ ] Test: composable logic manually verified (click, buy, auto-click, persistence)

## Phase 4: Components
1. [ ] Create `src/components/GameButton.vue` (emits `click`)
2. [ ] Create `src/components/ScoreDisplay.vue` (props points, pointsPerSecond)
3. [ ] Create `src/components/UpgradeItem.vue` (props upgrade, cost; emits `buy`)
4. [ ] Create `src/components/UpgradeShop.vue` (props upgrades; emits `buy`)
5. [ ] Test: each component renders without runtime errors

## Phase 5: Root Wiring
1. [ ] Create `src/ClickerGame.vue` importing components and composable
2. [ ] Wire GameButton click -> `click()`
3. [ ] Wire ScoreDisplay to computed values
4. [ ] Wire UpgradeShop buy -> `buyUpgrade(id)`
5. [ ] Test: full click/buy flow works end-to-end in browser

## Phase 6: Styling & UX
1. [ ] Add basic CSS layout for button, score, shop
2. [ ] Disable buy button when unaffordable
3. [ ] Show current level and cost per upgrade
4. [ ] Test: UI displays correctly and buttons enable/disable as expected

## Phase 7: Verification
1. [ ] Run `npm run build` (typecheck + build) with zero errors
2. [ ] Manual test: click increases points; buy upgrade deducts points; auto-click adds points/sec
3. [ ] Manual test: refresh page retains progress via localStorage
4. [ ] Manual test: corrupt localStorage -> falls back to defaults without crash
5. [ ] Test: all verification scenarios pass
