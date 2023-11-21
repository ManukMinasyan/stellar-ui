---
outline: deep
---

<script setup>
import Basic from './demo/Progress/Basic.vue';
import Max from './demo/Progress/Max.vue';
</script>

# Progress

Show a horizontal bar to indicate task progression.

## Usage

Pass an integer as the `value` from `0` to `100` to the Progress bar component.

<DemoContainer>
  <Basic/>
</DemoContainer>

<<< @/elements/demo/Progress/Basic.vue

## Max

You may also set the `max` number to set the maximum progress value, which will be relative to 100% percent.

<DemoContainer>
  <Max/>
</DemoContainer>

<<< @/elements/demo/Progress/Max.vue