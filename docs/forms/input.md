<script setup>
import Basic from './demo/Input/Basic.vue';
import Style from './demo/Input/Style.vue';
import Size from './demo/Input/Size.vue';
import Placeholder from './demo/Input/Placeholder.vue';
</script>

# Input

Display an input field.

## Usage

Use a **v-model** to make the Input reactive.

<DemoContainer>
  <Basic/>
</DemoContainer>

<<< @/forms/demo/Input/Basic.vue

## Style

Use the **color** and **variant** props to change the visual style of the Input.

<DemoContainer>
  <Style/>
</DemoContainer>

<<< @/forms/demo/Input/Style.vue

Besides all the colors from the **ui.colors** object, you can also use the **white** (default) and **gray** colors with their
pre-defined variants.

## Size

Use the **size** prop to change the size of the Input.

<DemoContainer>
  <Size/>
</DemoContainer>

<<< @/forms/demo/Input/Size.vue

## Placeholder

Use the **placeholder** prop to set a placeholder text.

<DemoContainer>
  <Placeholder/>
</DemoContainer>

<<< @/forms/demo/Input/Placeholder.vue