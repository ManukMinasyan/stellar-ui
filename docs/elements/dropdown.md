---
outline: deep
---

<script setup>
import Basic from './demo/Dropdown/Basic.vue';
import Mode from './demo/Dropdown/Mode.vue';
import PopperArrow from './demo/Dropdown/PopperArrow.vue';
import PopperPlacement from './demo/Dropdown/PopperPlacement.vue';
import PopperOffset from './demo/Dropdown/PopperOffset.vue';
</script>

# Dropdown

Display a list of actions in a dropdown menu.

## Usage

Pass an array of arrays to the items prop of the Dropdown component. Each array represents a group of items. Each item can have the following properties:

- label - The label of the item.
- icon - The icon of the item.
- avatar - The avatar of the item. You can pass all the props of the Avatar component.
- shortcuts - The shortcuts of the item.
- disabled - Whether the item is disabled.
- click - The click handler of the item.

<DemoContainer>
  <Basic/>
</DemoContainer>

<<< @/elements/demo/Dropdown/Basic.vue

### Mode

Use the `mode` prop to switch between `click` and `hover` modes.

<DemoContainer>
  <Mode/>
</DemoContainer>

<<< @/elements/demo/Dropdown/Mode.vue

### Popper

Use the `popper` prop to customize the popper instance.

#### Arrow

<DemoContainer>
  <PopperArrow/>
</DemoContainer>

<<< @/elements/demo/Dropdown/PopperArrow.vue

#### Placement

<DemoContainer>
  <PopperPlacement/>
</DemoContainer>

<<< @/elements/demo/Dropdown/PopperPlacement.vue

#### Offset

<DemoContainer>
  <PopperOffset/>
</DemoContainer>

<<< @/elements/demo/Dropdown/PopperOffset.vue