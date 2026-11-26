export interface Upgrade {
  id: string
  name: string
  description: string
  baseCost: number
  costMultiplier: number
  level: number
  pointsPerSecond: number
}

export interface GameState {
  points: number
  upgrades: Upgrade[]
  totalClicks: number
}

export const defaultUpgrades: Upgrade[] = [
  { id: 'auto-clicker', name: 'Auto-Clicker', description: 'Automatically clicks for you.', baseCost: 10, costMultiplier: 1.15, level: 0, pointsPerSecond: 1 },
  { id: 'super-clicker', name: 'Super-Clicker', description: 'A stronger automatic clicker.', baseCost: 50, costMultiplier: 1.15, level: 0, pointsPerSecond: 5 },
  { id: 'mega-clicker', name: 'Mega-Clicker', description: 'A massive automatic clicker.', baseCost: 250, costMultiplier: 1.15, level: 0, pointsPerSecond: 25 }
]

export default defaultUpgrades
