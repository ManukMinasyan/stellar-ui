---
outline: deep
---

<script setup>
import Basic from './demo/Pagination/Basic.vue';
import Max from './demo/Pagination/Max.vue';
import Size from './demo/Pagination/Size.vue';
import ActiveInactive from './demo/Pagination/ActiveInactive.vue';
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

## Size

Use the `size` prop to change the size of the buttons.

<DemoContainer>
<Size/>
</DemoContainer>

<<< @/navigation/demo/Pagination/Size.vue

## Active / Inactive

Use the `active-button` and `inactive-button` props to customize the active and inactive buttons of the Pagination.

<DemoContainer>
<ActiveInactive/>
</DemoContainer>

<<< @/navigation/demo/Pagination/ActiveInactive.vue