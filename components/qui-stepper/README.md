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
        <qui-stepper option="{{stepperData1}}" @qui-value-changed="valueChange"
          @qui-min-over="minOver" @qui-max-over="maxOver"></qui-stepper>
      </div>
    <div>
</template>

<script>
  export default {
    private: {
      stepperData1: {
        defaultValue: 1,
        step: 2,
        min: 0,
        max: 10
      }
    }
  }
</script>
```

更详细代码可以参考 [qui-stepper demo](https://github.com/qapp-ui/qapp-ui/blob/master/src/Stepper/index.ux)

### 参数 option

| 属性名 | 类型 | 是否必填 | 默认值 | 描述 |
|-------------|------------|--------|-----|-----|
| defaultValue | `Number` | `N` |`1`| 初始值 |
| step | `Number` | `N` |`1`| 步幅 |
| min | `Number` | `N` |`1`| 范围（最小值） |
| max | `Number` | `N` |`100`| 范围（最大值） |
| disabled | `Boolean` | `N` |`false`| 是否禁用计数器 |
| readOnly | `Boolean` | `N` |`false`| 是否只读（无法输入） |


### 事件

| 事件名 | 参数 | 描述 | 
|-------|-----|-----|
| qui-value-changed | `{value: value}` | 数值发生变化 | 
| qui-min-over | `{value: value}` | 数值超过最小值 | 
| qui-max-over | `{value: value}` | 数值超过最大值 | 

