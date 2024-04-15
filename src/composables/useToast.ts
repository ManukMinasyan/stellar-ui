import type { Notification } from '../types/notification'
import { createGlobalState } from '@vueuse/core'
import {ref} from "vue";

const sharedToastState = () => {
    const notifications = ref([])

    function add (notification: Partial<Notification>) {
        const body = {
            id: new Date().getTime().toString(),
            ...notification
        }

        const index = notifications.value.findIndex((n: Notification) => n.id === body.id)
        if (index === -1) {
            notifications.value.push(body as Notification)
        }

        return body
    }

    function remove (id: string) {
        notifications.value = notifications.value.filter((n: Notification) => n.id !== id)
    }

    return {
        notifications,
        add,
        remove
    }
}

export const useToastSharedState: any = createGlobalState(sharedToastState)

export function useToast () {
    const {add, remove} = useToastSharedState()

    return {
        add,
        remove
    }
}