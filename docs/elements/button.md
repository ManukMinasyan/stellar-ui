---
outline: deep
---

<script setup>
import Basic from './demo/Button/Basic.vue';
import BasicLabel from './demo/Button/BasicLabel.vue';
import BasicStyle from './demo/Button/BasicStyle.vue';
import BasicSize from './demo/Button/BasicSize.vue';
import BasicIcon from './demo/Button/BasicIcon.vue';
import BasicIconOnly from './demo/Button/BasicIconOnly.vue';
import Disabled from './demo/Button/Disabled.vue';
import Loading from './demo/Button/Loading.vue';
import Block from './demo/Button/Block.vue';
import Link from './demo/Button/Link.vue';
import Padded from './demo/Button/Padded.vue';
import Square from './demo/Button/Square.vue';
import Truncate from './demo/Button/Truncate.vue';
import GroupAction from './demo/Button/GroupAction.vue';
import GroupInput from './demo/Button/GroupInput.vue';
</script>

# Button

Create a button with icon or link capabilities.

## Usage

Use the default slot to set the text of the Button.

<DemoContainer>
  <Basic/>
</DemoContainer>

<<< @/elements/demo/Button/Basic.vue

You can also use the label prop.

<DemoContainer>
  <BasicLabel />
</DemoContainer>

<<< @/elements/demo/Button/BasicLabel.vue

### Style

Use the **color** and **variant** props to change the visual style of the Button.

<DemoContainer>
  <BasicStyle />
</DemoContainer>

<<< @/elements/demo/Button/BasicStyle.vue

### Size

Use the **size** prop to change the size of the Button.

<DemoContainer>
  <BasicSize />
</DemoContainer>

<<< @/elements/demo/Button/BasicSize.vue

### Icon

Use any icon from [Iconify](https://icones.js.org/) by setting the **icon** prop by using this pattern: *
*i-{collection_name}-{icon_name}**.

Use the **leading** and **trailing** props to set the icon position or the **leading-icon** and **trailing-icon** props
to set a different icon for each position.

<DemoContainer>
  <BasicIcon />
</DemoContainer>

<<< @/elements/demo/Button/BasicIcon.vue

The **label** as prop or slot is optional so you can use the Button as an icon-only button.

<DemoContainer>
  <BasicIconOnly />
</DemoContainer>

<<< @/elements/demo/Button/BasicIconOnly.vue

### Disabled

Use the `disabled` prop to disable the Button.

<DemoContainer>
  <Disabled />
</DemoContainer>

<<< @/elements/demo/Button/Disabled.vue

### Loading

Use the `loading` prop to show a loading icon and disable the Button.

Use the `loading-icon` prop to set a different icon or change it globally in `ui.button.default.loadingIcon`. Defaults to
`icon-[heroicons--arrow-path-20-solid]`.

<DemoContainer>
<Loading />
</DemoContainer>

<<< @/elements/demo/Button/Loading.vue

### Block

Use the `block` prop to make the Button fill the width of its container.

<DemoContainer>
<Block />
</DemoContainer>

<<< @/elements/demo/Button/Block.vue

### Link

Use the `to` prop to make the Button a link.

<DemoContainer>
<Link />
</DemoContainer>

<<< @/elements/demo/Button/Link.vue

### Padded

Use the `padded` prop to remove the padding of the Button.

<DemoContainer>
<Padded />
</DemoContainer>

<<< @/elements/demo/Button/Padded.vue

### Square

Use the `square` prop to force the Button to have the same padding horizontally and vertically.

<DemoContainer>
<Square />
</DemoContainer>

<<< @/elements/demo/Button/Padded.vue

### Truncate

Use the `truncate` prop to truncate the label of the Button.

<DemoContainer>
<Truncate />
</DemoContainer>

<<< @/elements/demo/Button/Truncate.vue

### Group

To stack buttons as a group, use the `ButtonGroup` component.
- To size all the buttons equally, pass the `size` prop
- To change the orientation of the buttons, set the `orientation` prop to `vertical`
- To adjust the rounded or the shadow around buttons, customize with `ui.buttonGroup.rounded` or `ui.buttonGroup.shadow`

<DemoContainer>
<GroupAction />
</DemoContainer>

<<< @/elements/demo/Button/GroupAction.vue

This can also work with an [Input](/forms/input) component for example:

<DemoContainer>
<GroupInput />
</DemoContainer>

<<< @/elements/demo/Button/GroupInput.vue