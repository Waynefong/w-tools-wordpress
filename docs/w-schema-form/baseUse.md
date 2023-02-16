# 基本使用

<preview path="../vue-block/w-schema-form/baseUse.vue"  title="基本使用" description="基本使用"></preview>

:::details 展开查看

```vue
<template>
  <div class="template-container">
    <w-schema-form :configs="configs" :source="source" :globalConfigs="globalConfigs">
      <template #slotInput>
        <t-input size="large" v-model="source.slotInput"></t-input>
      </template>
      <template #submitBtn>
        <t-button type="submit" size="large" block>提交</t-button>
      </template>
    </w-schema-form>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { wSchemaForm, schemaTransfer } from "w-schema-form";
const globalConfigs = ref({
  colSettings: {
    span: 12,
  },
});
const configs = computed(() => {
  return [
    {
      component: "t-input",
      label: "输入框",
      props: {
        size: "large",
        placeholder: "请输入",
      },
      model: "tInput",
      type: "string",
      rules: [
        {
          required: true,
        },
      ],
    },
    {
      component: "t-date-picker",
      label: "日期选择器",
      props: {
        size: "large",
        class: "custom-date-picker",
      },
      model: "tDatePicker",
      type: "string",
    },
    {
      component: "slot",
      label: "插槽输入框",
      model: "slotInput",
      type: "string",
    },
  ];
});
const source = ref(schemaTransfer(configs.value));
</script>
```

:::
