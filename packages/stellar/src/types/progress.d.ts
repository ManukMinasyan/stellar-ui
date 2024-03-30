import { progress } from '../ui.config'
import colors from '@/constants/colors.config'

export type ProgressSize = keyof typeof progress.progress.size
export type ProgressAnimation = keyof typeof progress.animation
export type ProgressColor = typeof colors[number]