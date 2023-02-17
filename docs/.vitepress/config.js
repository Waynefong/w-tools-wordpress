import { defineConfig } from "vitepress";
import { componentPreview, containerPreview } from "@vitepress-demo-preview/plugin";

export default defineConfig({
  title: "w-*",
  description: "Some tools from my work",
  base: "/w-tools-wordpress/",
  themeConfig: {
    sidebar: [
      {
        text: "简介",
        items: [
          { text: "想法的来源", link: "/introduction/why" },
          { text: "什么是 w-mini-tools", link: "/introduction/w-mini-tools" },
          { text: "什么是 w-schema-form", link: "/introduction/w-schema-form" },
          { text: "特别提醒", link: "/introduction/tips" },
        ],
      },
      {
        text: "w-mini-tools",
        items: [
          { text: "快速起步", link: "/w-mini-tools/" },
          {
            text: "ArrayHelper",
            collapsible: true,
            items: [
              { text: "flatArrFromData", link: "/w-mini-tools/flatArrFromData" },
              { text: "batchAddDel", link: "/w-mini-tools/batchAddDel" },
              { text: "filterDataByCondition", link: "/w-mini-tools/filterDataByCondition" },
              { text: "setDataByStyleRecursion", link: "/w-mini-tools/setDataByStyleRecursion" },
            ],
          },
          {
            text: "NumberHelper",
            collapsible: true,
            items: [
              {
                text: "numMulti",
                link: "/w-mini-tools/numMulti",
              },
            ],
          },
        ],
      },
      {
        text: "w-schema-form",
        items: [
          { text: "快速起步", link: "/w-schema-form/" },
          { text: "基本使用", link: "/w-schema-form/baseUse" },
          { text: "配置项参数", link: "/w-schema-form/schemaConfig" },
          { text: "globalConfigs", link: "/w-schema-form/schemaConfig/globalConfigs" },
          { text: "configs", link: "/w-schema-form/schemaConfig/configs" },
          {
            text: "API",
            collapsible: true,
            items: [
              { text: "schemaTransfer", link: "/w-schema-form/schemaTransfer" },
              { text: "returnDateComponent", link: "/w-schema-form/returnDateComponent" },
            ],
          },
          { text: "Q&A", link: "/w-schema-form/qa" },
        ],
      },
      {
        text: "写到最后",
        link: "/last/",
      },
    ],
  },
  markdown: {
    config(md) {
      md.use(componentPreview);
      md.use(containerPreview);
    },
    lineNumbers: true,
  },
  ignoreDeadLinks: true,
  lastUpdated: true,
});
