# qui-stepper

> 步进器组件

## 预览

<img src="https://qapp-ui.github.io/qapp-ui/docs/assets/qui-stepper.gif" width="300"/>

## 依赖接口

无

## 使用方法
	
```ux
<import name='qui-stepper' src='@qapp-ui/qui-stepper/index'></import>

<template>
    <div class="page-doc">
      <div class="stepper-box">
        <text class="stepper-txt">参数：（默认值:10, 步长：2，最新值：5，最大值：15，只读状态）</text>
        <qui-stepper default-value="10" step="2" min="5" max="15" read-only="1" @qui-value-changed="valueChange"
         @qui-min-over="minOver" @qui-max-over="maxOver"></qui-stepper>
    </div>
    <div>
</template>

<script>
 import prompt from '@system.prompt'
  export default {
    onInit() {
      this.$page.setTitleBar({ text: 'Stepper' })
    },
    valueChange(e) {
      prompt.showToast({
        message: 'value change :' + e.detail.value
      })
    },
    minOver(e) {
      prompt.showToast({
        message: 'min over :' + e.detail.value
      })
    },
    maxOver(e) {
      prompt.showToast({
        message: 'max over :' + e.detail.value
      })
    }
  }
</script>
```

更详细代码可以参考 [qui-stepper demo](https://github.com/qapp-ui/qapp-ui/blob/master/src/Stepper/index.ux)

### 参数 

| 属性名 | 类型 | 是否必填 | 默认值 | 描述 |
|-------------|------------|--------|-----|-----|
| defaultValue | `String` | `N` |`1`| 初始值 |
| step | `String` | `N` |`1`| 步幅 |
| min | `String` | `N` |`1`| 范围（最小值） |
| max | `String` | `N` |`100`| 范围（最大值） |
| disabled | `String` | `N` |`0`| 是否禁用计数器，`'1'`表示是，`'0'`表示否 |
| readOnly | `String` | `N` |`0`| 是否只读（无法输入），`'1'`表示是，`'0'`表示否 |


### 事件

| 事件名 | 参数 | 描述 | 
|-------|-----|-----|
| qui-value-changed | `{value: value}` | 数值发生变化 | 
| qui-min-over | `{value: value}` | 数值超过最小值 | 
| qui-max-over | `{value: value}` | 数值超过最大值 | 

