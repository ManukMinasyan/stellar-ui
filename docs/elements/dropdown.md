<script setup>
import Basic from './demo/Dropdown/Basic.vue';
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