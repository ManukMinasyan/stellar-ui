---
outline: deep
---

<script setup>
import Yup from './demo/Form/Yup.vue';
import Zod from './demo/Form/Zod.vue';
import Joi from './demo/Form/Joi.vue';
import Valibot from './demo/Form/Valibot.vue';
import CustomValidation from './demo/Form/CustomValidation.vue';

const items = [
{
  slot: 'yup',
  label: 'Yup'
}, 
{
  slot: 'zod',
  label: 'Zod'
},
{
  slot: 'joi',
  label: 'Joi'
},
{
  slot: 'valibot',
  label: 'Valibot'
}
]
</script>

# Form

Collect and validate form data.

## Usage

Use the Form component to validate form data using schema libraries such
as [Yup](https://github.com/jquense/yup), [Zod](https://github.com/colinhacks/zod), [Joi](https://github.com/hapijs/joi), [Valibot](https://valibot.dev/),
or your own validation logic.

It works with the [FormGroup](/forms/form-group) component to display error messages around form elements
automatically.

The form component requires two props:

- `state` - a reactive object holding the form's state.
- `schema` - a schema object from [Yup](#yup), [Zod](#zod), [Joi](#joi), or [Valibot](#valibot).

::: info
Note that **no validation library is included** by default, so ensure you **install the one you need**.
:::

## Schema

You can provide a schema from Yup, Zod or Joi, Valibot through the `schema` prop to validate the state. It's important
to
note that **none of these libraries are included** by default, so make sure to **install the one you need**.

  <STabs :items="items" class="w-full space-y-2">
    <template #yup="{ item }">
      <DemoContainer>
        <Yup/>
      </DemoContainer>

<<< @/forms/demo/Form/Yup.vue

  </template>

<template #zod="{ item }">
<DemoContainer>
<Zod/>
</DemoContainer>

<<< @/forms/demo/Form/Zod.vue

  </template>
<template #joi="{ item }">
      <DemoContainer>
        <Joi/>
      </DemoContainer>

<<< @/forms/demo/Form/Joi.vue

  </template>
<template #valibot="{ item }">
      <DemoContainer>
        <Valibot/>
      </DemoContainer>

<<< @/forms/demo/Form/Valibot.vue

  </template>
</STabs>

## Custom validation

Use the `validate` prop to apply your own validation logic.

The validation function must return a list of errors with the following attributes:

- `message` - Error message for display.
- `path` - Path to the form element corresponding to the `name` attribute.

::: info
Note that it can be used alongside the `schema` prop to handle complex use cases.
:::

<DemoContainer>
    <CustomValidation/>
</DemoContainer>

<<< @/forms/demo/Form/CustomValidation.vue