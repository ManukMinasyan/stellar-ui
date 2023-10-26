<template>
  <component
      :is="as"
      v-if="!to"
      :disabled="disabled"
      v-bind="$attrs"
      :class="inactiveClass"
  >
    <slot/>
  </component>
  <a
      v-else
      v-bind="$attrs"
      :href="to.toString()"
      :aria-disabled="disabled ? 'true' : undefined"
      :role="disabled ? 'link' : undefined"
      :rel="rel"
      :target="target"
      class="no-underline	"
  >
    <slot />
  </a>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import type { PropType } from 'vue'

export default defineComponent({
  inheritAttrs: false,
  props: {
    to: {
      type: [String, Object],
      default: undefined,
      required: false
    },
    href: {
      type: [String, Object],
      default: undefined,
      required: false
    },

    // Attributes
    target: {
      type: String as PropType<string>,
      default: undefined,
      required: false
    },
    rel: {
      type: String as PropType<string>,
      default: undefined,
      required: false
    },
    noRel: {
      type: Boolean as PropType<boolean>,
      default: undefined,
      required: false
    },


    as: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: null
    },
    active: {
      type: Boolean,
      default: false
    },
    exact: {
      type: Boolean,
      default: false
    },
    exactQuery: {
      type: Boolean,
      default: false
    },
    exactHash: {
      type: Boolean,
      default: false
    },
    inactiveClass: {
      type: String,
      default: undefined
    }
  },
})
</script>