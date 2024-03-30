import { input } from '../ui.config'
import type { NestedKeyOf, ExtractDeepKey, ExtractDeepObject } from '.'
import colors from '#ui-colors'

export type InputSize = keyof typeof input.size | ExtractDeepKey<['ui', 'input', 'size']>
export type InputColor = keyof typeof input.color | ExtractDeepKey<['ui', 'input', 'color']> | typeof colors[number]
export type InputVariant = keyof typeof input.variant | ExtractDeepKey<['ui', 'input', 'variant']> | NestedKeyOf<typeof input.color> | NestedKeyOf<ExtractDeepObject<['ui', 'input', 'color']>>