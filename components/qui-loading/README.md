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
    <input type="button" value="显示" @click="show">
    <qui-loading option="{{loading}}"></qui-loading>
  </div>
</template>

<style>
  .page {
    flex-direction: column;
    align-items: center;
  }

  .page input {
    margin: 20px;
    padding: 20px;
    background-color: #888888;
  }
</style>

<script>
  export default {
    private: {
      loading: {
        show: false,
        text: '正在加载'
      }
    },
    onBackPress() {
      if (this.loading.show) {
        setTimeout(() => {
          this.loading.show = false
        })

        return true
      }
    },
    show() {
      this.loading.show = true
      setTimeout(() => {
        this.loading.show = false
      }, 5000)
    }
  }
</script>
```

更详细代码可以参考[qui-loading demo](https://github.com/qapp-ui/qapp-ui/blob/master/src/Loading/index.ux)

## 参数

qui-loading只接受属性option，option为对象，各属性如下

| 名称 | 类型 | 必填 | 默认值 | 描述 |
|--------|---------|--------|-------|-------|
| show | `Boolean` | `N` | `false` | 是否显示
| image | `String` | `N` | `base64格式加载gif图片` |自定义加载图标的url，默认为常规loading图标
| text | `String` | `N` | `''` |加载提示文本

