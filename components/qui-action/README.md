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
    <input type="button" value="显示（ios风格）" @click="switchIos" />
    <input type="button" value="显示(android风格)" @click="switchAndroid" />
    <input type="button" value="添加内容" @click="switchList" />
    <qui-action visible="{{option1.visible}}" background="{{option1.background}}" ios-style="{{option1.iosStyle}}" cancel="{{option1.cancel}}" options="{{option1.options}}" @qui-overlay-click="hide" @qui-select="select" @qui-cancel="cancel"></qui-action>
    <qui-action visible="{{option2.visible}}" background="{{option2.background}}" ios-style="{{option2.iosStyle}}" cancel="{{option2.cancel}}" options="{{option2.options}}" @qui-overlay-click="hide" @qui-select="select" @qui-cancel="cancel"></qui-action>
    <qui-toast id="qui-toast"></qui-toast>
  </div>
</template>

<script>
  export default {
    private: {
      option1: {
        visible: '0',
        background: 'rgba(0,0,0,.6)',
        iosStyle: '0',
        cancel: '',
        options: [
          'item1item1item1item1item1item1item1item1item1item1item1item1item1',
          'action2',
          'action3'
        ]
      },
      option2: {
        visible: '0',
        background: 'rgba(0,0,0,.6)',
        iosStyle: '0',
        cancel: '',
        options: [
          'item1item1item1item1item1item1item1item1item1item1item1item1item1',
          'action2',
          'action3'
        ]
      }
    }
  }
</script>
```

更详细代码可以参考[qui-action demo](https://github.com/qapp-ui/qapp-ui/blob/master/src/Action/index.ux)

## 参数

| 名称 | 类型 | 必填 | 默认值 | 描述 |
|-------|-----|-----|-----|-----|
| visible | `String`| `N`| `0`| 显示或隐藏操作列表，`'1'`表示显示，`'0'`表示隐藏 |
| background| `String`| `N` | `rgba(0,0,0,0.4)`| 蒙层背景色，支持所有合法background |
| iosStyle| `String`| `N` | `0`| 是否为ios风格，`'1'`表示为ios风格，`'0'`表示为android风格，默认为android风格 |
| cancel| `String`| `N` | `取消`| 取消按钮的文本，空字符串则没有取消按钮，(**只在ios风格下才有效**) |
| options| `String Array`| `Y`| `-`| 操作名称列表，如['action1','action2','action3'] |

## 事件

| 事件名 | 参数 | 描述 |
|-------|-----|-----|
|qui-overlay-click | `-` | 点击蒙层时触发 |
|qui-select | `{index}` | 点击操作选项时会触发，index表示当前点击的操作选项的索引，在事件处理函数中通过evt.detail.index获取 |
|qui-cancel | `-` | 点击取消按钮时触发 |
