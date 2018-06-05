# qui-checkbox

> 复选框组件

## 预览

<img src="https://qapp-ui.github.io/qapp-ui/docs/assets/qui-checkbox.gif" width="300"/>

## 依赖接口

无依赖

## 使用方法
	
```ux
<import name='qui-checkbox' src='@qapp-ui/qui-checkbox/index'></import>

<template>
    <div class="page-doc">
      <div class="item-box">
        <qui-checkbox option="{{data0}}" @qui-checkbox-change="callback"></qui-checkbox>
      </div>
      <div class="item-box">
        <qui-checkbox option="{{data1}}"></qui-checkbox>
      </div>
    <div>
</template>

<script>
  export default {
    data: {
      data0: {
        values: [],
        checked: [],
        options: ['默认']
      },
      data1: {
        values: ['b'],
        checked: [],
        options: [{
          disabled: true,
          label: '已选中禁用',
          value: 'b'
        }]
      }
    },
    callback(data) {
      // event code here
    }
  }
</script>
```

更详细代码可以参考 [qui-checkbox demo](https://github.com/qapp-ui/qapp-ui/blob/master/src/Checkbox/index.ux)

### 参数option

| 属性名 | 类型 | 是否必填 | 默认值 | 描述 |
|----------------|------------|--------|-----|-----|
| values | `Array` |`N`| `[]` | 选中的值 |
| checked | `Array` |`N`| `[]` | 选项对应的状态 true/false |
| options | `Array` |`N`| `[]` | 选项（String or Object） |
| options.label | `String` |`N`| `-` | 显示的标签文字 |
| options.value | `String` |`N`| `-` | 选项的值 |
| options.disabled | `Boolean` |`N`| `false` | 选项是否可用 |
| labelMargin | `String` |`N`| `30px` | 显示的标签文字与选择框之间的距离 |
| labelFontSize | `String` |`N`| `44px` | 显示的标签文字大小 |
| labelColor | `String` |`N`| `#000000` | 显示的标签文字颜色 |
| isRight | `Boolean` |`N`| `false` | 选择框是否在右边，默认在左边 |
| isBorder | `Boolean` |`N`| `true` | checkboxList项之间间隔线，默认有实线 |
| checkedColor | `String` |`N`| `#2998F9` | track样式 开状态背景色 |
| checkedBorderColor | `String` |`N`| `#2998F9` | track样式 开状态边框色 |

### 事件

| 事件名 | 参数 | 描述 | 
|-------|-----|-----|
| qui-checkbox-change | `{values: this.option.values}` | checkbox状态切换响应事件 |

### 注意点
- `checked: []` 是子组件内用来绘制checkbox是否选中，组件内部会根据`values: []`计算`options: []`中对应项的状态，如果一个页面中引入多个子组件，须在外部声明；不声明，会有一定的问题；只要声明下，不需要真正的填写对应状态值
