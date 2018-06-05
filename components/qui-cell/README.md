# qui-cell

> 单元格组件，可用作展示列表信息

## 预览

<img src="https://qapp-ui.github.io/qapp-ui/docs/assets/qui-cell.jpg" width="300"/>

## 依赖接口

无依赖

## 使用方法
	
```ux
<import name='qui-cell' src='@qapp-ui/qui-cell/index'></import>
<import name='qui-switch' src='@qapp-ui/qui-switch/index'></import>

<template>
  <div class="page-doc">
    <div class="cell-box">
      <text class="text">带图标能点击的Cell</text>
      <qui-cell option="{{cellData1}}" @qui-cell-click="cellClicked"></qui-cell>
    </div>
  </div>
</template>
<script>
  import prompt from '@system.prompt'
  export default {
    data: {
      switchData: {
        value: false
      },
      cellData1: {
        backgroundColor: '#FFFFFF',
        leftImg: '/Common/logo.png',
        title: '测试标题',
        desc: '测试说明',
        hasArrow: true,
        titleColor: '#008000',
        descColor: '#d00000'
      }
    },
    cellClicked() {
      this.cellData1.selected = !this.cellData1.selected
      prompt.showToast({
        message: 'cell clicked'
      })
    }
  }
</script>
```

更详细代码可以参考 [qui-cell demo](https://github.com/qapp-ui/qapp-ui/blob/master/src/Cell/index.ux)

### 参数 option

| 属性名 | 类型 | 是否必填 | 默认值 | 描述 |
|-------------|------------|--------|-----|-----|
| backgroundColor | `String` |`N`| `#FFFFFF` | 背景色 |
| leftImg | `String` |`N`| `''` | 图片url|
| title | `String` |`N`| `''` | 标题 |
| titleColor | `String` |`N`| `''` | 标题颜色|
| desc | `String` |`N`| `''` | 描述 |
| descColor | `String` |`N`| `#808080` | 描述颜色 |
| hasArrow | `Boolean` |`N`| `true` | 是否有箭头 |
| height | `String` |`N`| `100px` | 高度（direction为row时默认高度是100px，column时默认高度是120px） |
| direction | `String` |`N`| `row` | title和desc的布局 （支持row，column方式） |


### 事件

| 事件名 | 参数 | 描述 | 
|----------|-----|-----|
| qui-cell-click | `-` | cell点击事件 |


