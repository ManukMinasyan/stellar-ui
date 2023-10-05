import { computed, toValue, useAttrs } from 'vue'
import appConfig from '../constants/app.config'
import { mergeConfig, omit, get } from '../utils'
import { Strategy } from '../types'

export const useUI = <T>(key, $ui: Partial<T & { strategy: Strategy }>, $config?: T, { mergeWrapper = false }: { mergeWrapper?: boolean } = {}) => {
    const $attrs = useAttrs()

    const ui = computed(() => mergeConfig<T>(
        $ui?.strategy || (appConfig.ui?.strategy as Strategy),
        mergeWrapper ? { wrapper: $attrs?.class } : {},
        $ui || {},
        import.meta.env.dev ? get(appConfig.ui, key, {}) : {},
        toValue($config || {})
    ))
    const attrs = computed(() => omit($attrs, ['class']))

    return {
        ui,
        attrs,
        attrsClass: mergeWrapper ? undefined : $attrs?.class as string
    }
}