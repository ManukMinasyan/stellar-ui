<template>
  <component
      :is="as"
      :disabled="disabled"
      v-bind="$attrs"
      :class="inactiveClass"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { isEqual } from 'ohash'
import { defineComponent } from 'vue'

export default defineComponent({
  inheritAttrs: false,
  props: {
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
  setup (props) {
    function resolveLinkClass (route, $route, { isActive, isExactActive }: { isActive: boolean, isExactActive: boolean }) {
      if (props.active) {
        return props.activeClass
      }

      if (props.exactQuery && !isEqual(route.query, $route.query)) {
        return props.inactiveClass
      }
      if (props.exactHash && route.hash !== $route.hash) {
        return props.inactiveClass
      }

      if (props.exact && isExactActive) {
        return props.activeClass
      }

      if (!props.exact && isActive) {
        return props.activeClass
      }

      return props.inactiveClass
    }

    return {
      resolveLinkClass
    }
  }
})
</script>