---
outline: deep
---

<script setup>
import Basic from './demo/Slideover/Basic.vue';
import Card from './demo/Slideover/Card.vue';
</script>

# Slideover

Display a dialog that slides in from the edge of the screen.

## Usage

Use a `v-model` to control the Slideover state.

<DemoContainer>
<Basic/>
</DemoContainer>

<<< @/overlays/demo/Slideover/Basic.vue

You can put a [Card](/components/card) component inside your Slideover to handle forms and take advantage of `header` and `footer` slots:

<DemoContainer>
<Card/>
</DemoContainer>

<<< @/overlays/demo/Slideover/Card.vue