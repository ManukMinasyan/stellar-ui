---
outline: deep
---

<script setup>
import Basic from './demo/Table/Basic.vue';
import Columns from './demo/Table/Columns.vue';
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

### Sortable

You can make the columns sortable by setting the `sortable` property to `true` in the column configuration.

You may specify the default direction of each column through the `direction` property. It can be either `asc` or `desc`, but it will default to `asc`.

<DemoContainer>
<Sortable/>
</DemoContainer>

<<< @/data/demo/Table/Sortable.vue