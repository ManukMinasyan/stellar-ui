---
outline: deep
---

<script setup>
import Basic from './demo/InputMenu/Basic.vue';
import Objects from './demo/InputMenu/Objects.vue';
</script>

# InputMenu

Display an autocomplete input with real-time suggestions.

## Usage

The `InputMenu` component renders by default an [Input](/forms/input) component and is based on the `ui.input` preset. You can use most of the `Input` props to configure the display such as [color](/forms/input#style), [variant](/forms/input#style), [size](/forms/input#size), [placeholder](/forms/input#placeholder), [icon](/forms/input#icon), [disabled](/forms/input#disabled), etc.

You can use the `ui` prop like the `Input` component to override the default config. The `uiMenu` prop can be used to override the default menu config.

Pass an array of strings or objects to the `options` prop to display in the menu.

<DemoContainer>
  <Basic/>
</DemoContainer>

<<< @/forms/demo/InputMenu/Basic.vue

### Objects

You can pass an array of objects to `options` and either compare on the whole object or use the `by` prop to compare on a specific key. You can configure which field will be used to display the label through the `option-attribute` prop that defaults to `label`.

<DemoContainer>
  <Objects/>
</DemoContainer>

<<< @/forms/demo/InputMenu/Objects.vue