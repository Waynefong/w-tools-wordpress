# setDataByStyleRecursion

返回根据指定格式和递归关键字处理后的数组数据。

- 支持递归，需设置判断递归的 key 值，如传入数组希望将 children 值对应的数据也进行递归，则 recursionKey 传入 children。
- 参数: `data: Array, style: Object, recursionKey?: String`

```js
const inputData = [
  {
    name: "Tom",
    age: 30,
    child: [
      {
        name: "Jerry",
        age: 5,
      },
    ],
  },
]; //源数据
const style = {
  label: "name",
  value: "age",
  children: "child",
}; //期望处理后的格式
const recursionKey = "children"; //递归关键字
console.log(setDataByStyleRecursion(inputData, style, recursionKey));
/**
 * [{
    label: "Tom",
    value: 30,
    children: [
      {
        label: "Jerry",
        value: 5,
      },
    ],
   }]
 */
```

::: warning 注意
递归关键字需 style 内配置的 key。
:::
