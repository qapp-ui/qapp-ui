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
      <div class="item-box ">
        <text class="item-tit ">CheckboxList(无间隔线) - 选中的值：{{value}}</text>
        <qui-checkbox values="{{data.values}}" checked="{{data.checked}}" 
        options="{{data.options}}" is-right="1" has-border="0" 
        @qui-checkbox-change="callback"></qui-checkbox>
    </div>
    <div>
</template>

<script>
 export default {
    data: {
      value: [],
      data: {
        values: ['apple', 'banana'],
        options: [
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
            disabled: true,
            label: '芒果',
            value: 'mango'
          }
        ]
      }
    },
    onInit() {
      this.value = [...this.data.values]
      this.$page.setTitleBar({ text: 'Checkbox' })
    },
    evtEmit() {
      // 父组件向指定子组件触发事件
      this.$vm('childVm').$broadcast('evtCast', { params: 1 })
    },
    callback(data) {
      this.value = [...data.detail.values]
    }
  }
</script>
```

更详细代码可以参考 [qui-checkbox demo](https://github.com/qapp-ui/qapp-ui/blob/master/src/Checkbox/index.ux)

### 参数

| 属性名 | 类型 | 是否必填 | 默认值 | 描述 |
|----------------|------------|--------|-----|-----|
| values | `Array` |`N`| `-` | 选中的值 |
| checked | `Array` |`N`| `-` | 选项对应的状态 true/false |
| options | `Array` |`N`| `-` | 选项(String(注1) or Object(注2，详细内容见下表)) |
| labelMargin | `String` |`N`| `30px` | 显示的标签文字与选择框之间的距离 |
| labelFontSize | `String` |`N`| `44px` | 显示的标签文字大小 |
| labelColor | `String` |`N`| `#000000` | 显示的标签文字颜色 |
| isRight | `Boolean` |`N`| `0` | 选择框是否在右边，默认在左边 |
| hasBorder | `Boolean` |`N`| `1` | checkboxList项之间间隔线，默认有实线 |
| checkedColor | `String` |`N`| `#2998F9` | track样式 开状态背景色 |
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
| qui-checkbox-change | `{values: this.values}` | checkbox状态切换响应事件 |

### 注意点
- `checked: []` 是子组件内用来绘制checkbox是否选中，组件内部会根据`values: []`计算`options: []`中对应项的状态，如果一个页面中引入多个子组件，须在外部声明；不声明，会有一定的问题；只要声明下，不需要真正的填写对应状态值
