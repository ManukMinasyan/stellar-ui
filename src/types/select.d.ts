import { select } from '../ui.config'
import type { NestedKeyOf } from '.'
import colors from '#ui-colors'

export type SelectSize = keyof typeof select.size
export type SelectColor = keyof typeof select.color | typeof colors[number]
export type SelectVariant = keyof typeof select.variant | NestedKeyOf<typeof select.color>