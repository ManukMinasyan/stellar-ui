import type { Notification } from '../types/notification'
import {useStateEffect} from "@/composables/useState";
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

// @ts-expect-error
export const useToastSharedState: any = useStateEffect(sharedToastState, {
    name: 'sharedToastState',
    debug: false,
    destroy: false,
})

export function useToast () {
    const {sharedToastState: {add, remove}} = useToastSharedState()

    return {
        add,
        remove
    }
}