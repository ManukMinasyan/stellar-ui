<script setup>
import BasicAccordion from '../../elements/demo/Accordion/Basic.vue';
import Alert from '../../elements/demo/Alert/Icon.vue';
import Dropdown from '../../elements/demo/Dropdown/Basic.vue';
import AvatarGroup from '../../elements/demo/Avatar/Group.vue';
import Badge from '../../elements/demo/Badge/Basic.vue';
import Button from '../../elements/demo/Button/Loading.vue';
import Chip from '../../elements/demo/Chip/Color.vue';

import Toggle from '../../forms/demo/Toggle/Basic.vue';
import BasicRange from '../../forms/demo/Range/Basic.vue';
import Radio from '../../forms/demo/Radio/Basic.vue';
import Checkbox from '../../forms/demo/Checkbox/Basic.vue';
import Input from '../../forms/demo/Input/Placeholder.vue';
import SelectMenu from '../../forms/demo/SelectMenu/Multiple.vue';

import Tabs from '../../navigation/demo/Tabs/SlotsItem.vue';
import CommandPalette from '../../navigation/demo/CommandPalette/Basic.vue';
import Pagination from '../../navigation/demo/Pagination/Basic.vue';

import Table from '../../data/demo/Table/Selectable.vue';

import Divider from '../../layout/demo/Divider/Icon.vue';
import Skeleton from '../../layout/demo/Skeleton/Basic.vue';
</script>

<template>
  <div
      class=" w-full lg:max-w-6xl mx-auto mt-36 flex flex-col lg:flex-row lg:space-x-10"
      >
    <div class="px-5 lg:px-0 w-full lg:w-10/12 flex flex-wrap space-y-10">
      <div class="w-full"><BasicRange /></div>
      <div class="space-x-10 flex lg:justify-between w-full">
        <div class=" flex flex-col lg:flex-row gap-4 lg:gap-10 ">
        <div><Dropdown /></div>
        <div><AvatarGroup /></div>
        </div>
        <div class=" flex flex-col lg:flex-row gap-4 lg:gap-10 ">

        <div><Button /></div>
        <div><Badge /></div>
        <div><Toggle /></div>
        </div>
        <div class="hidden sm:block"><Pagination /></div>
      </div>
      <div class="block sm:hidden"><Pagination /></div>

      <div class="flex w-full flex-col lg:flex-row lg:space-x-10">
        <div class=" w-full lg:w-1/2 space-y-10">
          <Alert />
          <BasicAccordion />
        </div>
        <div class=" w-full lg:w-1/2 border rounded-lg shadow"><CommandPalette /></div>
      </div>
    </div>
    <div class="px-5 mt-4 lg:mt-0 lg:px-0 flex flex-col gap-3 space-x-0 w-full lg:w-2/12 lg:space-y-10">
      <Radio />
      <Checkbox />
      <Input />
      <SelectMenu />
      <Divider />
    </div>
  </div>
  <div
      class="max-w-6xl px-5 lg:px-0  mx-auto mt-10 flex flex-col gap-3 lg:gap-0 lg:flex-row justify-between lg:space-x-10"
  >
    <div class="space-y-10">
      <Tabs  class="relative space-y-2 w-full" />
      <Skeleton class="border shadow-sm p-5 rounded-lg"  />
    </div>
    <div>
      <Table class="border overflow-y-scroll  shadow-sm p-5 rounded-lg" />
    </div>
  </div>
</template>