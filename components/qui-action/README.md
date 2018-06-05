# qui-action

> 操作选择列表，支持android和ios的风格，依赖qui-overlay组件。

## 预览
<img src="https://qapp-ui.github.io/qapp-ui/docs/assets/qui-action.gif" width="300"/>

## 依赖接口

无依赖

## 使用方法

```ux
<import name="qui-action" src="@qapp-ui/qui-action/index"></import>
<import name="qui-toast" src="@qapp-ui/qui-toast/index"></import>

<template>
  <div class="page">
    <input type="button" value="显示" @click="show">
    <input type="button" value="切换风格" @click="switchStyle">
    <qui-action option="{{option}}" @qui-overlay-click="hide" @qui-select="select" @qui-cancel="cancel"></qui-action>
    <qui-toast id="qui-toast"></qui-toast>
  </div>
</template>

<script>
  export default {
    private: {
      option: {
        options: [
          'action1action1action1action1action1action1',
          'action2',
          'action3'
        ]
      }
    },
    onReady() {
      this.toast = this.$child('qui-toast')
    },
    onBackPress() {   //按返回键关闭qui-action
      if (this.option.show) {
        this.option.show = false

        return true
      }
    },
    switchStyle() {
      this.option.iosStyle = !this.option.iosStyle
      this.option.cancel = '取消'
    },
    show() {
      this.option.show = true
    },
    hide() {
      this.option.show = false
    },
    select(event) {
      this.toast.show({
        type: 'success',
        text: `选择的第${event.detail.index + 1}个选项`
      })
    },
    cancel() {
      this.option.show = false
      this.toast.show({
        text: '取消'
      })
    }
  }
</script>
```

更详细代码可以参考[qui-action demo](https://github.com/qapp-ui/qapp-ui/blob/master/src/Action/index.ux)

## 参数

qui-action只接受属性option，option为对象，各属性如下

| 名称 | 类型 | 必填 | 默认值 | 描述 |
|-------|-----|-----|-----|-----|
| show | `Boolean`| `N`| `false`| 显示或隐藏操作列表 |
| background| `String`| `N` | `rgba(0,0,0,0.4)`| 蒙层背景色，支持所有合法background |
| autoClose| `Boolean`| `N` | `true`| 点击蒙层是否自动关闭 |
| iosStyle| `Boolean`| `N` | `false`| 是否为ios风格，默认为android风格 |
| cancel| `String`| `N` | `取消`| 取消按钮的文本，空字符串则没有取消按钮，(**只在ios风格下才有效**) |
| options| `String Array`| `Y`| `-`| 操作名称列表，如['action1','action2','action3'] |

## 事件

| 事件名 | 参数 | 描述 |
|-------|-----|-----|
|qui-overlay-click | `-` | 点击蒙层时触发 |
|qui-select | `{index}` | 点击操作选项时会触发，index表示当前点击的操作选项的索引，在事件处理函数中通过evt.detail.index获取 |
|qui-cancel | `-` | 点击取消按钮时触发 |
