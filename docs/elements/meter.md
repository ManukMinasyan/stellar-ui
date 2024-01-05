---
outline: deep
---

<script setup>
import Basic from './demo/Meter/Basic.vue';
import MinMax from './demo/Meter/MinMax.vue';
</script>

# Meter

Display a gauge meter that fills or depletes.

## Usage

Use the `value` prop from `0` to `100` to set a value for the meter bar.

<DemoContainer>
  <Basic/>
</DemoContainer>

<<< @/elements/demo/Meter/Basic.vue

### Min & Max

By default, `min` is `0` and `max` is `100`. You can change either of these using their respective props, even for negative numbers.

<DemoContainer>
  <MinMax/>
</DemoContainer>

<<< @/elements/demo/Meter/MinMax.vue