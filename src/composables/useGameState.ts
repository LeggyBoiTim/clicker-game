import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { defaultUpgrades } from '../types/game'
import type { Upgrade } from '../types/game'

const STORAGE_KEY = 'clicker-game-state'

function isUpgrade(value: unknown): value is Upgrade {
  if (typeof value !== 'object' || value === null) return false
  const v = value as Record<string, unknown>
  return (
    typeof v.id === 'string' &&
    typeof v.name === 'string' &&
    typeof v.description === 'string' &&
    typeof v.baseCost === 'number' && Number.isFinite(v.baseCost) &&
    typeof v.costMultiplier === 'number' && Number.isFinite(v.costMultiplier) &&
    typeof v.level === 'number' && Number.isFinite(v.level) && v.level >= 0 &&
    typeof v.pointsPerSecond === 'number' && Number.isFinite(v.pointsPerSecond)
  )
}

export function useGameState() {
  const points = ref(0)
  const upgrades = ref<Upgrade[]>(defaultUpgrades.map((u) => ({ ...u })))
  const totalClicks = ref(0)

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) return
      const parsed = JSON.parse(raw) as unknown
      if (typeof parsed !== 'object' || parsed === null) return
      const data = parsed as Record<string, unknown>

      if (typeof data.points === 'number' && Number.isFinite(data.points)) points.value = Math.round(data.points)
      if (typeof data.totalClicks === 'number' && Number.isFinite(data.totalClicks)) totalClicks.value = Math.round(data.totalClicks)

      if (Array.isArray(data.upgrades)) {
        const savedById = new Map<string, Upgrade>()
        for (const entry of data.upgrades) if (isUpgrade(entry)) savedById.set(entry.id, entry)
        upgrades.value = defaultUpgrades.map((def) => {
          const saved = savedById.get(def.id)
          return saved ? { ...def, level: saved.level } : { ...def }
        })
      }
    } catch {
    }
  }

  loadState()

  watch(
    [points, upgrades, totalClicks],
    () => {
      try {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({ points: points.value, upgrades: upgrades.value, totalClicks: totalClicks.value })
        )
      } catch {
      }
    },
    { deep: true }
  )

  function click() {
    points.value += 1
    totalClicks.value += 1
  }

  function upgradeCost(upgrade: Upgrade): number {
    return Math.round(upgrade.baseCost * upgrade.costMultiplier ** upgrade.level)
  }

  const totalPointsPerSecond = computed(() =>
    upgrades.value.reduce((sum, u) => sum + u.pointsPerSecond * u.level, 0)
  )

  function buyUpgrade(id: string) {
    const upgrade = upgrades.value.find((u) => u.id === id)
    if (!upgrade) return

    const cost = upgradeCost(upgrade)
    if (points.value < cost) return

    points.value -= cost
    upgrade.level += 1
  }

  let intervalId: ReturnType<typeof setInterval> | null = null

  function startAutoClick() {
    if (intervalId !== null) return
    intervalId = setInterval(() => {
      points.value += Math.round(totalPointsPerSecond.value)
    }, 1000)
  }

  function stopAutoClick() {
    if (intervalId !== null) {
      clearInterval(intervalId)
      intervalId = null
    }
  }

  onMounted(() => startAutoClick())
  onUnmounted(() => stopAutoClick())

  return { points, upgrades, totalClicks, click, upgradeCost, totalPointsPerSecond, buyUpgrade, startAutoClick, stopAutoClick }
}
