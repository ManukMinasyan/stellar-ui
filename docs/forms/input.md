<script setup>
import Basic from './demo/Input/Basic.vue';
import Style from './demo/Input/Style.vue';
import Size from './demo/Input/Size.vue';
import Placeholder from './demo/Input/Placeholder.vue';
import Icon from './demo/Input/Icon.vue';
import Disabled from './demo/Input/Disabled.vue';
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

Besides all the colors from the **ui.colors** object, you can also use the **white** (default) and **gray** colors with
their
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

## Icon

Use any icon from [Iconify](https://icones.js.org/) by setting the **icon** prop by using this pattern: **i-{collection_name}-{icon_name}**.

Use the **leading** and **trailing** props to set the icon position or the **leading-icon** and **trailing-icon** props to set a
different icon for each position.

<DemoContainer>
  <Icon/>
</DemoContainer>

<<< @/forms/demo/Input/Icon.vue

## Disabled

Use the **disabled** prop to disable the Input.

<DemoContainer>
  <Disabled/>
</DemoContainer>

<<< @/forms/demo/Input/Disabled.vue