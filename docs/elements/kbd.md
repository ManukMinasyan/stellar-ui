<script setup>
import Basic from './demo/Kbd/Basic.vue';
import ValueProp from './demo/Kbd/ValueProp.vue';
</script>
# Keyboard Key

Display a keyboard key in a text block.

## Usage

Use the default slot to set the text of the Kbd.

<DemoContainer>
  <Basic/>
</DemoContainer>

<<< @/elements/demo/Kbd/Basic.vue

You can also use the **value** prop:

<DemoContainer>
  <ValueProp/>
</DemoContainer>

<<< @/elements/demo/Kbd/ValueProp.vue