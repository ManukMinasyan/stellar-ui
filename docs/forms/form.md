---
outline: deep
---

<script setup>
import Basic from './demo/Form/Basic.vue';
import Yup from './demo/Form/Yup.vue';
import Zod from './demo/Form/Zod.vue';
import Joi from './demo/Form/Joi.vue';
import Valibot from './demo/Form/Valibot.vue';
</script>

# Form

Use the Form component to validate form data using schema libraries such as Yup, Zod, Joi, Valibot or your own
validation logic. It works seamlessly with the FormGroup component to automatically display error messages around form
elements.

The Form component requires the `validate` and `state` props for form validation.

- `state` - a reactive object that holds the current state of the form.
- `validate` - a function that takes the form's state as input and returns an array of `FormError` objects with the
  following fields:
    - `message` - the error message to display.
    - `path` - the path to the form element matching the name.

<DemoContainer>
  <Basic/>
</DemoContainer>

<<< @/forms/demo/Form/Basic.vue

## Schema

You can provide a schema from Yup, Zod or Joi, Valibot through the `schema` prop to validate the state. It's important to
note that **none of these libraries are included** by default, so make sure to **install the one you need**.

### Yup

<DemoContainer>
  <Yup/>
</DemoContainer>

<<< @/forms/demo/Form/Yup.vue

### Zod

<DemoContainer>
  <Zod/>
</DemoContainer>

<<< @/forms/demo/Form/Zod.vue

### Joi

<DemoContainer>
  <Joi/>
</DemoContainer>

<<< @/forms/demo/Form/Joi.vue

### Valibot

<DemoContainer>
  <Valibot/>
</DemoContainer>

<<< @/forms/demo/Form/Valibot.vue