<script setup>
import Basic from './demo/FormGroup/Basic.vue';
import Required from './demo/FormGroup/Required.vue';
import Description from './demo/FormGroup/Description.vue';
import Hint from './demo/FormGroup/Hint.vue';
import Help from './demo/FormGroup/Help.vue';
import Error from './demo/FormGroup/Error.vue';
</script>

# Form Group

Display a label and additional informations around a form element.

## Usage

Use the FormGroup component around an Input, Textarea, Select or a SelectMenu with the `name` prop to automatically
associate a `<label>` element with the form element.

<DemoContainer classes="block">
  <Basic/>
</DemoContainer>

<<< @/forms/demo/FormGroup/Basic.vue

## Required

Use the `required` prop to indicate that the form element is required.

<DemoContainer classes="block">
  <Required/>
</DemoContainer>

<<< @/forms/demo/FormGroup/Required.vue

## Description

Use the `description` prop to display a description below the label.

<DemoContainer>
  <Description/>
</DemoContainer>

<<< @/forms/demo/FormGroup/Description.vue

## Hint

Use the `hint` prop to display a hint above the form element.

<DemoContainer>
  <Hint/>
</DemoContainer>

<<< @/forms/demo/FormGroup/Hint.vue

## Help

Use the `help` prop to display an help message below the form element.

<DemoContainer>
  <Help/>
</DemoContainer>

<<< @/forms/demo/FormGroup/Help.vue

## Error

Use the `error` prop to display an error message below the form element.

When used together with the `help` prop, the `error` prop will take precedence.

<DemoContainer>
  <Error/>
</DemoContainer>

<<< @/forms/demo/FormGroup/Error.vue