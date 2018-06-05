# qui-button

> 按钮组件，可自定义样式，支持点击效果

## 预览

<img src="./docs/assets/qui-button.jpeg" width="300"/>

## 依赖接口

无依赖

## 使用方法

```ux
<import name='qui-button' src='@qapp-ui/qui-button/index'></import>

<template>
    <div class="page-doc">
      <qui-button class="qui-btn" option="{{btnData}}" @qui-clicked="onClick"></qui-button>
    <div>
</template>
```

更详细代码可以参考 [qui-button demo]()

### 参数 option

| 属性名 | 类型 | 是否必填 | 默认值 | 描述 |
|-------------|------------|--------|-----|-----|
| text | `String` |`N`| `按钮` | 展现的文字 |
| disabled | `Boolean` |`N`| `false` | 是否 disabled |
| btnStyle | `Object` |`N`| `{}` | 按钮的样式对象 (注1，详细内容见下表) |
| textStyle | `Object` |`N`| `{}` | 文字的样式对象 (注2，详细内容见下表)|

#### btnStyle (注1)

| 属性名 | 类型 | 是否必填 | 默认值 | 描述 |
|-------------|------------|--------|-----|-----|
| backgroundColor | `String` |`N`| `#0F8DE8` | 按钮背景色 |
| borderColor | `String` |`N`| `''` | 按钮边框颜色 |
| borderWidth | `String` |`N`| `0px` | 按钮边框宽度 |
| borderRadius | `String` |`N`| `12px` | 按钮边框圆角 |
| width | `String` |`N`| `300px` | 按钮宽度 |
| height | `String` |`N`| `100px` | 按钮高度 |

#### textStyle (注2)

| 属性名 | 类型 | 是否必填 | 默认值 | 描述 |
|-------------|------------|--------|-----|-----|
| color | `String` |`N`| `#000000` | 文字颜色 |
| fontSize | `String` |`N`| `36px` | 文字字体大小 |

### 事件

| 事件名 | 参数 | 描述 | 
|----------|-----|-----|
| qui-clicked | `option对象` | 按钮响应事件，evt.detail为传入的参数option | 
