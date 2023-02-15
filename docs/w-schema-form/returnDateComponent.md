# returnDateComponent

根据传入的时间字符串，返回对应的时间组件。

- 参数: `date: string`

```js
import { returnDateComponent } from "w-schema-form";

returnDateComponent("2023-03-15"); //{ component:"t-date-picker" }
```

**目前支持**
<preview path="../vue-block/w-schema-form/dateComponent.vue"  title="目前支持" description="目前支持"></preview>

::: warning 注意
方法对日期的校验依赖于 `dayjs` 库，使用前请先安装。
:::
