# filterDataByCondition

返回根据关键字过滤后的数组数据。

- 参数: `data: Array, condition: Record`

```js
const condition = { isDisable: false }; //过滤条件
const filterData = [
  { label: "a", value: 1, isDisable: false },
  { label: "b", value: 2, isDisable: true },
]; //源数据
console.log(filterDataByCondition(filterData, condition)); //[{ label: "b", value: 2, isDisable: true }]
```

::: warning 注意
目前仅支持一个层级数组。
:::
