---
outline: deep
---

<script setup>
import Basic from './demo/Divider/Basic.vue';
import Icon from './demo/Divider/Icon.vue';
import Avatar from './demo/Divider/Avatar.vue';
</script>

# Divider

Display a separator between content.

## Usage

You can pass `label`, `icon` or `avatar` to the divider component.

<DemoContainer>
<Basic/>
</DemoContainer>

<<< @/layout/demo/Divider/Basic.vue

## Icon

Use any icon from Iconify by setting the `icon` prop by using this pattern: `icon-[{collection_name}--{icon_name}]`.

<DemoContainer>
<Icon/>
</DemoContainer>

<<< @/layout/demo/Divider/Icon.vue

## Avatar

Use the [avatar](/elements/avatar) prop as an object and configure it with any of its props.

<DemoContainer>
<Avatar/>
</DemoContainer>

<<< @/layout/demo/Divider/Avatar.vue