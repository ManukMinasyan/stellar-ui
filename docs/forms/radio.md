<script setup>
import Basic from './demo/Radio/Basic.vue';
import Label from './demo/Radio/Label.vue';
</script>

# Radio

Display a radio field.

## Usage

Use a ```v-model``` to make the Radio reactive.

<DemoContainer classes="block">
  <Basic/>
</DemoContainer>

<<< @/forms/demo/Radio/Basic.vue

## Label

Use the ```label``` prop to display a label on the right.


<DemoContainer>
  <Label/>
</DemoContainer>

<<< @/forms/demo/Radio/Label.vue