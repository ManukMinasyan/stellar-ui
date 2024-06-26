import {ref, onMounted, watchEffect} from 'vue'
import type {Ref} from 'vue'

import {
    popperGenerator,
    VirtualElement,
    eventListeners,
    flip,
    offset,
    popperOffsets,
    applyStyles,
    preventOverflow,
    computeStyles,
    arrow
} from '@popperjs/core'

import type {Instance} from '@popperjs/core'
import {omitBy, isUndefined} from 'lodash-es'
import {MaybeElement, unrefElement} from '@vueuse/core'
import type {PopperOptions} from '../types'

export const createPopper = popperGenerator({
    defaultModifiers: [popperOffsets, applyStyles, offset, flip, preventOverflow, computeStyles, eventListeners, arrow]
})

export function usePopper({
                              locked = false,
                              overflowPadding = 8,
                              offsetDistance = 8,
                              offsetSkid = 0,
                              gpuAcceleration = true,
                              adaptive = true,
                              scroll = true,
                              resize = true,
                              placement,
                              strategy
                          }: PopperOptions, virtualReference?: Ref<Element | VirtualElement>) {
    const reference = ref<MaybeElement>(null)
    const popper = ref<MaybeElement>(null)
    const instance = ref<Instance | null>(null)

    onMounted(() => {
        watchEffect((onInvalidate) => {
            if (!popper.value) {
                return
            }
            if (!reference.value && !virtualReference?.value) {
                return
            }

            const popperEl = unrefElement(popper)
            const referenceEl = virtualReference?.value || unrefElement(reference)

            // if (!(referenceEl instanceof HTMLElement)) { return }
            if (!(popperEl instanceof HTMLElement)) {
                return
            }
            if (!referenceEl) {
                return
            }

            instance.value = createPopper(referenceEl, popperEl, omitBy({
                placement,
                strategy,
                modifiers: [{
                    name: 'flip',
                    enabled: !locked
                }, {
                    name: 'preventOverflow',
                    options: {
                        padding: overflowPadding
                    }
                }, {
                    name: 'offset',
                    options: {
                        offset: [offsetSkid, offsetDistance]
                    }
                }, {
                    name: 'computeStyles',
                    options: {
                        adaptive,
                        gpuAcceleration
                    }
                }, {
                    name: 'eventListeners',
                    options: {
                        scroll,
                        resize
                    }
                },
                    {
                        name: 'arrow',
                        enabled: arrow
                    }
                ]
            }, isUndefined))

            onInvalidate(instance.value.destroy)
        })
    })

    return [reference, popper, instance] as const
}