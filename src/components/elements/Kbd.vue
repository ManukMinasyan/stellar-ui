<template>
  <kbd :class="[ui.base, ui.size[size], ui.padding, ui.rounded, ui.font, ui.background, ui.ring]">
    <slot>{{ value }}</slot>
  </kbd>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PropType } from 'vue'
import { defu } from 'defu'
// TODO: Remove
// @ts-expect-error
import appConfig from '../../constants/app.config.ts'

export default defineComponent({
  props: {
    value: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: () => appConfig.ui.kbd.default.size,
      validator (value: string) {
        return Object.keys(appConfig.ui.kbd.size).includes(value)
      }
    },
    ui: {
      type: Object as PropType<Partial<typeof appConfig.ui.kbd>>,
      default: () => appConfig.ui.kbd
    }
  },
  setup (props) {
    const ui = computed<Partial<typeof appConfig.ui.kbd>>(() => defu({}, props.ui, appConfig.ui.kbd))

    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui
    }
  }
})
</script>