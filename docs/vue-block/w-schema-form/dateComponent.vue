<template>
  <t-base-table :data="data" :columns="columns"> </t-base-table>
</template>

<script setup>
const columns = [
  {
    title: "日期格式",
    colKey: "dateType",
  },
  {
    title: "返回数据",
    colKey: "resultData",
  },
];
const data = [
  {
    dateType: "YYYY-MM-DD",
    resultData: `{
      component: "t-date-picker"
    }`,
  },
  {
    dateType: "YYYY/MM/DD",
    resultData: `{
      component: "t-date-picker"
    }`,
  },
  {
    dateType: "YYYY-M-D",
    resultData: `{
      component: "t-date-picker"
    }`,
  },
  {
    dateType: "YYYY/M/D",
    resultData: `{
      component: "t-date-picker"
    }`,
  },
  {
    dateType: "YYYY-MM-DD HH:mm:ss",
    resultData: `{
      component: "t-date-picker",
      props: {
        enableTimePicker: true
      }
    }`,
  },
  {
    dateType: "YYYY-M-D HH:mm:ss",
    resultData: `{
      component: "t-date-picker",
      props: {
        enableTimePicker: true
      }
    }`,
  },
  {
    dateType: "YYYY年MM月DD日 HH:mm:ss",
    resultData: `{
        component: "t-date-picker",
      props: {
        enableTimePicker: true
      }
    }`,
  },
  {
    dateType: "YYYY年M月D日 HH:mm:ss",
    resultData: `{
       component: "t-date-picker",
      props: {
        enableTimePicker: true
      }
    }`,
  },
  {
    dateType: "HH:mm:ss",
    resultData: `{
      component: "t-timePicker"
    }`,
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
