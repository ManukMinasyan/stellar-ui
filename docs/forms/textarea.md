<script setup>
import Basic from './demo/Textarea/Basic.vue';
import Style from './demo/Textarea/Style.vue';
import Size from './demo/Textarea/Size.vue';
import Placeholder from './demo/Textarea/Placeholder.vue';
import Rows from './demo/Textarea/Rows.vue';
import Disabled from './demo/Textarea/Disabled.vue';
import Autoresize from './demo/Textarea/Autoresize.vue';
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

## Rows

Use the **rows** prop to set the number of rows of the Textarea.

<DemoContainer>
  <Rows/>
</DemoContainer>

<<< @/forms/demo/Textarea/Rows.vue

## Disabled

Use the **disabled** prop to disable the Textarea.

<DemoContainer>
  <Disabled/>
</DemoContainer>

<<< @/forms/demo/Textarea/Disabled.vue

## Autoresize

Use the **autoresize** prop to enable the autoresize. Writing more lines than the **rows** prop will make the Textarea grow up.

<DemoContainer>
  <Autoresize/>
</DemoContainer>

<<< @/forms/demo/Textarea/Autoresize.vue