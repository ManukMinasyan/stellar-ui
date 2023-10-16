<script setup>
import Basic from './demo/Form/Basic.vue';
</script>

# Form

Use the Form component to validate form data using schema libraries such as Yup, Zod, Joi, Valibot or your own
validation logic. It works seamlessly with the FormGroup component to automatically display error messages around form
elements.

The Form component requires the `validate` and `state` props for form validation.


- `state` - a reactive object that holds the current state of the form.
- `validate` - a function that takes the form's state as input and returns an array of `FormError` objects with the following fields:
  - `message` - the error message to display.
  - `path` - the path to the form element matching the name.

<DemoContainer>
  <Basic/>
</DemoContainer>

<<< @/forms/demo/Form/Basic.vue