# qui-radio

> 单选框组件

## 预览


<img src="./docs/assets/qui-radio.gif" width="300"/>
## 依赖接口

无依赖

## 使用方法
	
```ux
<import name='qui-radio' src='@qapp-ui/qui-radio/index'></import>

<template>
    <div class="page-doc">
      <div class="item-box">
        <qui-radio option="{{data0}}" @qui-radio-change="callback"></qui-radio>
      </div>
      <div class="item-box">
        <qui-radio option="{{data1}}"></qui-radio>
      </div>
    <div>
</template>

<script>
  export default {
    data: {
      data0: {
        value: '牛肉',
        options: ['牛肉', '猪肉']
      },
      data1: {
        value: 'a',
        options: [
          {
            disabled: false,
            label: '男',
            value: 'a'
          },
          {
            disabled: false,
            label: '女',
            value: 'b'
          }
        ]
      }
    },
    callback(data) {
      // event code here
    }
  }
</script>
```

更详细代码可以参考 [qui-radio demo]()

### 参数option

| 属性名 | 类型 | 是否必填 | 默认值 | 描述 |
|-------------|------------|--------|-----|-----|
| value | `String` |`N`| `` | 选中的值 |
| options | `Array` |`N`| `[]` | 选项（String or Object） |
| options.label | `String` |`N`| `-` | 显示的标签文字 |
| options.value | `String` |`N`| `-` | 选项的值 |
| options.disabled | `Boolean` |`N`| `false` | 选项是否可用 |
| labelMargin | `String` |`N`| `30px` | 显示的标签文字与选择框之间的距离 |
| labelFontSize | `String` |`N`| `44px` | 显示的标签文字大小 |
| labelColor | `String` |`N`| `#000000` | 显示的标签文字颜色 |
| isRight | `Boolean` |`N`| `false` | 选择框是否在右边，默认在左边 |
| isBorder | `Boolean` |`N`| `true` | 一组单选项之间间隔线，默认有实线 |
| thumbCheckedColor | `String` | `N` |`#2998F9`| thumb样式 开状态打勾色 |
| checkedBorderColor | `String` |`N`| `#2998F9` | track样式 开状态边框色 |

### 事件

| 事件名 | 参数 | 描述 | 
|-------|-----|-----|
| qui-radio-change | `{values: this.option.value}` | radio状态切换响应事件 |
