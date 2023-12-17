---
outline: deep
---

<script setup>
import Basic from './demo/Breadcrumb/Basic.vue';
</script>

# Breadcrumb

A list of links that indicate the current page's location within a navigational hierarchy.

## Usage

Pass an array to the `links` prop of the Breadcrumb component. Each link can have the following properties:

- `label` - The label of the link.
- `labelClass` - The class of the link label. :u-badge{label="New" class="!rounded-full" variant="subtle"}
- `icon` - The icon of the link.
- `iconClass` - The class of the link icon.

<DemoContainer>
<Basic />
</DemoContainer>

<<< @/navigation/demo/Breadcrumb/Basic.vue