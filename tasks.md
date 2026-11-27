# tasks.md - Clicker Game

## Phase 1: Project Setup
1. [x] Verify Vite + Vue 3 + TypeScript project runs (`npm run dev`)
2. [x] Remove HelloWorld boilerplate; create empty `src/components/`, `src/composables/`, `src/types/`
3. [x] Configure `tsconfig` paths if needed; confirm `npm run build` passes
4. [x] Test: project builds and dev server starts without errors

## Phase 2: Types
1. [x] Create `src/types/game.ts` with `Upgrade` and `GameState` interfaces
2. [x] Export default upgrade list (id, name, description, baseCost, costMultiplier, level=0, pointsPerSecond)
3. [x] Test: TypeScript compiles `game.ts` with no type errors

## Phase 3: Composable (useGameState)
1. [x] Create `src/composables/useGameState.ts` with reactive `points`, `upgrades`, `totalClicks`
2. [x] Implement `click()` incrementing points and totalClicks
3. [x] Implement `upgradeCost(upgrade)` computed exponential formula
4. [x] Implement `totalPointsPerSecond` computed
5. [x] Implement `buyUpgrade(id)` with affordability check and level increment
6. [x] Implement auto-click `setInterval` (1s) adding pointsPerSecond; store interval id
7. [x] Add `onMounted`/`onUnmounted` lifecycle to start/stop interval
8. [x] Add localStorage load on init with try/catch + JSON validation + defaults
9. [x] Add `watch` to persist state to localStorage with try/catch
10. [x] Test: composable logic manually verified (click, buy, auto-click, persistence)

## Phase 4: Components
1. [x] Create `src/components/GameButton.vue` (emits `click`)
2. [x] Create `src/components/ScoreDisplay.vue` (props points, pointsPerSecond)
3. [x] Create `src/components/UpgradeItem.vue` (props upgrade, cost; emits `buy`)
4. [x] Create `src/components/UpgradeShop.vue` (props upgrades; emits `buy`)
5. [x] Test: each component renders without runtime errors

## Phase 5: Root Wiring
1. [x] Create `src/ClickerGame.vue` importing components and composable
2. [x] Wire GameButton click -> `click()`
3. [x] Wire ScoreDisplay to computed values
4. [x] Wire UpgradeShop buy -> `buyUpgrade(id)`
5. [x] Test: full click/buy flow works end-to-end in browser

## Phase 6: Styling & UX
1. [x] Add basic CSS layout for button, score, shop
2. [x] Disable buy button when unaffordable
3. [x] Show current level and cost per upgrade
4. [x] Test: UI displays correctly and buttons enable/disable as expected

## Phase 7: Verification
1. [x] Run `npm run build` (typecheck + build) with zero errors
2. [x] Manual test: click increases points; buy upgrade deducts points; auto-click adds points/sec
3. [x] Manual test: refresh page retains progress via localStorage
4. [x] Manual test: corrupt localStorage -> falls back to defaults without crash
5. [x] Test: all verification scenarios pass
