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
    <qui-lightbox visible="{{show}}" show-indicator="1" indicator-color='rgba(0, 0, 0, 1)'
     indicator-selected-color='#ff0000' indicator-size='30px' options="{{imageList}}" @qui-close-click="closeClick"></qui-lightbox>
  </div>
</template>

<script>
   import prompt from '@system.prompt'
   export default {
    private: {
      show: "0",
      imageList: ['/Lightbox/img/img1.jpg', '/Lightbox/img/img2.jpg', '/Lightbox/img/img3.jpg', '/Lightbox/img/img4.jpg']
    },
    onInit() {
      this.$page.setTitleBar({ text: 'Lightbox' })
    },
    showlightbox() {
      this.show = "1"
    }
    onBackPress() {
      let res = false,
        datalist = ['show']
      datalist.forEach(key => {
        if (key === "1") {
          setTimeout(() => {
            key = "0"
          }, 0)
          res = true
        }
      })
      return res
    },
    closeClick(data) {
      this.show = "0"
      prompt.showToast({
        message: '点击幻灯片关闭'
      })
    }
  }
</script>
```

更详细代码可以参考[qui-lightbox demo](https://github.com/qapp-ui/qapp-ui/blob/master/src/Lightbox/index.ux)

## 参数 

| 属性名 | 类型 | 是否必填 | 默认值 | 描述 |
|-------------|------------|--------|-----|-----|
| options | `Array` | `N` |`-`| 全屏显示图片列表 |
| showIndicator | `String` |`N`| `1` | 全屏后是否显示索引 |
| indicatorColor | `String` |`N`| `rgba(0, 0, 0, 0.5)` | 索引填充颜色 |
| indicatorSelectedColor | `String` |`N`| `#33b4ff` | 索引选中时的颜色 |
| indicatorSize | `String` |`N`| `20px` | 索引组件的直径大小 |
| visible | `String` | `N` |`1`| 是否显示 |


## 事件

| 事件名 | 参数 | 描述 | 
|-------|-----|-----|
| qui-close-click | `-` | 幻灯片点击关闭事件 | 
