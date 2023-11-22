<script setup>
import Basic from './demo/Pagination/Basic.vue';
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