<script setup>
import Basic from './demo/SelectMenu/Basic.vue';
import Multiple from './demo/SelectMenu/Multiple.vue';
</script>
# Select Menu

Display a select menu with advanced features.

## Usage

The SelectMenu component renders by default a Select component and is based on the ui.select preset. You can use most of the Select props to configure the display if you don't want to override the default slot such as color, variant, size, placeholder, icon, disabled, etc.
Like the Select component, you can use the options prop to pass an array of strings or objects.

<DemoContainer>
  <Basic/>
</DemoContainer>

<<< @/forms/demo/Select/Basic.vue

## Multiple

You can use the ``multiple`` prop to select multiple values.

<DemoContainer>
  <Multiple />
</DemoContainer>

<<< @/forms/demo/SelectMenu/Multiple.vue