import { range } from '../ui.config'
import type { ExtractDeepKey } from '.'
import type { AppConfig } from 'nuxt/schema'
import colors from '@/constants/colors.config'

export type RangeSize = keyof typeof range.size | ExtractDeepKey<AppConfig, ['ui', 'range', 'size']>
export type RangeColor = typeof colors[number]