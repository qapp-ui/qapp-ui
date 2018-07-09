# qui-radio

> 单选框组件

## 预览


<img src="https://qapp-ui.github.io/qapp-ui/docs/assets/qui-radio.gif" width="300"/>

## 依赖接口

无依赖

## 使用方法
	
```ux
<import name='qui-radio' src='@qapp-ui/qui-radio/index'></import>

<template>
    <div class="page-doc">
      <div class="item-box">
        <text class="item-tit">选中的值：{{value}}</text>
        <qui-radio value='apple' options="{{data}}" @qui-radio-change="callback"></qui-radio>
      </div>
    <div>
</template>

<script>
  export default {
    data: {
      value: '',
      data: [
        {
          disabled: true,
          label: '苹果',
          value: 'apple'
        },
        {
          disabled: false,
          label: '香蕉',
          value: 'banana'
        },
        {
          disabled: false,
          label: '芒果',
          value: 'mango'
        }
      ]
    },
    onInit() {
      this.value = this.data[0].value
      this.$page.setTitleBar({ text: 'Radio' })
    },
    callback(data) {
      this.value = data.detail.values
    }
  }
</script>
```

更详细代码可以参考 [qui-radio demo](https://github.com/qapp-ui/qapp-ui/blob/master/src/Radio/index.ux)

### 参数

| 属性名 | 类型 | 是否必填 | 默认值 | 描述 |
|-------------|------------|--------|-----|-----|
| value | `String` |`N`| `-` | 选中的值 |
| options | `Array` |`N`| `-` | 选项（String（注1） or Object（注2）） |
| labelMargin | `String` |`N`| `30px` | 显示的标签文字与选择框之间的距离 |
| labelFontSize | `String` |`N`| `44px` | 显示的标签文字大小 |
| labelColor | `String` |`N`| `#000000` | 显示的标签文字颜色 |
| isRight | `String` |`N`| `0` | 选择框是否在右边，默认在左边，`'1'`表示是，`'0'`表示否 |
| hasBorder | `String` |`N`| `1` | 一组单选项之间间隔线，默认有实线，`'1'`表示有，`'0'`表示没有 |
| thumbCheckedColor | `String` | `N` |`#2998F9`| thumb样式 开状态打勾色 |
| checkedBorderColor | `String` |`N`| `#2998F9` | track样式 开状态边框色 |

#### options中String (注1)      
String值的作用既是label也是value

#### options中Object (注2)
| 属性名 | 类型 | 是否必填 | 默认值 | 描述 |
|-------------|------------|--------|-----|-----|
| label | `String` |`N`| `-` | 显示的标签文字 |
| value | `String` |`N`| `-` | 选项的值 |
| disabled | `Boolean` |`N`| `false` | 选项是否可用 |

### 事件

| 事件名 | 参数 | 描述 | 
|-------|-----|-----|
| qui-radio-change | `{values: this.value}` | radio状态切换响应事件 |
