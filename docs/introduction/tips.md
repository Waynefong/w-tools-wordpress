# 特别提醒

## w-schema-form 的依赖关系

w-schema-form 与 w-mini-tools 不同，它是一个组件，因此存在一些**依赖关系**，我们在使用 w-schema-form 时应该注意 `TDesign` 版本。

```json
{
    ...
    "dependencies": {
        ...
        "tdesign-vue-next": "^1.0.4",
        "typescript": "^4.9.4",
        "vue": "^3.2.45"
    }
}
```

:::warning 注意
虽然 w-schema-form 内的组件渲染主要以 json 配置为主，理论上灵活度是较高的，但是组件的设计初期是围绕 `TDesign` 进行的，所以暂时还是推荐依赖于 `TDesign` 使用。
:::
