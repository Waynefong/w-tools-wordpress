# 快速起步

:::tip 提示
在这里，你可以了解什么是 [w-schema-form](/)。
:::

## 安装

使用 npm 安装

```sh
npm i w-schema-form
```

## 使用

**全局使用**

```js
//TDesign为依赖的组件库
import TDesign from "tdesign-vue-next";
import "tdesign-vue-next/es/style/index.css";
//全局引入w-schema-form
import wSchemaForm from "w-schema-form";

const App = createApp(app).use(wSchemaForm).use(TDesign);
```

**按需引入使用**

```vue
<script setup>
import { wSchemaForm } from "w-schema-form";
</script>
```

::: warning 注意
无论使用何种方式，切记需要引入依赖的组件库。
:::
