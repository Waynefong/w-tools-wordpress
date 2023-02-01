export default {
  title: "w-*",
  description: "Some tools from my work",
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
        items: [{ text: "快速起步" }],
      },
    ],
  },
};
