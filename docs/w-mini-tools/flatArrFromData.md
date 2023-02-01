# flatArrFromData

返回根据 value 值与递归关键字，扁平化后的数组数据。

- 参数: `data: Array`

```js
const inputData = [{ value: 1, children: [{ value: 2 }] }]; //源数据
console.log(flatArrFromData(inputData)); //[1, 2]
```

::: warning 注意
目前仅匹配 value 值，需要递归处理的话，子级 key 为 children。
:::
