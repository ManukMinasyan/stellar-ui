---
outline: deep
---

<script setup>
import Basic from './demo/Tabs/Basic.vue';
</script>

# Tabs

A set of tab panels that are displayed one at a time.

## Usage

Pass an array to the `items` prop of the Tabs component. Each item can have the following properties:

- `label` - The label of the item.
- `slot` - A key to customize the item with a slot.
- `content` - The content to display in the panel by default.
- `disabled` - Determines whether the item is disabled or not.

<DemoContainer>
<Basic/>
</DemoContainer>

<<< @/navigation/demo/Tabs/Basic.vue