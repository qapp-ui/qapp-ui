# qui-overlay

> 蒙层组件，可以自定义显示的内容。

## 预览
<img src="./docs/assets/qui-overlay.gif" width="300"/>
## 依赖接口

无依赖

## 使用方法

```ux
<import name="qui-overlay" src="@qapp-ui/qui-overlay/index"></import>

<template>
  <div class="page">
    <input type="button" value="overlay" @click="show">
    <qui-overlay option="{{overlay}}" @qui-overlay-click="hide">
      <text>这是自定义内容</text>
    </qui-overlay>
  </div>
</template>

<script>
  export default {
    private: {
      overlay: {},
      className: undefined
    },
    show() {
      this.overlay.show = true
      this.className = 'enter'
    },
    hide() {
      this.overlay.show = false
      this.className = 'leave'
    }
  }
</script>
```

更详细代码可以参考[qui-overlay demo]()

## 参数

qui-overlay只接受属性option，option为对象，各属性如下

| 名称 | 类型 | 必填 | 默认值 | 描述 |
|--------|--------|--------|-----|-----|
| show | `Boolean` | `N` | `false` | 显示或隐藏蒙层 |
| background | `String` | `N` | `rgba(0,0,0,0.4)` | 蒙层背景色，支持所有合法background |
| autoClose | `Boolean` | `N` | `true` | 点击蒙层是否自动关闭overlay |

## 事件

| 名称 | 参数 | 描述 |
|---------|-------|--------|
| qui-overlay-click | `-` | 点击蒙层时触发，可以在该事件中进行相关处理，如关闭蒙层等 |


## 注意点

**可以在组件中插入自定义的内容，并且可以自定义内容的动画等**
