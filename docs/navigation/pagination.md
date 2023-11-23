---
outline: deep
---

<script setup>
import Basic from './demo/Pagination/Basic.vue';
import Max from './demo/Pagination/Max.vue';
</script>

# Pagination

Add a pagination to handle pages.

## Usage

Use a `v-model` to get a reactive page alongside a `total` which represents the total of items. You can also use the
`page-count` prop to define the number of items per page which defaults to `10`.

<DemoContainer>
<Basic/>
</DemoContainer>

<<< @/navigation/demo/Pagination/Basic.vue

## Max

Use the `max` prop to set a maximum of displayed pages. Defaults to `7`, being the minimum.

<DemoContainer>
<Max/>
</DemoContainer>

<<< @/navigation/demo/Pagination/Max.vue