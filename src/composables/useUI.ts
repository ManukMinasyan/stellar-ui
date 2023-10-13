import { computed, toValue, useAttrs } from 'vue'
import type { Ref } from 'vue'
import appConfig from '#constants/app.config'
import { mergeConfig, omit, get } from '@/utils'
import { Strategy } from '@/types'

export const useUI = <T>(key, $ui: Ref<Partial<T & { strategy: Strategy }> | undefined>, $config?: Ref<T> | T, $wrapperClass?: Ref<string>, withAppConfig: boolean = false) => {
    const $attrs = useAttrs()

    const ui = computed(() => {
        const _ui = toValue($ui)
        const _config = toValue($config)
        const _wrapperClass = toValue($wrapperClass)

        return mergeConfig<T>(
            _ui?.strategy || (appConfig.ui?.strategy as Strategy),
            _wrapperClass ? { wrapper: _wrapperClass } : {},
            _ui || {},
            (import.meta.env.DEV || withAppConfig) ? get(appConfig.ui, key, {}) : {},
            _config || {}
        )
    })

    const attrs = computed(() => omit($attrs, ['class']))

    return {
        ui,
        attrs
    }
}