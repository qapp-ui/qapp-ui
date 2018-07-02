# qui-lightbox

> 幻灯片组件, 用于图片列表全屏显示

## 预览

<img src="https://qapp-ui.github.io/qapp-ui/docs/assets/qui-lightbox.gif" width="300"/>

## 依赖接口

无依赖

## 使用方法

```ux
<import name="qui-lightbox" src="@qapp-ui/qui-lightbox/index"></import>

<template>
  <div class="page-doc">
    <input class="input-button" type="button" value="显示幻灯片(特定indicator样式)" onclick="showlightbox" />
    <qui-lightbox option="{{lightboxData}}" @qui-close-click="closeClick"></qui-lightbox>
  </div>
</template>

<script>
  export default {
    private: {
      lightboxData: {
        show: false,
        showIndicator: true,
        indicatorColor: 'rgba(0, 0, 0, 1)',
        indicatorSelectedColor: '#ff0000',
        indicatorSize: '30px',
        imageList: ['/Lightbox/img/img1.jpg', '/Lightbox/img/img2.jpg','/Lightbox/img/img3.jpg', '/Lightbox/img/img4.jpg']
      }
    }
  }
</script>
```

更详细代码可以参考[qui-lightbox demo](https://github.com/qapp-ui/qapp-ui/blob/master/src/Lightbox/index.ux)

## 参数 option

| 属性名 | 类型 | 是否必填 | 默认值 | 描述 |
|-------------|------------|--------|-----|-----|
| imageList | `Array` | `N` |`[]`| 全屏显示图片列表 |
| showIndicator | `Boolean` |`N`| `true` | 全屏后是否显示索引 |
| indicatorColor | `String` |`N`| `rgba(0, 0, 0, 0.5)` | 索引填充颜色 |
| indicatorSelectedColor | `String` |`N`| `#33b4ff` | 索引选中时的颜色 |
| indicatorSize | `String` |`N`| `20px` | 索引组件的直径大小 |
| show | `Boolean` | `N` |`true`| 是否显示 |


## 事件

| 事件名 | 参数 | 描述 | 
|-------|-----|-----|
| qui-close-click | `-` | 幻灯片点击关闭事件 | 
