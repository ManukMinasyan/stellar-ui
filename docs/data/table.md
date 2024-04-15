---
outline: deep
---

<script setup>
import Basic from './demo/Table/Basic.vue';
import Columns from './demo/Table/Columns.vue';
import ColumnsSelectMenu from './demo/Table/ColumnsSelectMenu.vue';
import Sortable from './demo/Table/Sortable.vue';
</script>

# Table

Display data in a table.

## Usage

Use the `rows` prop to set the data to display in the table. By default, the table will display all the fields of the
rows.
<DemoContainer>
<Basic/>
</DemoContainer>

<<< @/data/demo/Table/Basic.vue

### Columns

Use the `columns` prop to configure which columns to display. It's an array of objects with the following properties:

- `label` - The label to display in the table header. Can be changed through the `column-attribute` prop.
- `key` - The field to display from the row data.
- `sortable` - Whether the column is sortable. Defaults to `false`.
- `direction` - The sort direction to use on first click. Defaults to `asc`.
- `class` - The class to apply to the column cells.
- `sort` - Pass your own `sort` function. Defaults to a simple _greater than_ / _less than_ comparison.

<DemoContainer>
<Columns/>
</DemoContainer>

<<< @/data/demo/Table/Columns.vue

You can easily use the [SelectMenu](/forms/select-menu) component to change the columns to display.

<DemoContainer>
<ColumnsSelectMenu/>
</DemoContainer>

<<< @/data/demo/Table/ColumnsSelectMenu.vue

### Sortable

You can make the columns sortable by setting the `sortable` property to `true` in the column configuration.

You may specify the default direction of each column through the `direction` property. It can be either `asc` or `desc`, but it will default to `asc`.

<DemoContainer>
<Sortable/>
</DemoContainer>

<<< @/data/demo/Table/Sortable.vue