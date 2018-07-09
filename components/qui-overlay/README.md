# qui-overlay

> 蒙层组件，可以自定义显示的内容。

## 预览
<img src="https://qapp-ui.github.io/qapp-ui/docs/assets/qui-overlay.gif" width="300"/>

## 依赖接口

无依赖

## 使用方法

```ux
<import name="qui-toast" src="@qapp-ui/qui-toast/index"></import>
<import name="qui-overlay" src="@qapp-ui/qui-overlay/index"></import>
<import name='qui-switch' src='@qapp-ui/qui-switch/index'></import>

<template>
  <div class="page-doc">
    <qui-overlay visible="{{overlayVisible}}" background="{{overlayBackground}}" @qui-overlay-click="overlayClick">
    </qui-overlay>
    <qui-toast id="qui-toast"></qui-toast>
    <div class="item-box">
      <div class="item no-bor">
        <text class="item-dt">显示overlay</text>
        <qui-switch option="{{data}}" @qui-switch-change="toggle"></qui-switch>
      </div>
      <div class="item">
        <text class="item-dt">点击蒙层是否自动关闭</text>
        <qui-switch option="{{data1}}" @qui-switch-change="autoClose"></qui-switch>
      </div>
    </div>
    <div class="item-box">
      <div class="item no-bor">
        <div class="background">
          <text class="item-dt">蒙层背景色
            <span class="item-dt">{{overlayBackground}}</span>
          </text>
          <div>
            <div class="margin-top">
              <text class="item-dw">r(
                <span>{{r}}</span>)：</text>
              <slider max="255" value="{{r}}" @change="rfn" class="selected"></slider>
            </div>
            <div class="margin-top">
              <text class="item-dw">g(
                <span>{{g}}</span>)：</text>
              <slider max="255" value="{{g}}" @change="gfn" class="selected"></slider>
            </div>
            <div class="margin-top">
              <text class="item-dw">b(
                <span>{{b}}</span>)：</text>
              <slider max="255" value="{{b}}" @change="bfn" class="selected"></slider>
            </div>
            <div class="margin-top">
              <text class="item-dw">a(
                <span>{{a / 100}}</span>)：</text>
              <slider max="100" value="{{a}}" @change="afn" class="selected"></slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    private: {
      data: {
        disabled: false,
        value: false
      },
      data1: {
        disabled: false,
        value: true
      },
      overlayVisible: '0',
      overlayBackground: 'rgba(0,0,0,0.4)',
      overlayAutoClose: '1',
      r: 0,
      g: 0,
      b: 0,
      a: 0,
    }
  }
</script>
```

更详细代码可以参考[qui-overlay demo](https://github.com/qapp-ui/qapp-ui/blob/master/src/Overlay/index.ux)

## 参数

| 名称 | 类型 | 必填 | 默认值 | 描述 |
|--------|--------|--------|-----|-----|
| visible | `String` | `N` | `0` | 显示或隐藏蒙层，`'1'`表示显示，`'0'`表示隐藏 |
| background | `String` | `N` | `rgba(0,0,0,0.4)` | 蒙层背景色，支持所有合法background |

## 事件

| 名称 | 参数 | 描述 |
|---------|-------|--------|
| qui-overlay-click | `-` | 点击蒙层时触发，可以在该事件中进行相关处理，如关闭蒙层等 |


## 注意点

**可以在组件中插入自定义的内容，并且可以自定义内容的动画等**
