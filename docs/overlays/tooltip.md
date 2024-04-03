---
outline: deep
---

<script setup>
import Basic from './demo/Tooltip/Basic.vue';
import PopperArrow from './demo/Tooltip/PopperArrow.vue';
</script>

# Tooltip

Display content that appears on hover next to an element.

## Usage

<DemoContainer>
<Basic/>
</DemoContainer>

<<< @/overlays/demo/Tooltip/Basic.vue

## Popper

Use the `popper` prop to customize the popper instance.

### Arrow

<DemoContainer>
<PopperArrow/>
</DemoContainer>

<<< @/overlays/demo/Tooltip/PopperArrow.vue