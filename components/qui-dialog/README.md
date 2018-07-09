# qui-dialog

> 对话框组件，支持自定义标题、正文内容、按钮。依赖qui-overlay，qui-button组件

## 预览
<img src="https://qapp-ui.github.io/qapp-ui/docs/assets/qui-dialog.gif" width="300"/>

## 依赖接口

无依赖

## 使用方法

```ux
<import name="qui-dialog" src="@qapp-ui/qui-dialog/index"></import>
<import name="qui-toast" src="@qapp-ui/qui-toast/index"></import>

<template>
  <div class="page">
    <input type="button" value="常规对话框" @click="normal" />
    <input type="button" value="无标题的对话框" @click="noTitle" />
    <input type="button" value="只有确定按钮的对话框" @click="noCancel" />
    <input type="button" value="无按钮的对话框" @click="noBtn" />
    <qui-dialog visible="{{dialog.visible}}" title="{{dialog.title}}" btns="{{dialog.btns}}" @qui-btn-click="btnClick" @qui-overlay-click="overlayClick">
      <text>这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容</text>
    </qui-dialog>
    <qui-toast id="qui-toast"></qui-toast>
  </div>
</template>


<script>
  export default {
    private: {
      option: {
        visible: '1',
        title: '对话框',
        btns: [{
          text: '确定',
          color: '#0090ff'
        }, {
          text: '取消',
          color: '#999999'
        }]
      },
      dialog: {}
    }
  }
</script>
```

更详细代码可以参考[qui-dialog demo](https://github.com/qapp-ui/qapp-ui/blob/master/src/Dialog/index.ux)

## 参数

| 名称 | 类型 | 必填 | 默认值 | 描述 |
|------------|------------|--------|-----|-----|
| visible | `String` | `N` | `0` |显示或隐藏对话框，`'1'`表示显示，`'0'`表示隐藏 |
| background | `String` | `N` | `rgba(0,0,0,0.4)` |蒙层背景色，支持所有合法background |
| title | `String` | `N` | `''` | 对话框标题，默认为空字符串 |
| btns | `Array` | `N` | `[{text: '确定',color: '#0090ff'}, {text: '取消',color: '#999999'}]` | 按钮，默认有确定和取消按钮 |
| btns[{text}] | `String` | `Y` | `-` | 按钮文本 |
| btns[{color}] | `String` | `N` | `#000000` | 按钮文本颜色和边框颜色 |


## 事件

| 名称 | 参数 | 描述 |
|----------|------------|--------|
| qui-overlay-click | `-` | 点击蒙层时触发 |
| qui-btn-click| `{index: evt.detail.index}` | 点击按钮时触发，index表示第几个按钮，从0开始，在事件处理函数中通过event.detail.index获取 |
