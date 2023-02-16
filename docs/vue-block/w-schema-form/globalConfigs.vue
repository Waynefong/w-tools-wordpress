<template>
  <t-base-table :data="data" :columns="columns"> </t-base-table>
</template>

<script setup>
const columns = [
  {
    title: "名称",
    colKey: "name",
  },
  {
    title: "类型",
    colKey: "type",
  },
  {
    title: "是否必传",
    colKey: "must",
  },
  {
    title: "默认值",
    colKey: "default",
  },
  {
    title: "说明",
    colKey: "introduction",
  },
];
const data = [
  {
    name: "formSettings",
    type: "Object",
    must: "False",
    default: `{ labelAlign: 'top' }`,
    introduction: "表单配置，对应 TDesign 表单组件 Form Props",
  },
  {
    name: "rowSettings",
    type: "Object",
    must: "False",
    default: `{ gutter: [16, 16] }`,
    introduction: "行配置，对应 TDesign 栅格组件 Row Props",
  },
  {
    name: "colSettings",
    type: "Object",
    must: "False",
    default: `{ span: 6 }`,
    introduction: "列配置，对应 TDesign 栅格组件 Col Props",
  },
  {
    name: "operationSlot",
    type: "Boolean",
    must: "False",
    default: `true`,
    introduction: "是否使用内置名为 submitBtn 插槽，用于提交表单",
  },
];
</script>

<style scoped lang="less">
.t-table {
  :deep(table) {
    margin: 0;
  }
}
</style>
