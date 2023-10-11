<script setup>
import Basic from './demo/Modal/Basic.vue';
import Card from './demo/Modal/Card.vue';
</script>

# Modal

Display a modal within your application.

## Usage

Use a `v-model` to control the Modal state.

<DemoContainer>
<Basic/>
</DemoContainer>

<<< @/overlays/demo/Modal/Basic.vue

You can put a Card component inside your Modal to handle forms and take advantage of `header` and `footer` slots:

<DemoContainer>
<Card/>
</DemoContainer>

<<< @/overlays/demo/Modal/Card.vue