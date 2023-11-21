---
outline: deep
---

<script setup>
import Basic from './demo/Progress/Basic.vue';
import Max from './demo/Progress/Max.vue';
import Steps from './demo/Progress/Steps.vue';
import Indicator from './demo/Progress/Indicator.vue';
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

## Steps

You can set an array of named steps in the `max` prop to show the active step, at the same time it sets the maximum value.

The first step is always shown at `0%`, making the last `100%`.

<DemoContainer>
  <Steps/>
</DemoContainer>

<<< @/elements/demo/Progress/Steps.vue

## Progress indicator

You can add a numeric indicator, which will show the percent on top the progress track.

<DemoContainer>
  <Indicator/>
</DemoContainer>

<<< @/elements/demo/Progress/Indicator.vue