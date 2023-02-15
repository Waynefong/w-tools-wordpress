// .vitepress/theme/index.js

import DefaultTheme from "vitepress/theme";
import "tdesign-vue-next/es/style/index.css";
export default {
  ...DefaultTheme,
  enhanceApp: ({ app, router, siteData, isServer }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    import("tdesign-vue-next").then((module) => {
      app.use(module);
    });
  },
};
