<script setup>
import Basic from './demo/Avatar/Basic.vue';
import Size from './demo/Avatar/Size.vue';
import Chip from './demo/Avatar/Chip.vue';
import Placeholder from './demo/Avatar/Placeholder.vue';
</script>
# Avatar

Display an image that represents a resource or a group of resources.

## Usage

<DemoContainer>
  <Basic/>
</DemoContainer>

<<< @/elements/demo/Avatar/Basic.vue

## Size

Use the **size** prop to change the size of the Avatar.

<DemoContainer>
  <Size/>
</DemoContainer>

<<< @/elements/demo/Avatar/Size.vue

## Chip

Use the **chip-color**, **chip-text** and **chip-position** props to display a chip on the Avatar.

<DemoContainer>
  <Chip/>
</DemoContainer>

<<< @/elements/demo/Avatar/Chip.vue

## Placeholder

If there is an error loading the **src** of the avatar or **src** is null a background placeholder will be displayed, customizable in **ui.avatar.background**.

If there's an **alt** prop initials will be displayed on top of the background, customizable in **ui.avatar.placeholder**.

<DemoContainer>
  <Placeholder/>
</DemoContainer>

<<< @/elements/demo/Avatar/Placeholder.vue