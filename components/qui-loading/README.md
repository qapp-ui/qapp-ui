# qui-loading

> 加载提示组件，依赖qui-overlay组件

## 预览
<img src="https://qapp-ui.github.io/qapp-ui/docs/assets/qui-loading.gif" width="300"/>

## 依赖接口

无依赖

## 使用方法

```ux
<import name="qui-loading" src="@qapp-ui/qui-loading/index"></import>

<template>
  <div class="page">
    <input type="button" value="显示loading" @click="showLoading" />
    <qui-loading visible="{{visible}}" text="{{text}}"></qui-loading>
  </div>
</template>

<script>
  export default {
    private: {
      visible: '0',
      text: '正在加载...'
    }
  }
</script>
```

更详细代码可以参考[qui-loading demo](https://github.com/qapp-ui/qapp-ui/blob/master/src/Loading/index.ux)

## 参数

| 名称 | 类型 | 必填 | 默认值 | 描述 |
|--------|---------|--------|-------|-------|
| visible | `String` | `N` | `0` | 是否显示，`'1'`表示显示，`'0'`表示隐藏
| image | `String` | `N` | `base64格式加载gif图片` |自定义加载图标的url，默认为常规loading图标
| text | `String` | `N` | `''` |加载提示文本

