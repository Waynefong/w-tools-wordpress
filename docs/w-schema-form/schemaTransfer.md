# schemaTransfer

根据配置的 json 数据，返回具备响应式的源数据。

- 参数: `schemaConfigs: Object`

```js
import { schemaTransfer } from "w-schema-form";

const source = ref(schemaTransfer(configs.value));
```

::: warning 注意
配置的 json 需要符合一定约束条件，详情参考 [configs](schemaConfig/configs)。
:::
