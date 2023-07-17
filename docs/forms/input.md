<script setup>
import Basic from './demo/Input/Basic.vue';
import Style from './demo/Input/Style.vue';
import Size from './demo/Input/Size.vue';
import Placeholder from './demo/Input/Placeholder.vue';
import Icon from './demo/Input/Icon.vue';
import Disabled from './demo/Input/Disabled.vue';
import Loading from './demo/Input/Loading.vue';
import SlotsLeading from './demo/Input/SlotsLeading.vue';
import SlotsTrailing from './demo/Input/SlotsTrailing.vue';
import SlotsTrailingButton from './demo/Input/SlotsTrailingButton.vue';
</script>

# Input

Display an input field.

## Usage

Use a **v-model** to make the Input reactive.

<DemoContainer>
  <Basic/>
</DemoContainer>

<<< @/forms/demo/Input/Basic.vue

## Style

Use the **color** and **variant** props to change the visual style of the Input.

<DemoContainer>
  <Style/>
</DemoContainer>

<<< @/forms/demo/Input/Style.vue

Besides all the colors from the **ui.colors** object, you can also use the **white** (default) and **gray** colors with
their
pre-defined variants.

## Size

Use the **size** prop to change the size of the Input.

<DemoContainer>
  <Size/>
</DemoContainer>

<<< @/forms/demo/Input/Size.vue

## Placeholder

Use the **placeholder** prop to set a placeholder text.

<DemoContainer>
  <Placeholder/>
</DemoContainer>

<<< @/forms/demo/Input/Placeholder.vue

## Icon

Use any icon from [Iconify](https://icones.js.org/) by setting the **icon** prop by using this pattern: *
*i-{collection_name}-{icon_name}**.

Use the **leading** and **trailing** props to set the icon position or the **leading-icon** and **trailing-icon** props
to set a
different icon for each position.

<DemoContainer>
  <Icon/>
</DemoContainer>

<<< @/forms/demo/Input/Icon.vue

## Disabled

Use the **disabled** prop to disable the Input.

<DemoContainer>
  <Disabled/>
</DemoContainer>

<<< @/forms/demo/Input/Disabled.vue

## Loading

Use the **loading** prop to show a loading icon and disable the Input.

Use the **loading-icon** prop to set a different icon or change it globally in **ui.input.default.loadingIcon**.
Defaults to
**i-heroicons-arrow-path-20-solid**.

<DemoContainer>
  <Loading/>
</DemoContainer>

<<< @/forms/demo/Input/Loading.vue

## Slots

### leading

Use the **#leading** slot to set the content of the leading icon.

<DemoContainer>
  <SlotsLeading />
</DemoContainer>

<<< @/forms/demo/Input/SlotsLeading.vue

### trailing

Use the **#trailing** slot to set the content of the trailing icon.

<DemoContainer>
  <SlotsTrailing />
</DemoContainer>

<<< @/forms/demo/Input/SlotsTrailing.vue

You can for example create a clearable Input by injecting a Button in the **trailing** slot that displays when some text is
entered.

<DemoContainer>
  <SlotsTrailingButton />
</DemoContainer>

<<< @/forms/demo/Input/SlotsTrailingButton.vue

> As leading and trailing icons are wrapped around a **pointer-events-none class**, if you inject a clickable element in the slot, you need to remove this class to make it clickable by adding **:ui="{ icon: { trailing: { pointer: '' } } }"** to the Input.