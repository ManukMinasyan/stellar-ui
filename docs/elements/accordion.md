<script setup>
import Basic from './demo/Accordion/Basic.vue';
import Style from './demo/Accordion/Style.vue';
import Icon from './demo/Accordion/Icon.vue';
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

## Style

You can also pass any prop from the Button component directly to the Accordion component to style the buttons.

<DemoContainer>
<Style/>
</DemoContainer>

<<< @/elements/demo/Accordion/Style.vue

## Icon

Use any icon from [Iconify](https://icones.js.org/) by setting the `open-icon` and `close-icon` props by using this pattern:
`icon-[{collection_name}--{icon_name}]` or change it globally in `ui.accordion.default.openIcon` and
`ui.accordion.default.closeIcon`.

You can also set them to `null` to hide the icons.

<DemoContainer>
<Icon/>
</DemoContainer>

<<< @/elements/demo/Accordion/Icon.vue