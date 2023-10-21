---
outline: deep
---

<script setup>
import Basic from './demo/Accordion/Basic.vue';
import Style from './demo/Accordion/Style.vue';
import Icon from './demo/Accordion/Icon.vue';
import Multiple from './demo/Accordion/Multiple.vue';
import Open from './demo/Accordion/Open.vue';
import Slots from './demo/Accordion/Slots.vue';
import SlotsItem from './demo/Accordion/SlotsItem.vue';
</script>

# Accordion

Display togglable accordion panels.

## Usage

Pass an array to the items prop of the Accordion component. Each item can have any property from the Button component
such as label, icon, color, variant, size, etc. but also:

- `slot` - A key to customize the item with a slot.
- `content` - The content to display in the panel by default.
- `disabled` - Determines whether the item is disabled or not.
- `defaultOpen` - Determines whether the item is initially open or closed.
- `closeOthers` - Determines whether the item click close others or not. It only works with multiple mode.

<DemoContainer>
  <Basic/>
</DemoContainer>

<<< @/elements/demo/Accordion/Basic.vue

### Style

You can also pass any prop from the Button component directly to the Accordion component to style the buttons.

<DemoContainer>
<Style/>
</DemoContainer>

<<< @/elements/demo/Accordion/Style.vue

### Icon

Use any icon from [Iconify](https://icones.js.org/) by setting the `open-icon` and `close-icon` props by using this
pattern:
`icon-[{collection_name}--{icon_name}]` or change it globally in `ui.accordion.default.openIcon` and
`ui.accordion.default.closeIcon`.

You can also set them to `null` to hide the icons.

<DemoContainer>
<Icon/>
</DemoContainer>

<<< @/elements/demo/Accordion/Icon.vue

### Multiple

Use the `multiple` prop to to allow multiple elements to be opened at the same time.


<DemoContainer>
<Multiple/>
</DemoContainer>

<<< @/elements/demo/Accordion/Multiple.vue

### Open

Use the `default-open` prop to open all items by default. Works better when the multiple prop is set to `true`.

<DemoContainer>
<Open/>
</DemoContainer>

<<< @/elements/demo/Accordion/Open.vue

## Slots

You can use slots to customize the buttons and items content of the Accordion.

### `default`

Use the `#default` slot to customize the trigger buttons. You will have access to the `item`, `index`, `open` properties
and
`close` method in the slot scope.

<DemoContainer>
<Slots/>
</DemoContainer>

<<< @/elements/demo/Accordion/Slots.vue

### `item`

Use the `#item` slot to customize the items content or pass a `slot` property to customize a specific item. You will have
access to the `item`, `index`, `open` properties and `close` method in the slot scope.

<DemoContainer>
<SlotsItem/>
</DemoContainer>

<<< @/elements/demo/Accordion/SlotsItem.vue