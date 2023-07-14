<script setup>
import Basic from './demo/Select/Basic.vue';
</script>
# Select

Display a select field.

## Usage

The Select component is a wrapper around the native **select** HTML element. For more advanced use cases like searching or multiple selection, consider using the SelectMenu component.

Use a **v-model** to make the Select reactive alongside the **options** prop to pass an array of strings or objects.

<DemoContainer>
  <Basic/>
</DemoContainer>

<<< @/forms/demo/Select/Basic.vue