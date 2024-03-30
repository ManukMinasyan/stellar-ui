import { ExtractPropTypes, Ref } from 'vue'

export type Function = (...args: any[]) => {
    name: string
}
export interface UseStateEffectConfig {
    readonly name?: string | null
    readonly destroy?: boolean | 'custom'
    readonly debug?: boolean
}
export type UseStateEffectOptions<T = any> = {
    readonly destroyLabels: string[]
    readonly props: ExtractPropTypes<{ stateEffectDestroyLabel: string } | T>
}
export type UseStateEffect = (
    args: UseStateEffectOptions<args.props>,
) => Ref<null> | { [x: string]: Ref<null> | UseStateEffectSignature }
export type UseStateEffectSignature = { _syg: string | 'StateEffect'; _uid: number }

export class StateEffect<T = Function> {
    [state: 'StateEffect']: T
    _syg: string | 'StateEffect'
    _uid: number
    constructor(state: T, uid: number): state
}
export function useStateEffect<T extends (...args: any[]) => ReturnType<T>>(
    composable: T,
    config?: UseStateEffectConfig,
): (opts?: UseStateEffectOptions<opts.props>) => {
    [keyof in string | 'state']: ReturnType<T>
}