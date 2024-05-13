---
outline: deep
---

<script setup>
import Basic from './demo/SelectMenu/Basic.vue';
import Multiple from './demo/SelectMenu/Multiple.vue';
import Objects from './demo/SelectMenu/Objects.vue';
import ObjectsValueAttribute from './demo/SelectMenu/ObjectsValueAttribute.vue';
import Icon from './demo/SelectMenu/Icon.vue';
import Searchable from './demo/SelectMenu/Searchable.vue';
import SearchableAttributes from './demo/SelectMenu/SearchableAttributes.vue';
import SearchableClearOnClose from './demo/SelectMenu/SearchableClearOnClose.vue';
</script>

# Select Menu

Display a select menu with advanced features.

## Usage

The SelectMenu component renders by default a Select component and is based on the ui.select preset. You can use most of
the Select props to configure the display if you don't want to override the default slot such as color, variant, size,
placeholder, icon, disabled, etc.
Like the Select component, you can use the options prop to pass an array of strings or objects.

<DemoContainer>
  <Basic />
</DemoContainer>

<<< @/forms/demo/SelectMenu/Basic.vue

## Multiple

You can use the ``multiple`` prop to select multiple values.

<DemoContainer>
  <Multiple />
</DemoContainer>

<<< @/forms/demo/SelectMenu/Multiple.vue

## Objects

You can pass an array of objects to ``options`` and either compare on the whole object or use the ``by`` prop to compare
on a
specific key. You can configure which field will be used to display the label through the ``option-attribute`` prop that
defaults to ``label``.

<DemoContainer>
  <Objects />
</DemoContainer>

<<< @/forms/demo/SelectMenu/Objects.vue

If you only want to select a single object property rather than the whole object as value, you can set the
`value-attribute` property. This prop defaults to `null`.

<DemoContainer>
  <ObjectsValueAttribute />
</DemoContainer>

<<< @/forms/demo/SelectMenu/ObjectsValueAttribute.vue

## Icon

Use the `selected-icon` prop to set a different icon or change it globally in `ui.selectMenu.default.selectedIcon`.
Defaults to `icon-[heroicons--check-20-solid]`.

<DemoContainer>
  <Icon />
</DemoContainer>

<<< @/forms/demo/SelectMenu/Icon.vue

## Searchable

Use the `searchable` prop to enable search.

Use the `searchable-placeholder` prop to set a different placeholder.

This will use Headless UI Combobox component instead of Listbox.

<DemoContainer>
  <Searchable />
</DemoContainer>

<<< @/forms/demo/SelectMenu/Searchable.vue

### Attributes

Use the `search-attributes` prop with an array of property names to search on each option object. Nested attributes can
be accessed using `dot.notation`. When the property value is an array or object, these are cast to string so these can
be searched within.

<DemoContainer>
  <SearchableAttributes />
</DemoContainer>

<<< @/forms/demo/SelectMenu/SearchableAttributes.vue

### Clear on close

By default, the search query will be kept after the menu is closed. To clear it on close, set the `clear-search-on-close` prop.


<DemoContainer>
  <SearchableClearOnClose />
</DemoContainer>

<<< @/forms/demo/SelectMenu/SearchableClearOnClose.vue