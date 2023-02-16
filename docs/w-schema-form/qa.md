# Q&A

1. 组件必传的两个配置项中，source 源数据需要手动编辑传入吗？

:::tip 答
不需要，只需要在 configs 数据配置好后，调用 [schemaTransfer](schemaTransfer)，就可以自动生成响应式的源数据了。
:::

2. 如果绑定的数据不止一个层级，如 a 下面的 b 下面的 c 值要怎么办？

:::tip 答
在设计之初我也遇到过这个问题，现在只需要在 configs 配置的【model】项中按照你想的层级填入就行，如问题中的情况，可以直接输入【a.b.c】，更多配置信息参考 [configs](schemaConfig/configs)。

```js
const configs = [{
    ...
    model: 'a.b.c'
}]
```

:::

3. 如果表单项是依赖于某些条件渲染的，可以通过配置实现吗？

:::tip 答
目前仅支持 **v-if** 判断，如某个表单项渲染条件是：当数据中的【name】值等于 "abc" 时展示。我们可以在 configs 配置的【dependence】项中填入 { if: "\_\_name\_\_ === 'abc'" } ，其中的 \_\_${}\_\_ 为固定写法，更多配置信息参考 [configs](schemaConfig/configs)。

```js
const configs = [{
    ...
    dependence:{
        if: "__name__ === 'abc'"
    }
}]
```

:::
