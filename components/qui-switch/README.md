# qui-switch

> 开/关切换器组件

## 预览

<img src="https://qapp-ui.github.io/qapp-ui/docs/assets/qui-switch.gif" width="300"/>

## 依赖接口

无依赖

## 使用方法
	
```ux
<import name='qui-switch' src='@qapp-ui/qui-switch/index'></import>

<template>
    <div class="page-doc">
      <text class="console">当前switch的id:{{text}}</text>
      <div class="item-box">
          <div class="item">
            <qui-switch option="{{data}}" @qui-switch-change="callback"></qui-switch>
            <text class="item-dt" @click="checkStatus()">点我打开</text>
          </div>
      </div>
    <div>
</template>

<script>
  export default {
    data: {
      text: '空值',
      data: {
        disabled: false,
        value: false,
        id: 'remember',
        label: '记住我',
        labelMargin: '20px',
        isLeft: true
      }
    }
  }
</script>
```

更详细代码可以参考 [qui-switch demo](https://github.com/qapp-ui/qapp-ui/blob/master/src/Switch/index.ux)

### 参数option

| 属性名 | 类型 | 是否必填 | 默认值 | 描述 |
|-------------|------------|--------|-----|-----|
| disabled | `Boolean` |`N`| `false` | 是否可用，设置为 true, 将不可用 |
| value | `Boolean` |`N`| `false` | 组件的值，true/false |
| id | `String` |`N`| `-` | id，同显示的标签配合使用，点击标签同样触发效果 |
| label | `String` |`N`| `-` | 显示的标签文字 |
| labelMargin | `String` |`N`| `30px` | 显示的标签文字与切换器之间的距离 |
| labelFontSize | `String` |`N`| `44px` | 显示的标签文字大小 |
| labelColor | `String` |`N`| `#000000` | 显示的标签文字颜色 |
| isLeft | `Boolean` |`N`| `false` | 标签文字是否在左边，默认在右边 |
| checkedColor | `String` |`N`| `#2998F9` | track样式 开状态背景色 |

### 事件

| 事件名 | 参数 | 描述 | 
|-------|-----|-----|
| qui-switch-change | `{id: this.option.id, value: this.option.value}` | 开关状态切换响应事件 |
