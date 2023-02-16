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
    name: "globalConfigs",
    type: "Object",
    must: "False",
    default: `{
    formSettings: {
        labelAlign: 'top',
    },
    rowSettings: {
        gutter: [16, 16],
    },
    colSettings: {
        span: 6,
    },
    operationSlot: true,
    };`,
    introduction: "公共配置项（表格配置、栅格配置、是否使用内置名为 submitBtn 插槽）",
  },
  {
    name: "configs",
    type: "Array",
    must: "True",
    default: "-",
    introduction: "配置的 json 数据",
  },
  {
    name: "source",
    type: "Array",
    must: "True",
    default: "-",
    introduction: "源数据，一般在 configs 配置好后，搭配 schemaTransfer 方法自动生成",
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
