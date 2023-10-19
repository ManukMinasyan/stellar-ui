---
outline: deep
---

<script setup>
import Basic from './demo/Alert/Basic.vue';
import Description from './demo/Alert/Description.vue';
</script>

# Alert

Display an alert element to draw attention.

## Usage

Pass a `title` to your Alert.

<DemoContainer>
  <Basic/>
</DemoContainer>

<<< @/elements/demo/Alert/Basic.vue

### Description

You can add a `description` in addition of the title.

<DemoContainer>
  <Description/>
</DemoContainer>

<<< @/elements/demo/Alert/Description.vue