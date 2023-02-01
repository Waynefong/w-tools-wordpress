# batchAddDel

返回根据差集处理后的数组数据。

- 参数: `addition: Array, reduce: Array, data: Array`

```js
const inputData = [1, 2, 3, 4, 5]; //源数据
const addition = [6]; //待新增数组
const reduce = [2]; //待删减数组
console.log(batchAddDel(addition, reduce, inputData)); //[1, 3, 4, 5, 6]
```
