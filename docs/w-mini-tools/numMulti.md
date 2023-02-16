# numMulti

返回倍数放大后的数字。

::: tip 提示
该方法解决数字精度丢失问题，如：19.9\*100 ≠ 1990。
:::

- 参数: `num: Number, multiple: Number`

```js
const num = 19.9; //待转换数字
const multiple = 100; //倍数
console.log(numMulti(num, multiple)); //1990
```
