<script lang="ts">
import type { VariantProps } from 'tailwind-variants'
import type { AppConfig } from '@/types/config'
import _appConfig from '#build/app.config'
import theme from '#build/ui/button'
import { tv } from '../utils/tv'
import type { PartialString } from '../types/utils'

const appConfigButton = _appConfig as AppConfig & { ui: { button: Partial<typeof theme> } }

const button = tv({ extend: tv(theme), ...(appConfigButton.ui?.button || {}) })

type ButtonVariants = VariantProps<typeof button>

export interface ButtonProps extends Omit<'raw' | 'custom'> {
  label?: string
  color?: ButtonVariants['color']
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  /** Render the button with equal padding on all sides. */
  square?: boolean
  /** Render the button full width. */
  block?: boolean
  /** Set loading state automatically based on the `@click` promise state */
  loadingAuto?: boolean
  onClick?: ((event: MouseEvent) => void | Promise<void>) | Array<((event: MouseEvent) => void | Promise<void>)>
  class?: any
  ui?: PartialString<typeof button.slots>
}

// Injects props to use as default in the devtools playground.

export interface ButtonSlots {
  leading(props?: {}): any
  default(props?: {}): any
  trailing(props?: {}): any
}
</script>

<script setup lang="ts">
import { type Ref, computed, ref, inject } from 'vue'
import { useForwardProps } from 'reka-ui'
import { useButtonGroup } from '@/composables/useButtonGroup'
import { formLoadingInjectionKey } from '../composables/useFormField'
import { omit } from '../utils'
import { pickLinkProps } from '../utils/link'
import ULink from './Link.vue'

const props = defineProps<ButtonProps>()
const slots = defineSlots<ButtonSlots>()

const linkProps = useForwardProps(pickLinkProps(props))

const { orientation, size: buttonSize } = useButtonGroup<ButtonProps>(props)

const loadingAutoState = ref(false)
const formLoading = inject<Ref<boolean> | undefined>(formLoadingInjectionKey, undefined)

async function onClickWrapper(event: MouseEvent) {
  loadingAutoState.value = true
  const callbacks = Array.isArray(props.onClick) ? props.onClick : [props.onClick]
  try {
    await Promise.all(callbacks.map(fn => fn?.(event)))
  } finally {
    loadingAutoState.value = false
  }
}

const isLoading = computed(() => {
  return props.loading || (props.loadingAuto && (loadingAutoState.value || (formLoading?.value && props.type === 'submit')))
})

const ui = computed(() => button({
  color: props.color,
  variant: props.variant,
  size: buttonSize.value,
  loading: isLoading.value,
  block: props.block,
  square: props.square || (!slots.default && !props.label),
  buttonGroup: orientation.value
}))
</script>

<template>
  <ULink
      :type="type"
      :disabled="disabled || isLoading"
      :class="ui.base({ class: [props.class, props.ui?.base] })"
      v-bind="omit(linkProps, ['type', 'disabled'])"
      raw
      @click="onClickWrapper"
  >
    <slot>
      <span v-if="label" :class="ui.label({ class: props.ui?.label })">
        {{ label }}
      </span>
    </slot>
  </ULink>
</template>