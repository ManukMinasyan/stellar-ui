import { getCurrentInstance, ref, onServerPrefetch, onMounted } from 'vue'

const ATTR_KEY = 'data-v-ids'
const SEPARATOR = '-'

let globalIdCounter = 0

export function useId(key = '') {
    if (typeof key !== 'string') {
        throw new TypeError('[vue] [useId] key must be a string.')
    }
    // Make sure key starts with a letter to be a valid selector
    key = `v${key.slice(1)}`

    const instance = getCurrentInstance()
    if (!instance) {
        throw new TypeError('[vue] `useId` must be called within a component setup function.')
    }

    const localId = ref(key + SEPARATOR + (instance.uid || globalIdCounter++))

    onServerPrefetch(() => {
        const ids = JSON.parse(instance.vnode.el?.getAttribute?.(ATTR_KEY) || '{}')
        ids[localId.value] = key + SEPARATOR + globalIdCounter++
        instance.vnode.el?.setAttribute(ATTR_KEY, JSON.stringify(ids))
    })

    onMounted(() => {
        const el = instance.vnode.el
        const ids = JSON.parse(el?.getAttribute?.(ATTR_KEY) || '{}')
        if (ids[localId.value]) {
            localId.value = ids[localId.value]
        } else {
            // pure client-side ids, avoiding potential collision with server-side ids
            localId.value = key + '_' + globalIdCounter++
        }
    })

    return localId.value
}