---
outline: deep
---

<script setup>
import Basic from './demo/Alert/Basic.vue';
import Description from './demo/Alert/Description.vue';
import Icon from './demo/Alert/Icon.vue';
import Avatar from './demo/Alert/Avatar.vue';
import Style from './demo/Alert/Style.vue';
import Close from './demo/Alert/Close.vue';
import Actions from './demo/Alert/Actions.vue';
import ActionsWithDescription from './demo/Alert/ActionsWithDescription.vue';
import Slots from './demo/Alert/Slots.vue';
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

### Icon

Use any icon from [Iconify](https://icones.js.org/) by setting the `icon` prop by using this
pattern: `icon-[{collection_name}--{icon_name}]` or change it
globally in `ui.alert.default.icon`.

<DemoContainer>
<Icon/>
</DemoContainer>

<<< @/elements/demo/Alert/Icon.vue

### Avatar

Use the [avatar](/elements/avatar) prop as an `object` and configure it with any of its props.

<DemoContainer>
<Avatar/>
</DemoContainer>

<<< @/elements/demo/Alert/Avatar.vue

### Style

Use the `color` and `variant` props to change the visual style of the Alert.

- `color` can be any color from the `ui.colors` object or `white` (default).
- `variant` can be `solid` (default), `outline`, `soft` or `subtle`.

<DemoContainer>
<Style/>
</DemoContainer>

<<< @/elements/demo/Alert/Style.vue

### Close

Use the `close-button` prop to hide or customize the close button on the Alert.

You can pass all the props of the [Button](/elements/button) component to customize it through the `close-button` prop
or globally through
`ui.alert.default.closeButton`.

It defaults to `null` which means no close button will be displayed. A `close` event will be emitted when the close
button
is clicked.

<DemoContainer>
<Close/>
</DemoContainer>

<<< @/elements/demo/Alert/Close.vue

### Actions

Use the `actions` prop to add actions to the Alert.

Like for `closeButton`, you can pass all the props of the [Button](/elements/button) component plus a `click` function
in the action but also

customize the default style for the actions globally through `ui.alert.default.actionButton`.

<DemoContainer>
<Actions/>
</DemoContainer>

<<< @/elements/demo/Alert/Actions.vue

Actions will render differently whether you have a `description` set.

<DemoContainer>
<ActionsWithDescription/>
</DemoContainer>

<<< @/elements/demo/Alert/ActionsWithDescription.vue

### Slots

#### `title` / `description`

Use the `#title` and `#description` slots to customize the Alert.

This can be handy when you want to display HTML content. To achieve this, you can define those slots and use the `v-html`
directive.

<DemoContainer>
<Slots/>
</DemoContainer>

<<< @/elements/demo/Alert/Slots.vue