<script setup>
import Basic from './demo/Textarea/Basic.vue';
import Style from './demo/Textarea/Style.vue';
import Size from './demo/Textarea/Size.vue';
import Placeholder from './demo/Textarea/Placeholder.vue';
</script>

# Textarea

Display a textarea field.

## Usage

Use a **v-model** to make the Textarea reactive.

<DemoContainer>
  <Basic/>
</DemoContainer>

<<< @/forms/demo/Textarea/Basic.vue

## Style

Use the **color** and **variant** props to change the visual style of the Textarea.

<DemoContainer>
  <Style/>
</DemoContainer>

<<< @/forms/demo/Textarea/Style.vue

Besides all the colors from the **ui.colors object**, you can also use the **white** (default) and **gray** colors with their
pre-defined variants.

## Size

Use the **size** prop to change the size of the Textarea.

<DemoContainer>
  <Size/>
</DemoContainer>

<<< @/forms/demo/Textarea/Size.vue

## Placeholder

Use the **placeholder** prop to set a placeholder text.

<DemoContainer>
  <Placeholder/>
</DemoContainer>

<<< @/forms/demo/Textarea/Placeholder.vue