import type { EffectScope, Ref } from 'vue'
import { effectScope, getCurrentInstance, getCurrentScope, onBeforeMount, onBeforeUnmount, ref } from 'vue'
import { Function, UseStateEffect, UseStateEffectConfig, UseStateEffectOptions, UseStateEffectSignature } from '@/types/state-types'

const [stateEffectSig, useStateEffectSig, stateEffectDestroyLabelSig]: string[] = [
    'StateEffect',
    'useStateEffect',
    'stateEffectDestroyLabel',
]

export function useStateEffect(composable: Function, config: UseStateEffectConfig): UseStateEffect | Ref<null> {
    /**
     * Composable definition (body|type) check.
     */
    if (typeof composable !== 'function') {
        console.warn(`[${useStateEffectSig}] You need to provide composable function.`)
        return ref<null>(null)
    }
    /**
     * Default Config
     */
    let subscribers: number = 0
    let destroyed: boolean = false
    let state: any, scope: EffectScope | null
    const { name, destroy, debug }: UseStateEffectConfig = { name: null, destroy: false, debug: false, ...config }
    /**
     * Destroy State Effect.
     * @type {function}
     * @name scopeDestroy
     * @function
     */
    const scopeDestroy = (): void => {
        if (scope && subscribers > 0) {
            state.off()
            subscribers = 0
            destroyed = true
            state = scope = null
            if (debug) {
                console.debug(`${name || 'composable'} state effect destroyed:`, {
                    state,
                })
            }
        }
    }
    /**
     * Create State Effect class.
     * @param {function} state - current state effect [ReactiveEffect]
     * @type {Class} StateEffect
     * @name StateEffect
     * @class
     */
    class StateEffect {
        constructor(state: Function, uid: number = 0) {
            ;(this as any)._syg = `${name || stateEffectSig}`
            ;(this as any)._uid = uid
            Object.assign(this, state)
        }
    }
    /**
     * Create State Effect.
     * @param {Array} args - composable arguments | opts
     * @type {function}
     * @function
     */
    return (...args) => {
        /**
         * Current Vue Instance check.
         */
        if (!getCurrentInstance()) {
            console.warn(`[${useStateEffectSig}] Unable to read current instance.`)
            return ref<null>(null)
        }
        /**
         * Scope/state initialize.
         */
        if (!state && subscribers === 0) {
            subscribers++
            scope = effectScope(true)
            state = scope
            state.on()
            // @ts-ignore: unable to import callable class interface
            state.effects.push(new StateEffect(composable(...args), getCurrentInstance().uid) as Function)
            state = getCurrentScope()
            if (debug) {
                console.debug(`${name || 'composable'} state effect created:`, {
                    state,
                })
            }
        }
        /**
         * Current State Effect check.
         */
        if (!state) {
            if (!state) console.warn(`[${useStateEffectSig}] Unable to record new state effect.`)
            return ref<null>(null)
        }
        /**
         * Hooks listener initialize.
         */
        if (state && destroy) {
            if (args.length > 0) {
                const [opts]: [UseStateEffectOptions] = args
                const { destroyLabels, props } = opts
                if (opts && (!destroyLabels || !props?.stateEffectDestroyLabel)) {
                    console.warn(
                        `[${useStateEffectSig}] Define and pass ${stateEffectDestroyLabelSig} property for custom destroy.`,
                    )
                }
                if (
                    destroyLabels?.includes(
                        props?.stateEffectDestroyLabel ||
                        (props?.stateEffectDestroyLabel as unknown as { default: string })?.default,
                    )
                ) {
                    onBeforeMount(() => scopeDestroy())
                }
            }
            if (destroy !== 'custom') {
                onBeforeUnmount(() => scopeDestroy())
            }
        }
        /**
         * Get/record current State Effect.
         * @type {function|null}
         * @name recordState
         */
        const recordState: UseStateEffectSignature | null | undefined = state
            ? (state.effects as UseStateEffectSignature[]).find((effect) => effect.hasOwnProperty('_syg'))
            : null
        return {
            [name || 'state']:
            ((recordState as UseStateEffectSignature)?._syg === (name || stateEffectSig) && recordState) || ref<null>(null),
        }
    }
}