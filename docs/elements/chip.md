---
outline: deep
---

<script setup>
import Basic from './demo/Chip/Basic.vue';
import Size from './demo/Chip/Size.vue';
import Color from './demo/Chip/Color.vue';
import Position from './demo/Chip/Position.vue';
</script>

# Chip

Display a chip indicator on any component.

## Usage

Wrap any component with the `Chip` component to display a chip indicator.

<DemoContainer>
  <Basic/>
</DemoContainer>

<<< @/elements/demo/Chip/Basic.vue

### Size

Use the `size` prop to change the size of the chip.

<DemoContainer>
  <Size/>
</DemoContainer>

<<< @/elements/demo/Chip/Size.vue

### Color

Use the `color` prop to change the color of the chip.

<DemoContainer>
  <Color/>
</DemoContainer>

<<< @/elements/demo/Chip/Color.vue

### Position

Use the `position` prop to change the position of the chip.

<DemoContainer>
<Position/>
</DemoContainer>

<<< @/elements/demo/Chip/Position.vue