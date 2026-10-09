/* Fluid responsive stage: always fills 100% of the device screen (no black bars / letterboxing) */
export const STAGE = { width: 1600, height: 900 }

export type StageFit = { width: number; height: number; scale: number }

let current: StageFit = { width: 0, height: 0, scale: 1 }

export const fitStage = (viewWidth: number, viewHeight: number): StageFit => {
  current = { width: viewWidth, height: viewHeight, scale: 1 }
  return current
}

/** how much the stage is scaled on screen */
export const stageScale = () => current.scale
