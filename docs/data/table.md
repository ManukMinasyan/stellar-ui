<script setup>
import Basic from './demo/Table/Basic.vue';
import Columns from './demo/Table/Columns.vue';
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

## Columns

Use the `columns` prop to configure which columns to display. It's an array of objects with the following properties:
- `label` - The label to display in the table header. Can be changed through the `column-attribute` prop.
- `key` - The field to display from the row data.
- `sortable` - Whether the column is sortable. Defaults to `false`.
- `direction` - The sort direction to use on first click. Defaults to `asc`.
- `class` - The class to apply to the column cells.

<DemoContainer>
<Columns/>
</DemoContainer>

<<< @/data/demo/Table/Columns.vue