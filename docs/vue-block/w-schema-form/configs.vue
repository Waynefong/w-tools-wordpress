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
    title: "说明",
    colKey: "introduction",
  },
  {
    title: "备注",
    colKey: "other",
  },
];
const data = [
  {
    name: "component",
    type: "String",
    must: "True",
    introduction: "组件名，如渲染输入框则输入【t-input】",
    other: "当值为【slot】时，默认为插槽，name值为 model 所设置的值",
  },
  {
    name: "label",
    type: "String",
    must: "True",
    introduction: "表单项名称，如该项需要输入“姓名”，label 值则为【姓名】",
    other: "-",
  },
  {
    name: "labelToolTips",
    type: "String",
    must: "False",
    introduction: "关于 label 的其他说明文字",
    other: "会在 label 旁边生成一个小问号，依赖于【tdesign-icons-vue-next】，使用时需要安装",
  },
  {
    name: "props",
    type: "Object",
    must: "False",
    introduction: "组件属性，如待渲染组件为 t-input，则对应 TDesign 中输入框的 Input Props",
    other: `例：{ size: "large" }`,
  },
  {
    name: "listener",
    type: "Object",
    must: "False",
    introduction: "组件事件，如待渲染组件为 t-input，则对应 TDesign 中输入框的 Input Events",
    other: `例：{ change: ()=>{} }`,
  },
  {
    name: "colSettings",
    type: "Object",
    must: "False",
    introduction: "表单项单独的列配置，占栅格系统的大小",
    other: `例：{ span:12 }`,
  },
  {
    name: "model",
    type: "String",
    must: "True",
    introduction: "v-model 绑定值，支持多层级数据",
    other: "-",
  },
  {
    name: "type",
    type: "String",
    must: "False",
    introduction: "v-model 绑定值的数据类型，目前仅支持 string、number、array、object 四个值",
    other: "-",
  },
  {
    name: "rules",
    type: "String",
    must: "False",
    introduction: "表单校验条件，对应 TDesign 中 FormRule",
    other: "-",
  },
  {
    name: "dependence",
    type: "Object",
    must: "False",
    introduction: "依赖条件，目前仅支持 v-if 判断",
    other: `例：{
        if: "__type__ === 'banner'",
      }`,
  },
  {
    name: "default",
    type: "String",
    must: "False",
    introduction: "v-model 默认值",
    other: "-",
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
