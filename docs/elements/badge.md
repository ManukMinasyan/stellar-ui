---
outline: deep
---

<script setup>
import Basic from './demo/Badge/Basic.vue';
import Label from './demo/Badge/Label.vue';
import Style from './demo/Badge/Style.vue';
import Size from './demo/Badge/Size.vue';
import Rounded from './demo/Badge/Rounded.vue';
</script>
# Badge

Display a short text to represent a status or a category.

## Usage

<DemoContainer>
  <Basic/>
</DemoContainer>

<<< @/elements/demo/Badge/Basic.vue

You can also use the label prop:

<DemoContainer>
  <Label/>
</DemoContainer>

<<< @/elements/demo/Badge/Label.vue

## Style

Use the **color** and **variant** props to change the visual style of the Badge.

<DemoContainer>
  <Style/>
</DemoContainer>

<<< @/elements/demo/Badge/Style.vue

## Size

Use the **size** prop to change the size of the Badge.

<DemoContainer>
  <Size/>
</DemoContainer>

<<< @/elements/demo/Badge/Size.vue

## Rounded

To customize the border radius of the Badge, you can use the `ui` prop.

<DemoContainer>
  <Rounded/>
</DemoContainer>

<<< @/elements/demo/Badge/Rounded.vue