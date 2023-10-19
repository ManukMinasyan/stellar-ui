---
outline: deep
---

<script setup>
import Basic from './demo/Alert/Basic.vue';
import Description from './demo/Alert/Description.vue';
import Icon from './demo/Alert/Icon.vue';
import Avatar from './demo/Alert/Avatar.vue';
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

Use any icon from [Iconify](https://icones.js.org/) by setting the `icon` prop by using this pattern: `icon-[{collection_name}--{icon_name}]` or change it
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